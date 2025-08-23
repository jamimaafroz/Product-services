"use client";

import React, { useState } from "react";

export default function AddProductPage() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    img: "",
    amount: 1,
    unit: "kg",
    quality: "Farm Fresh",
    origin: "",
    stock: 0,
    description: "",
    nutrition: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nutrition") {
      setProduct({
        ...product,
        nutrition: value.split(",").map((n) => n.trim()),
      });
    } else if (["price", "stock", "amount"].includes(name)) {
      setProduct({ ...product, [name]: Number(value) });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const data = await res.json();

      if (res.ok) {
        alert("Product added successfully! ✅");
        setProduct({
          name: "",
          price: "",
          img: "",
          amount: 1,
          unit: "kg",
          quality: "Farm Fresh",
          origin: "",
          stock: 0,
          description: "",
          nutrition: [],
        });
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div
      className="max-w-3xl mx-auto p-6 md:p-8 rounded-xl shadow-md mt-6
                    bg-green-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-green-800 dark:text-green-400">
        Add New Product
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {[
          {
            name: "name",
            type: "text",
            placeholder: "Product Name",
            required: true,
          },
          {
            name: "price",
            type: "number",
            placeholder: "Price (৳)",
            required: true,
          },
          {
            name: "amount",
            type: "number",
            placeholder: "Amount",
            required: true,
          },
          {
            name: "unit",
            type: "text",
            placeholder: "Unit (e.g., kg)",
            required: true,
          },
          {
            name: "quality",
            type: "text",
            placeholder: "Quality",
            required: false,
          },
          {
            name: "origin",
            type: "text",
            placeholder: "Origin",
            required: false,
          },
          {
            name: "stock",
            type: "number",
            placeholder: "Stock",
            required: true,
          },
          {
            name: "img",
            type: "text",
            placeholder: "Image URL",
            required: true,
          },
        ].map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={product[field.name]}
            onChange={handleChange}
            required={field.required}
            className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
          />
        ))}

        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          required
          className="textarea textarea-bordered w-full md:col-span-2 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
        />
        <input
          type="text"
          name="nutrition"
          placeholder="Nutrition (comma separated)"
          value={product.nutrition.join(", ")}
          onChange={handleChange}
          className="input input-bordered w-full md:col-span-2 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md md:col-span-2 mt-2
                     dark:bg-green-500 dark:hover:bg-green-600 transition-colors duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
