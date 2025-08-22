"use client";
import React from "react";
import { motion } from "framer-motion";
import BrandsIcon from "../images/brand.svg";
import DistributorIcon from "../images/distributor.svg";
import OnlineIcon from "../images/online.svg";
import RestaurantIcon from "../images/restaurant.svg";
import WholesalerIcon from "../images/wholesaler.svg";
import RetailIcon from "../images/retail.svg";


interface Item {
  title: string;
  text: string;
  icon: string; 
}

// ----- Meteors Component -----
const Meteors = ({ number = 15 }: { number?: number }) => {
  const meteors = new Array(number).fill(true);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((_, idx) => {
        const delay = Math.random() * 5;
        const left = Math.random() * 100;
        const duration = 3 + Math.random() * 2;

        return (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: -20, x: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: ["0%", "100%"],
              x: ["0%", "20%"],
            }}
            transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
            style={{ left: `${left}%` }}
            className="absolute top-0 w-[2px] h-[80px] bg-gradient-to-b from-white/80 to-transparent rounded-full"
          />
        );
      })}
    </div>
  );
};

// ----- Product Flow Section -----
export default function ProductFlow() {
  const items: Item[] = [
    {
      title: "Brands",
      text: "Own brands and certified products",
      icon: BrandsIcon,
    },
    {
      title: "Online",
      text: "Products available online",
      icon: OnlineIcon,
    },
    {
      title: "Retail Shops",
      text: "Easy brand identification",
      icon: RetailIcon,
    },
    {
      title: "Restaurant",
      text: "Ayini certification board for advertisement",
      icon: RestaurantIcon,
    },
    {
      title: "Wholesalers & Supermarkets",
      text: "Prime customers are local restaurants and hotels",
      icon: WholesalerIcon,
    },
    {
      title: "Distributors",
      text: "Reseller configuration",
      icon: DistributorIcon,
    },
  ];

  return (
    <section className="relative w-full py-20 bg-black">
      <h2 className="text-4xl font-bold text-center mb-12">Product Flow</h2>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative bg-black/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 p-6 text-center overflow-hidden"
          >
            {/* Meteor Effect */}
            <Meteors number={8} />

            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 mx-auto mb-4 relative z-10"
            />
            <h3 className="text-2xl font-semibold mb-3 relative z-10">
              {item.title}
            </h3>
            <p className="text-gray-200 relative z-10">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
