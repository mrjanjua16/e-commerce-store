import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.model.js';


import { errorHandler } from '../utils/error.js';

export const register = async (req, res, next) => {
    const { username, email, password, interestCategory } = req.body;

    if (!username || !email || !password) {
        return next(errorHandler(400, 'Username, email and password are required to register!'));
    }
    if (username.length < 3 || password.length < 6) {
        return next(errorHandler(400, 'Username and password must be at least 3 and 6 characters long!'));
    }


    try {
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return next(errorHandler(400, 'Email already in use, please login!'));
        }
        const existingUsername = await User.findOne({ username });

        if (existingUsername) {
            return next(errorHandler(400, 'Username already in use!'));
        }

        const hashedPw = await bcryptjs.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPw,
            interestCategory
        });

        await newUser.save();

        res.json({
            message: 'User registered successfully!',
            user: newUser
        });

    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(errorHandler(400, 'Email and password are required to login!'));
    }

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(400, 'User not found!'));
        }
        const validPw = await bcryptjs.compareSync(password, validUser.password);
        if (!validPw) {
            return next(errorHandler(400, 'Invalid credentials!'));
        }
        const token = jwt.sign({
            id: validUser._id,
            username: validUser.username,
            email: validUser.email,
            isAdmin: validUser.isAdmin
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        const { password: userPw, ...rest } = validUser._doc;

        res
            .status(200)
            .cookie('access_token', token, {
                httpOnly: true,
            })
            .json(rest);

    } catch (error) {
        next(error);
    }
}

export const setAdmin = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return next(errorHandler(400, 'User not found!'));
        }
        if (user.isAdmin) {
            return next(errorHandler(400, 'User is already an admin!'));
        }

        await User.findByIdAndUpdate(id, { $set: { isAdmin: true } });

        res.status(200).json({
            message: 'User updated to admin successfully!'
        });
    } catch (error) {
        next(error);
    }
}

export const unSetAdmin = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return next(errorHandler(400, 'User not found!'));
        }
        if (!user.isAdmin) {
            return next(errorHandler(400, 'User is already not an admin!'));
        }
        await User.findByIdAndUpdate(id, { $set: { isAdmin: false } });

        res.status(200).json({
            message: 'User updated to not-admin successfully!',
            user
        });
    } catch (error) {
        next(error);
    }
}