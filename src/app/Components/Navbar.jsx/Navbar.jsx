"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const navItem = (href, label) => (
    <li>
      <Link
        href={href}
        className={`${
          pathname === href
            ? "text-primary font-semibold"
            : "hover:text-primary"
        }`}
      >
        {label}
      </Link>
    </li>
  );

  const links = (
    <>
      {navItem("/", "Home")}
      {navItem("/products", "Products")}
      {navItem("/sales", "Sales")}
      {navItem("/contact", "Contact")}
      {navItem("/dashboard", "dashboard")}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      {/* Left Section */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link href="/" className="text-2xl font-bold text-primary">
          Daily<span className="text-secondary">Vegs</span>
        </Link>
      </div>

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">{links}</ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end space-x-2">
        <button className="btn btn-ghost btn-circle">
          <ShoppingCart className="h-5 w-5" />
        </button>
        <Link href="/login" className="btn btn-ghost btn-circle">
          <User className="h-5 w-5" />
        </Link>
        <Link href="/signup" className="btn btn-primary rounded-full px-6">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
