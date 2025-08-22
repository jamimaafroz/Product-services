import DbConnect, { collectionobj } from "@/lib/DbConnect";
import { ObjectId } from "mongodb";
import React from "react";

export default async function ProductDetails({ params }) {
  const { id } = params; // dynamic route param
  const productCollection = await DbConnect(collectionobj.productCollection);
  const product = await productCollection.findOne({ _id: new ObjectId(id) });

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="min-h-screen flex flex-col md:flex-row items-start md:items-center p-6 gap-6 bg-gray-50 dark:bg-gray-900">
        {/* Product Image */}
        <div className="md:w-1/2 lg:w-1/3 flex justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full max-w-[350px] h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 lg:w-2/3 text-gray-800 dark:text-gray-200">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {product.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            {product.description}
          </p>
          <p className="text-green-600 font-semibold text-xl mb-2">
            {product.price}৳ / {product.unit}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            Quality: {product.quality}
          </p>
          <p className="text-sm text-gray-500 mb-1">Origin: {product.origin}</p>
          <p className="text-sm text-gray-500 mb-4">Stock: {product.stock}</p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
