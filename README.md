# E-Commerce Store

Welcome to our **E-Commerce Store**, a robust platform built using the **MERN stack** (MongoDB, Express.js, React, Node.js) and beautifully styled with **Tailwind CSS**. This project is a showcase of a modern full-stack application featuring a responsive design and essential e-commerce functionalities. We are continuously improving and adding new features.

## 🚀 Features

- **Responsive UI**: Utilizing Tailwind CSS for sleek, modern, and adaptable user interfaces.
- **Product Catalog**: Extensive options to browse, search, and filter through a variety of products.
- **Shopping Cart**: Seamless additions, updates, and removals of items in your cart.
- **Authentication**: Secure user registration and login processes using JWT.
- **Secure Backend**: Robust API services powered by Node.js and Express.js.
- **Database Management**: Efficient data handling with MongoDB.

## 🛠️ Technologies Used

- **Frontend**:
  - React.js
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express.js
- **Database**:
  - MongoDB
- **Development Tools**:
  - npm scripts
  - Concurrently for efficient simultaneous development of frontend and backend

## 📂 Project Structure

- `/api`: Contains backend API logic integrating Express.js and MongoDB.
- `/e-commerce`: Houses the React frontend application, styled using Tailwind CSS.
- `/config`: Manages configuration files for database connections and environment variables.

## 🚀 Getting Started

To get this project up and running on your local machine, follow these steps:

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash

   git clone https://github.com/mrjanjua16/e-commerce-store.git

   ```

2. Navigate to the project directory:

   ```bash
   cd e-commerce-store
   ```

3. Install dependencies for both frontend and backend:

   ```bash
   cd api && npm install

   cd ../e-commerce && npm install
   ```

4. Configure environment variables: Create a `.env` file in the `/api` directory with the following keys:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

   Replace the placeholders with your actual values.

5. Run the development servers:
   - Start the backend:

     ```bash
     cd api && npm run dev
     ```

   - Start the frontend:

     ```bash
     cd e-commerce && npm start
     ```

6. Open the application:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:5000](http://localhost:5000)

## 🤝 Contribution Guidelines

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your message here"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Submit a pull request for review.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

This project is a work in progress. Stay tuned for updates and improvements. For any questions or suggestions, open an issue.
