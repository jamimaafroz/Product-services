"use client";
import React from "react";
import { registerUser } from "../actions/auth/registerUser";

export default function SignUpPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form[0].value;
    const email = form[1].value;
    const password = form[2].value;
    const confirmPassword = form[3].value;
    registerUser({ name, email, password, confirmPassword });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-green-700 dark:text-green-400">
          Create Your Account
        </h2>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
          Join us and explore fresh organic veggies 🌿
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Extra links */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-green-600 hover:text-green-700 dark:text-green-400"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
