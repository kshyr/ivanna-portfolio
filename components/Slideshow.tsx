"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const placeholders = [
  "https://placehold.co/1920x1080?text=slide1",
  "https://placehold.co/1920x1080?text=slide2",
  "https://placehold.co/1920x1080?text=slide3",
];

export default function Slideshow({ images }: { images: string[] }) {
  images = placeholders;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        <motion.img
          key={images[currentImageIndex]}
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
          className="absolute z-20 top-0 left-0 right-0 bottom-0 w-full h-full "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Crossfade duration
        />
      </AnimatePresence>
    </div>
  );
}
