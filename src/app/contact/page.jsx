"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div
      className="min-h-screen bg-green-50 py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Get in Touch</h1>
        <p className="text-green-700">
          Have questions or suggestions? We’d love to hear from you!
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col space-y-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Contact Info
          </h2>
          <p className="text-green-700">
            <strong>Email:</strong> support@dailyvegs.com
          </p>
          <p className="text-green-700">
            <strong>Phone:</strong> +880 1991 689987
          </p>
          <p className="text-green-700">
            <strong>Address:</strong> Bashabo, Dhaka, Bangladesh
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col space-y-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Send a Message
          </h2>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-6 py-3 shadow-md transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
}
