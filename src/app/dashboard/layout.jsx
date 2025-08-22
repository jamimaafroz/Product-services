"use client";

import React from "react";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-green-50">
      {/* Sidebar */}
      <aside className="w-64 bg-green-100 p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-green-800 mb-8">Dashboard</h2>
        <nav className="flex flex-col space-y-3">
          <Link
            href="/dashboard/add-product"
            className="text-green-800 font-medium hover:text-green-600"
          >
            Add Product
          </Link>
          <Link
            href="/dashboard/products"
            className="text-green-800 font-medium hover:text-green-600"
          >
            View Products
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
