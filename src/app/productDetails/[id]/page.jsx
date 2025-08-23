import DbConnect, { collectionobj } from "@/lib/DbConnect";
import { ObjectId } from "mongodb";
import React from "react";

export default async function ProductDetails({ params }) {
  const { id } = params; // dynamic route param
  const productCollection = await DbConnect(collectionobj.productCollection);
  const product = await productCollection.findOne({ _id: new ObjectId(id) });

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full max-w-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-green-900 dark:text-green-400 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-2xl font-bold text-green-700 dark:text-green-300">
                {product.price}৳ / {product.unit}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Stock: {product.stock}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-green-100 dark:bg-gray-700 rounded-lg p-3 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Quality
                </p>
                <p className="font-semibold text-green-800 dark:text-green-400">
                  {product.quality}
                </p>
              </div>
              <div className="bg-green-100 dark:bg-gray-700 rounded-lg p-3 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Origin
                </p>
                <p className="font-semibold text-green-800 dark:text-green-400">
                  {product.origin}
                </p>
              </div>
            </div>
          </div>

          <button className="bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-300 self-start">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
