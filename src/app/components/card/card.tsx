"use client";
import { motion } from "framer-motion";

interface CardProps {
  content: {
    description: string;
    image: string;
  };
}

export const Card = ({ content }: CardProps) => {
  return (
    <motion.div className="inline-block">
      <div className="h-auto mb-4 max-w-full bg-white rounded-lg overflow-hidden shadow-sm tracking-tighter">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={content.image} alt={content.description} className="w-full" />
        <div className="p-2">
          <p className="text-black text-sm">{content.description}</p>
        </div>
      </div>
    </motion.div>
  );
};
