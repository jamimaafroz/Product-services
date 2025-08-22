"use client";

import React, { useState } from "react";

export default function AddProductPage() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    img: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product submitted:", product);
    // Here you can call your API to save product in DB
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-green-800 mb-6">
        Add New Product
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price (৳)"
          value={product.price}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={product.img}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
