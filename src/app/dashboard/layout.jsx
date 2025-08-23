"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className=" flex flex-col md:flex-row bg-green-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between bg-green-100 dark:bg-gray-800 p-4">
        <h2 className="text-xl font-bold text-green-800 dark:text-green-400">
          Dashboard
        </h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-green-800 dark:text-green-400 focus:outline-none"
        >
          {sidebarOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-20 w-64 bg-green-100 dark:bg-gray-800 p-6
          transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0
          transition-transform duration-300 ease-in-out
        `}
      >
        <h2 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-8 hidden md:block">
          Dashboard
        </h2>
        <nav className="flex flex-col space-y-3">
          <Link
            href="/dashboard/add-product"
            className="text-green-800 dark:text-green-200 font-medium hover:text-green-600 dark:hover:text-green-400"
            onClick={() => setSidebarOpen(false)}
          >
            Add Product
          </Link>
          <Link
            href="/products"
            className="text-green-800 dark:text-green-200 font-medium hover:text-green-600 dark:hover:text-green-400"
            onClick={() => setSidebarOpen(false)}
          >
            View Products
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 ml-0 md:ml-64 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
