"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Banner() {
  const slides = [
    "https://i.ibb.co/fYkxY184/banner3.jpg",
    "https://i.ibb.co/9HN0nhXW/banner1-1.jpg",
    "https://i.ibb.co/rfX20szs/banner2.jpg",
    "https://i.ibb.co/cK6FhWNc/banner4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const sliderTimer = useRef();

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    sliderTimer.current = setInterval(nextSlide, 3500);
    return () => clearInterval(sliderTimer.current);
  }, []);

  return (
    <div className="relative max-w-full mx-auto h-[600px] overflow-hidden rounded-lg">
      {/* Blurred Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {slides.map(
            (img, idx) =>
              idx === current && (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-cover  brightness-75"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              )
          )}
        </AnimatePresence>
      </div>

      {/* Foreground Card */}
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-1/2">
        <motion.div
          className="rounded-2xl  p-10 md:p-12 shadow-2xl text-center text-gray-900 backdrop-blur-md"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 tracking-wide">
            Fresh Organic Vegetables
          </h2>
          <p className="text-md md:text-lg mb-6 text-gray-700">
            Directly from farm to your table 🌱
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Shop Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}
