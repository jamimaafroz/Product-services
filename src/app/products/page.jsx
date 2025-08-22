import DbConnect, { collectionobj } from "@/lib/DbConnect";
import { TbListDetails } from "react-icons/tb";
import Link from "next/link";
import React from "react";

export default async function ProductsPage() {
  const collection = await DbConnect(collectionobj.productCollection);
  const productData = await collection.find({}).toArray();

  return (
    <div>
      <div>
        <p className="font-bold text-2xl text-black p-10">Available Products</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        {productData.map((item) => (
          <div
            key={item._id.toString()} // Use _id from MongoDB
            className="border rounded-lg p-4 shadow-md bg-white"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-green-600 font-semibold mt-1">
              {item.price}৳ / {item.unit}
            </p>
            <p className="text-xs text-gray-500">Quality: {item.quality}</p>
            <p className="text-xs text-gray-500">Origin: {item.origin}</p>
            <p className="text-xs text-gray-500">Stock: {item.stock}</p>
            <Link
              href={`/productDetails/${item._id.toString()}`}
              className="text-blue-500 mt-2 inline-flex items-center"
            >
              <TbListDetails />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
