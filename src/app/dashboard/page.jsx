"use client";

import React from "react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-green-800 mb-4">
        Welcome to Dashboard
      </h1>
      <p className="text-green-700 mb-6">
        Manage your products and sales easily
      </p>
      <Link
        href="/dashboard/add-product"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md"
      >
        Add New Product
      </Link>
    </div>
  );
}
