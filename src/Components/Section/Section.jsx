"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Section() {
  // Framer Motion variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="hero bg-green-50 min-h-screen flex items-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="hero-content flex-col lg:flex-row items-center justify-center gap-8 px-6">
        {/* Image */}
        <motion.img
          src="https://i.ibb.co/tMmXgLkr/spinach.jpg"
          className="max-w-xl rounded-full shadow-2xl"
          variants={fadeInLeft}
        />

        {/* Text & Button */}
        <motion.div
          className="lg:max-w-lg text-center lg:text-left"
          variants={fadeInRight}
        >
          <motion.h1 className="text-5xl font-bold text-green-800 mb-4">
            Shop For Fresh Vegetables
          </motion.h1>
          <motion.p className="py-4 text-green-700 mb-6">
            Fresh veggies delivered to your doorstep. Enjoy the convenience of
            farm-fresh produce with just a few clicks!
          </motion.p>
          <motion.button
            className="btn bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/products">Shop Now</Link>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
