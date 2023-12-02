"use client";
import React, { useState } from "react";

const Categories: React.FC = () => {
  const categories = [
    "All Resources",
    "Category1",
    "Category2",
    "Category3",
    "Category4",
    "Category5",
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categories[0]
  );

  const handleButtonClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div className="flex pt-10 justify-center w-full gap-6 font-rubik">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-5 py-2 rounded-lg border border-neutral-200 ${
            selectedCategory === category
              ? "bg-darkGreen text-white"
              : "bg-white"
          } hover:scale-105 transform transition-all`}
          onClick={() => handleButtonClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
