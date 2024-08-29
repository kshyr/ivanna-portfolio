"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface CarouselProps {
  logos: string[];
}

export default function VerticalAutoCarousel({ logos }: CarouselProps) {
  logos = [
    "https://placehold.co/64?text=logo1",
    "https://placehold.co/64?text=logo2",
    "https://placehold.co/64?text=logo3",
    "https://placehold.co/64?text=logo4",
    "https://placehold.co/64?text=logo5",
  ];
  return (
    <motion.div className="overflow-hidden min-w-16 w-16 h-64 relative">
      <motion.div
        className="flex flex-col gap-1 absolute"
        animate={{ y: ["0%", "-340px"] }}
        transition={{
          duration: logos.length * 2.5,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center min-w-16w-16 h-16"
          >
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
