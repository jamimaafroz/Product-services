"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, User } from "lucide-react";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const navItem = (href, label) => (
    <li key={href}>
      <Link
        href={href}
        className={`${
          pathname === href
            ? "text-green-800 font-semibold"
            : "hover:text-green-600"
        } transition-colors`}
      >
        {label}
      </Link>
    </li>
  );

  const linksArray = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/sales", label: "Sales" },
    { href: "/contact", label: "Contact" },
    { href: "/dashboard", label: "Dashboard" },
  ];
  // Add Dashboard link only if user is logged in
  if (session?.user) {
    linksArray.push({ href: "/dashboard", label: "Dashboard" });
  }

  return (
    <div className="navbar bg-green-50 shadow-md sticky top-0 z-50">
      {/* Left Section */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-green-800 hover:bg-green-100"
          >
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
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow-lg bg-green-100 rounded-box w-52"
          >
            {linksArray.map((link) => navItem(link.href, link.label))}
          </ul>
        </div>
        <Link href="/" className="text-2xl font-bold text-green-800">
          Daily<span className="text-green-600">Vegs</span>
        </Link>
      </div>

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 text-green-800">
          {linksArray.map((link) => navItem(link.href, link.label))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end space-x-2">
        <button className="btn btn-ghost btn-circle text-green-800 hover:bg-green-100">
          <ShoppingCart className="h-5 w-5" />
        </button>
        <Link
          href="/login"
          className="btn btn-ghost btn-circle text-green-800 hover:bg-green-100"
        >
          <User className="h-5 w-5" />
        </Link>
        <Link
          href="/signup"
          className="btn bg-green-600 hover:bg-green-700 text-white rounded-full px-6 shadow-md transition-all duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
