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
      // Convert comma-separated string into array
      setProduct({
        ...product,
        nutrition: value.split(",").map((n) => n.trim()),
      });
    } else if (name === "price" || name === "stock" || name === "amount") {
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
    <div className="max-w-3xl mx-auto bg-green-50 p-8 rounded-xl shadow-md mt-6">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Add New Product
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
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
          type="number"
          name="price"
          placeholder="Price (৳)"
          value={product.price}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={product.amount}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="unit"
          placeholder="Unit (e.g., kg)"
          value={product.unit}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="quality"
          placeholder="Quality"
          value={product.quality}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          value={product.origin}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={product.stock}
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
          className="textarea textarea-bordered w-full md:col-span-2"
          required
        />
        <input
          type="text"
          name="nutrition"
          placeholder="Nutrition (comma separated)"
          value={product.nutrition.join(", ")}
          onChange={handleChange}
          className="input input-bordered w-full md:col-span-2"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md md:col-span-2 mt-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
