"use client";
import React, { useState, useEffect } from "react";

const BusDriver = ({ onChange }) => {
  const [form, setForm] = useState({
    fullName: "",
    registerNumber: "",
    address: "",
    phone: "",
    email: "",
    companyName: "",
    companyRegNumber: "",
  });

  useEffect(() => {
    if (onChange) {
      onChange(form); // өгөгдлийг эцэг компонент руу илгээх
    }
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative p-4 sm:p-6 border border-gray-400">
      <h2 className="absolute -top-3 left-2 z-50 bg-white px-2 sm:px-4 text-black font-medium uppercase text-sm sm:text-lg">
        НҮҮРС ТЭЭВЭРТ ОРОЛЦОХ ТЭЭВРИЙН ХЭРЭГСЛИЙН ЭЗЭМШИГЧИЙН АНКЕТ
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
        <div className="py-2 sm:py-4 flex flex-col sm:flex-row sm:space-x-4">
          <label className="text-[12px] mb-1 sm:mb-0">Овог нэр:</label>
          <input
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-full sm:w-64 max-w-md"
          />
        </div>
        <div className="py-2 sm:py-4 flex flex-col sm:flex-row sm:space-x-4">
          <label className="text-[12px] mb-1 sm:mb-0">Регистрийн дугаар:</label>
          <input
            name="registerNumber"
            type="text"
            value={form.registerNumber}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-full sm:w-64 max-w-md"
          />
        </div>
        <div className="py-2 sm:py-4 flex flex-col sm:flex-row sm:space-x-4">
          <label className="text-[12px] mb-1 sm:mb-0">Оршин суугаа хаяг:</label>
          <input
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-full sm:w-64 max-w-md"
          />
        </div>
        <div className="py-2 sm:py-4 flex flex-col sm:flex-row sm:space-x-4">
          <label className="text-[12px] mb-1 sm:mb-0">Утасны дугаар:</label>
          <input
            name="phone"
            type="text"
            value={form.phone}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-full sm:w-64 max-w-md"
          />
        </div>
        <div className="py-2 sm:py-4 flex flex-col sm:flex-row sm:space-x-4">
          <label className="text-[12px] mb-1 sm:mb-0">И-мэйл хаяг:</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-full sm:w-64 max-w-md"
          />
        </div>
        <div className="py-2 sm:py-4 flex flex-col sm:flex-row">
          <label className="text-[12px] mb-1 sm:mb-0">
            Аж ахуйн нэгжийн нэр (хувь хүн биш бол):
          </label>
          <input
            name="companyName"
            type="text"
            value={form.companyName}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-full sm:w-64 max-w-md"
          />
        </div>
        <div className="py-2 sm:py-4 flex flex-col sm:flex-row sm:space-x-4">
          <label className="text-[12px] mb-1 sm:mb-0">
            Улсын бүртгэлийн дугаар:
          </label>
          <input
            name="companyRegNumber"
            type="text"
            value={form.companyRegNumber}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-full sm:w-64 max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default BusDriver;
