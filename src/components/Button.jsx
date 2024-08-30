import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
