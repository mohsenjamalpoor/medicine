import React from "react";
import { Link } from "react-router-dom";
import {
  FaStethoscope,
  FaLungs,
  FaHeart,
  FaBookMedical,
} from "react-icons/fa";

export default function HomePage() {
 
 

  const navItems = [
    { to: "/instructions", icon: <FaBookMedical size={24} />, label: "دستورها" },
    { to: "/ventilator", icon: <FaLungs size={24} />, label: "ونتیلاتور" },
    { to: "/diseases", icon: <FaStethoscope size={24} />, label: "بیماری‌ها" },
    { to: "/heart", icon: <FaHeart size={24} />, label: "قلب" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-cyan-400 p-4 rounded-xl shadow-md mb-8">
        <h1 className="text-2xl font-extrabold text-white">
          راهنمای جامع پزشکی
        </h1>
      
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="flex flex-col items-center justify-center border rounded-xl shadow-md p-6 bg-white hover:bg-blue-100 transition cursor-pointer text-center"
          >
            <div className="text-blue-500 mb-2">{item.icon}</div>
            <div className="font-bold text-[#366EBD]">{item.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
