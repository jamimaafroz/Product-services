"use client";
import React from "react";
import { motion } from "framer-motion";
import { Truck, Leaf, ShieldCheck, Clock } from "lucide-react";

export default function Highlights() {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Fresh Produce",
      desc: "Directly from local farms to your table, always fresh and healthy.",
    },
    {
      icon: <Truck className="h-8 w-8 text-green-600" />,
      title: "Fast Delivery",
      desc: "Get your veggies and fruits delivered quickly and safely.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
      title: "Quality Guaranteed",
      desc: "We ensure top-notch quality for all our products.",
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "24/7 Support",
      desc: "We are here to assist you anytime with your orders.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-green-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose DailyVegs?
        </motion.h2>
        <motion.p
          className="text-green-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience farm-fresh vegetables and fruits delivered directly to your
          doorstep with convenience, speed, and quality.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-green-800 mt-4 mb-2">
              {feature.title}
            </h3>
            <p className="text-green-700">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
