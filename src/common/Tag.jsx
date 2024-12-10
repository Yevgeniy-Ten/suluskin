import React from 'react';

export const Tag = ({children}) => {
  const classes = [
    "bg-red-100", "bg-green-100 text-white", "bg-blue-100",
    "bg-yellow-100", "bg-indigo-100", "bg-purple-100", "bg-pink-100"
  ];

  // Function to get a random color class
  const randomColor = classes[Math.floor(Math.random() * classes.length)];

  return (
    <div
      className={`inline-block textwh px-3 py-1 rounded-full text-xs font-semibold text-gray-900 ${randomColor}`}>
      {children}
    </div>
  );
};
