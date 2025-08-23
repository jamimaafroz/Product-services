"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/sales", label: "Sales" },
    { href: "/contact", label: "Contact" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <footer className="bg-green-50 text-gray-800 p-12">
      <div className="max-w-7xl mx-auto px-6 py-12 md:flex md:justify-between md:items-start space-y-8 md:space-y-0">
        {/* Logo & Description */}
        <div className="md:w-1/3">
          <Link href="/" className="text-2xl font-bold text-green-800">
            Daily<span className="text-green-600">Vegs</span>
          </Link>
          <p className="mt-4 text-gray-700">
            Fresh vegetables and fruits delivered directly from the farm to your
            table. Eat healthy, live fresh!
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-green-600">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-green-600">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-green-600">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-green-600">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-green-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-700 mb-4">
            Get fresh updates and exclusive offers every week!
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 flex-1"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-200 mt-8 py-4 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} DailyVegs. All rights reserved.
      </div>
    </footer>
  );
}
