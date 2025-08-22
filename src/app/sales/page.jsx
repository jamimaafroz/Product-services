"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Fake top sales data
const topSales = [
  {
    id: 1,
    name: "Organic Spinach",
    sold: 250,
    price: "120৳",
    img: "https://i.ibb.co/tMmXgLkr/spinach.jpg",
  },
  {
    id: 2,
    name: "Fresh Carrots",
    sold: 210,
    price: "90৳",
    img: "https://i.ibb.co/TqvCjtJt/carrots.jpg",
  },
  {
    id: 3,
    name: "Tomatoes",
    sold: 180,
    price: "70৳",
    img: "https://i.ibb.co/1JG81VSX/tomato.jpg",
  },
  {
    id: 4,
    name: "Cucumbers",
    sold: 150,
    price: "150৳",
    img: "https://i.ibb.co/LDx25H1c/cucumber.jpg",
  },
];

export default function TopSalesPage() {
  return (
    <motion.div
      className="min-h-screen bg-green-50 py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Top Selling Products
        </h1>
        <p className="text-green-700 max-w-xl mx-auto">
          Check out our hottest products loved by our customers!
        </p>
      </div>

      {/* Top Sales Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {topSales.map((product, idx) => (
          <motion.div
            key={product.id}
            className={`bg-white rounded-xl shadow-lg overflow-hidden border-l-8 ${
              idx === 0
                ? "border-yellow-400"
                : idx === 1
                ? "border-gray-400"
                : idx === 2
                ? "border-orange-400"
                : "border-green-400"
            } hover:scale-105 transition-transform duration-300`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="relative">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                #{idx + 1}
              </span>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                {product.name}
              </h3>
              <p className="text-green-700 font-semibold mb-1">
                Sold: {product.sold}
              </p>
              <p className="text-green-700 font-semibold mb-4">
                {product.price}
              </p>
              <Link
                href="/products"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300"
              >
                Buy Now
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
