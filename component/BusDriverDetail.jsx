"use client";
import React, { useState, useEffect } from "react";

const BusDriverDetails = ({ onChange }) => {
  const [form, setForm] = useState({
    ownerName: "",
    registerNumber: "",
    address: "",
    phone: "",
    email: "",

    carBrandModel: "",
    manufactureYear: "",
    plateNumber: "",
    vin: "",
    engineNumber: "",
    color: "",
    capacityTons: "",
    mileageKm: "",
    insurance: "",
    inspectionDate: "",

    ownershipDate: "",
    hasPreviousOwner: false,
    ownershipDocNumber: "",

    purpose: {
      sell: false,
      rent: false,
      incomeUse: false,
      other: false,
      otherText: "",
    },

    damageInfo: "",
    repairHistory: "",
    additionalEquipments: "",
    notes: "",

    date: "",
    signature: "",
    certifiedBy: "",
  });

  useEffect(() => {
    if (onChange) onChange(form);
  }, [form]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Purpose (checkbox group)
    if (name.startsWith("purpose.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        purpose: {
          ...prev.purpose,
          [key]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="p-6 border relative border-gray-400 space-y-6 text-sm">
      <h2 className="absolute -top-3 left-2 z-50 bg-white px-4 text-black font-medium uppercase text-lg">
        ТЭЭВРИЙН ХЭРЭГСЛИЙН ЭЗЭМШИГЧИЙН АНКЕТ
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Овог нэр:</label>
          <input
            name="ownerName"
            type="text"
            value={form.ownerName}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Регистрийн дугаар:</label>
          <input
            name="registerNumber"
            type="text"
            value={form.registerNumber}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Оршин суугаа хаяг:</label>
          <input
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Утасны дугаар:</label>
          <input
            name="phone"
            type="text"
            value={form.phone}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">И-мэйл хаяг:</label>
          <input
            name="email"
            type="text"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
      </div>

      <h3 className="font-semibold mt-4">2. Тээврийн хэрэгслийн мэдээлэл</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Машины марк, загвар:</label>
          <input
            name="carBrandModel"
            type="text"
            value={form.carBrandModel}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Үйлдвэрлэсэн он:</label>
          <input
            name="manufactureYear"
            type="text"
            value={form.manufactureYear}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Улсын дугаар:</label>
          <input
            name="plateNumber"
            type="text"
            value={form.plateNumber}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Арлын дугаар (VIN):</label>
          <input
            name="vin"
            type="text"
            value={form.vin}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Хөдөлгүүрийн дугаар:</label>
          <input
            name="engineNumber"
            type="text"
            value={form.engineNumber}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Будагны өнгө:</label>
          <input
            name="color"
            type="text"
            value={form.color}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Даац (тонн):</label>
          <input
            name="capacityTons"
            type="text"
            value={form.capacityTons}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Одоогийн км гүйлт:</label>
          <input
            name="mileageKm"
            type="text"
            value={form.mileageKm}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Даатгалын мэдээлэл:</label>
          <input
            name="insurance"
            type="text"
            value={form.insurance}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">
            Техникийн хяналтын үзлэгийн хугацаа:
          </label>
          <input
            name="inspectionDate"
            type="text"
            value={form.inspectionDate}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
      </div>

      <h3 className="font-semibold mt-4">3. Өмчлөлийн мэдээлэл</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Өмчлөгч болсон огноо:</label>
          <input
            name="ownershipDate"
            type="text"
            value={form.ownershipDate}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <label className="flex items-center space-x-2 py-4">
          <input
            type="checkbox"
            name="hasPreviousOwner"
            checked={form.hasPreviousOwner}
            onChange={handleChange}
          />
          <span className="text-[12px]">Өмнөх эзэмшигч байсан эсэх</span>
        </label>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">
            Өмчлөл баталгаажсан баримт бичгийн дугаар:
          </label>
          <input
            name="ownershipDocNumber"
            type="text"
            value={form.ownershipDocNumber}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
      </div>

      <h3 className="font-semibold mt-4">4. Машиныг ашиглах зорилго</h3>
      <div className="flex flex-col space-y-2 ml-4">
        <label className="py-2 flex items-center">
          <input
            type="checkbox"
            name="purpose.sell"
            checked={form.purpose.sell}
            onChange={handleChange}
          />{" "}
          <span className="text-[12px] ml-2">Худалдах</span>
        </label>
        <label className="py-2 flex items-center">
          <input
            type="checkbox"
            name="purpose.rent"
            checked={form.purpose.rent}
            onChange={handleChange}
          />{" "}
          <span className="text-[12px] ml-2">Түрээслүүлэх</span>
        </label>
        <label className="py-2 flex items-center">
          <input
            type="checkbox"
            name="purpose.incomeUse"
            checked={form.purpose.incomeUse}
            onChange={handleChange}
          />{" "}
          <span className="text-[12px] ml-2">Бусдад ашиглуулж орлого олох</span>
        </label>
        <label className="py-2 flex items-center space-x-2">
          <input
            type="checkbox"
            name="purpose.other"
            checked={form.purpose.other}
            onChange={handleChange}
          />
          <span className="text-[12px]">Бусад:</span>
          <input
            type="text"
            name="purpose.otherText"
            value={form.purpose.otherText}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </label>
      </div>

      <h3 className="font-semibold mt-4">5. Нэмэлт мэдээлэл</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">
            Машины эвдрэл, гэмтэл байгаа эсэх:
          </label>
          <input
            name="damageInfo"
            type="text"
            value={form.damageInfo}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Засварын түүх:</label>
          <input
            name="repairHistory"
            type="text"
            value={form.repairHistory}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">
            Хүлээлгэх нэмэлт тоног төхөөрөмж:
          </label>
          <input
            name="additionalEquipments"
            type="text"
            value={form.additionalEquipments}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Бусад тэмдэглэл:</label>
          <input
            name="notes"
            type="text"
            value={form.notes}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
      </div>

      <h3 className="font-semibold mt-4">Баталгаажуулалт</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Огноо:</label>
          <input
            name="date"
            type="text"
            value={form.date}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">Гарын үсэг:</label>
          <input
            name="signature"
            type="text"
            value={form.signature}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
        <div className="space-x-4 py-4 flex">
          <label className="text-[12px]">
            Баталгаажуулсан (хувь хүн эсвэл ААН):
          </label>
          <input
            name="certifiedBy"
            type="text"
            value={form.certifiedBy}
            onChange={handleChange}
            className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 w-64 max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default BusDriverDetails;
