"use client";
import React, { useState, useEffect } from "react";

const BusDriver = ({ value }) => {
  const [form, setForm] = useState({
    fullName: value?.fullName || "",
    registerNumber: value?.registerNumber || "",
    address: value?.address || "",
    phone: value?.phone || "",
    email: value?.email || "",
    companyName: value?.companyName || "",
    companyRegNumber: value?.companyRegNumber || "",
  });

  // value өөрчлөгдөх үед form-ийн утгыг шинэчлэх
  useEffect(() => {
    if (value) {
      setForm({
        fullName: value.fullName || "",
        registerNumber: value.registerNumber || "",
        address: value.address || "",
        phone: value.phone || "",
        email: value.email || "",
        companyName: value.companyName || "",
        companyRegNumber: value.companyRegNumber || "",
      });
    }
  }, [value]);

  return (
    <div className="relative p-6 border border-gray-400">
      <h2 className="absolute -top-3 left-2 z-50 bg-white px-4 text-black font-medium uppercase text-lg">
        НҮҮРС ТЭЭВЭРТ ОРОЛЦОХ ТЭЭВРИЙН ХЭРЭГСЛИЙН ЭЗЭМШИГЧИЙН АНКЕТ
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-x-4 py-4 flex flex-wrap">
          <label className="text-[12px]">Овог нэр:</label>
          <input
            name="fullName"
            type="text"
            value={form.fullName}
            readOnly
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Регистрийн дугаар:</label>
          <input
            name="registerNumber"
            type="text"
            value={form.registerNumber}
            readOnly
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Оршин суугаа хаяг:</label>
          <input
            name="address"
            type="text"
            value={form.address}
            readOnly
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Утасны дугаар:</label>
          <input
            name="phone"
            type="text"
            value={form.phone}
            readOnly
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">И-мэйл хаяг:</label>
          <input
            name="email"
            type="email"
            value={form.email}
            readOnly
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="py-4 flex">
          <label className="text-[12px]">
            Аж ахуйн нэгжийн нэр (хувь хүн биш бол):
          </label>
          <input
            name="companyName"
            type="text"
            value={form.companyName}
            readOnly
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Улсын бүртгэлийн дугаар:</label>
          <input
            name="companyRegNumber"
            type="text"
            value={form.companyRegNumber}
            readOnly
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default BusDriver;
