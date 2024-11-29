import React from "react";

const features = [
  {
    title: "Free Shipping",
    description: "Fat new smallness few supposing",
    icon: (
      <svg
        className="w-12 h-12 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 21H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1V8a5 5 0 0 1 5-5h3v5h5v4h-6.34M9 21h9M9 21a3 3 0 1 0 6 0M9 21a3 3 0 1 1-6 0m6 0v-5h6v5M3 9h4" />
      </svg>
    ),
  },
  {
    title: "Easy Payments",
    description: "Fat new smallness few supposing",
    icon: (
      <svg
        className="w-12 h-12 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17 9V7a5 5 0 0 0-10 0v2a7 7 0 0 0 7 7m-2 0v4m-6 0h10m-5-9h.01" />
      </svg>
    ),
  },
  {
    title: "Money Back Guarantee",
    description: "Fat new smallness few supposing",
    icon: (
      <svg
        className="w-12 h-12 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 8c-4.418 0-8 3.582-8 8m0 0c0 3.314 2.686 6 6 6s6-2.686 6-6a6 6 0 1 0-12 0zm4-8a4 4 0 1 1 8 0" />
      </svg>
    ),
  },
  {
    title: "Finest Quality",
    description: "Fat new smallness few supposing",
    icon: (
      <svg
        className="w-12 h-12 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 8V6a4 4 0 1 1 8 0v2M16 12a4 4 0 0 0-4-4H5a4 4 0 0 0 0 8h7a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0v-2M6 20v.01" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Why Should Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium">{feature.title}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
