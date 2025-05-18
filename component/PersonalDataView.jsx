"use client";
import React, { useEffect, useState } from "react";

const PersonalDataView = ({
  onChange,
  defaultValue = [],
  readOnly = false,
}) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "1-р сар",
    "2-р сар",
    "3-р сар",
    "4-р сар",
    "5-р сар",
    "6-р сар",
    "7-р сар",
    "8-р сар",
    "9-р сар",
    "10-р сар",
    "11-р сар",
    "12-р сар",
  ];
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  const [formData, setFormData] = useState({
    jobName: "",
    lastName: "",
    fatherName: "",
    myName: "",
    gender: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    birthPlace: "",
    married: "",
    email: "",
    facebook: "",
    currentAddress: "",
    tempAddress: "",
    phoneHome: "",
    phoneMobile: "",
    phoneWork: "",
    emergencyContact1: "",
    emergencyContact2: "",
    emergencyContact3: "",
    relatedWork: "",
    relatedName: "",
    criminalRecord: "",
    criminalDetails: "",
  });

  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(formData);
    }
  }, [formData, onChange]);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const renderInput = (value, onChange) => {
    return (
      <input
        type="text"
        value={value || ""}
        onChange={onChange}
        disabled={readOnly}
        className="border border-gray-400 focus:outline-none text-[10px] md:text-[12px] p-1 w-48 max-md:h-[15px] px-2 input-focus-red md:w-96 text-[#0000ff]"
      />
    );
  };

  useEffect(() => {
    if (defaultValue) {
      setFormData(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className="relative border px-2 border-gray-400 md:p-6 mx-auto">
      <h2 className="absolute -top-3 left-2 z-50 bg-white px-4 text-black font-medium uppercase text-lg">
        ИРГЭНИЙ ХУВИЙН МЭДЭЭЛЭЛ
      </h2>

      <div className="flex items-center gap-2 max-md:gap-10 pt-6 py-4 md:pt-0 max-md:h-[5px]">
        <label className="md:text-[12px] text-[10px]" htmlFor="jobName">
          Сонирхож буй ажлын нэр:
        </label>
        <input
          type="text"
          name="jobName"
          id="jobName"
          value={formData.jobName}
          onChange={(e) => updateField("jobName", e.target.value)}
          disabled={readOnly}
          className="border border-gray-400 focus:outline-none text-[#0000ff] max-md:h-[15px] px-2 input-focus-red w-48 md:w-80"
        />
      </div>

      <div className="md:py-2 flex md:flex-wrap md:gap-30 gap-20">
        <div className="flex items-center md:gap-23 gap-4">
          <label className="md:text-[12px] text-[10px]" htmlFor="lastName">
            Ургийн овог:
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            disabled={readOnly}
            className="border border-gray-400 focus:outline-none px-2 input-focus-red max-md:h-[15px] w-20 md:w-41 text-[#0000ff]"
          />
        </div>
        <div className="flex items-center md:gap-23 gap-6">
          <label className="md:text-[12px] text-[10px]" htmlFor="fatherName">
            Эцгийн нэр:
          </label>
          <input
            type="text"
            name="fatherName"
            id="fatherName"
            value={formData.fatherName}
            onChange={(e) => updateField("fatherName", e.target.value)}
            disabled={readOnly}
            className="border border-gray-400 focus:outline-none px-2 input-focus-red max-md:h-[15px] w-20 md:w-41 text-[#0000ff]"
          />
        </div>
      </div>

      <div className="py-2 flex md:flex-wrap md:gap-14 gap-6 items-center">
        <div className="flex items-center gap-4  md:gap-23">
          <label className="md:text-[12px] text-[10px]" htmlFor="myName">
            Өөрийн нэр:
          </label>
          <input
            type="text"
            name="myName"
            id="myName"
            value={formData.myName}
            onChange={(e) => updateField("myName", e.target.value)}
            disabled={readOnly}
            className="border border-gray-400 focus:outline-none px-2 max-md:h-[15px] input-focus-red w-20 md:w-41  text-[#0000ff]"
          />
        </div>

        <div className="flex items-center md:gap-30 ml-14 md:ml-17">
          <label className="text-[10px] md:text-[12px] font-medium mr-2">
            Хүйс:
          </label>
          <div className="flex md:gap-10 gap-2">
            <label className="flex items-center space-x-1 text-[10px] md:text-[12px] cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={(e) => updateField("gender", e.target.value)}
                disabled={readOnly}
              />
              <span>Эрэгтэй</span>
            </label>

            <label className="flex items-center space-x-1 text-[10px] md:text-[12px] cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={(e) => updateField("gender", e.target.value)}
                disabled={readOnly}
              />
              <span>Эмэгтэй</span>
            </label>
          </div>
        </div>
      </div>

      <div className="py-2 flex md:flex-wrap gap-7 md:gap-21 items-center">
        <div className="flex items-center md:gap-27">
          <label className="text-[10px] md:text-[12px] whitespace-nowrap mr-2">
            Төрсөн:
          </label>
          <div className="flex items-center md:gap-4 gap-1">
            <select
              name="birthYear"
              value={formData.birthYear}
              onChange={(e) => updateField("birthYear", e.target.value)}
              disabled={readOnly}
              className="border border-gray-400 max-md:h-[15px] text-[10px] md:text-[12px] text-[#0000ff]"
            >
              <option value="">Он</option>
              {years.map((year) => (
                <option
                  key={year}
                  value={year}
                  className="text-[#0000ff] max-md:h-[15px] text-[10px] md:text-[12px]"
                >
                  {year}
                </option>
              ))}
            </select>

            <select
              name="birthMonth"
              value={formData.birthMonth}
              onChange={(e) => updateField("birthMonth", e.target.value)}
              disabled={readOnly}
              className="border border-gray-400  text-[#0000ff] max-md:h-[15px] text-[10px] md:text-[12px]"
            >
              <option value="">Сар</option>
              {months.map((month, index) => (
                <option
                  key={index}
                  value={index + 1}
                  className="text-[#0000ff] max-md:h-[15px] text-[10px] md:text-[12px]"
                >
                  {month}
                </option>
              ))}
            </select>

            <select
              name="birthDay"
              value={formData.birthDay}
              onChange={(e) => updateField("birthDay", e.target.value)}
              disabled={readOnly}
              className="border border-gray-400  text-[#0000ff] max-md:h-[15px] text-[10px] md:text-[12px]"
            >
              <option value="">Өдөр</option>
              {days.map((day) => (
                <option
                  key={day}
                  value={day}
                  className="text-[#0000ff] max-md:h-[15px] text-[10px] md:text-[12px]"
                >
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center md:gap-21 gap-4">
          <label className="text-[10px] md:text-[12px] " htmlFor="birthPlace">
            Төрсөн газар:
          </label>
          <input
            type="text"
            name="birthPlace"
            id="birthPlace"
            value={formData.birthPlace}
            onChange={(e) => updateField("birthPlace", e.target.value)}
            disabled={readOnly}
            className="border border-gray-400 focus:outline-none text-[10px] md:text-[12px] px-2 w-20 md:w-41 max-md:h-[15px] input-focus-red "
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-10 py-4">
        <label className="text-[10px] md:text-[12px] flex items-center font-medium mb-2">
          Гэрлэлтийн байдал:
        </label>
        <div className="flex items-center gap-2 md:gap-10 text-[10px] md:text-[12px]">
          {[
            { value: "engaged", label: "Гэрлэсэн" },
            { value: "single", label: "Ганц бие" },
            { value: "singleman", label: "Бэлэвсэн" },
            { value: "breakup", label: "Салсан" },
          ].map(({ value, label }) => (
            <label
              key={value}
              className="flex items-center gap-2 text-[10px] cursor-pointer md:text-[12px]"
            >
              <input
                type="radio"
                name="married"
                value={value}
                checked={formData.married === value}
                onChange={(e) => updateField("married", e.target.value)}
                disabled={readOnly}
                className="text-[10px] md:text-[12px]"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="md:py-2 flex flex-wrap gap-6 md:gap-16">
        <div className="flex items-center gap-2 md:gap-22">
          <label className="text-[10px] md:text-[12px]" htmlFor="email">
            И-мэйл хаяг:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            disabled={readOnly}
            className="border border-gray-400 focus:outline-none px-2 w-26 max-md:h-[15px] p-1 text-[10px] md:text-[12px] md:w-60 input-focus-red text-[#0000ff]"
          />
        </div>
        <div className="flex items-center md:gap-22 gap-2">
          <label className="md:text-[12px] text-[10px] " htmlFor="facebook">
            Фэйсбүүк хаяг:
          </label>
          <input
            type="text"
            name="facebook"
            id="facebook"
            value={formData.facebook}
            onChange={(e) => updateField("facebook", e.target.value)}
            disabled={readOnly}
            className="border border-gray-400 focus:outline-none px-2 max-md:h-[15px] w-26 md:w-60 p-1 text-[10px] md:text-[12px] input-focus-red text-[#0000ff]"
          />
        </div>
      </div>

      <div className="py-4 md:py-6 flex-wrap space-y-2 md:space-y-4">
        <div className="flex items-center gap-4 md:gap-10 ">
          <label
            className="md:text-[12px] text-[10px]"
            htmlFor="currentAddress"
          >
            Одоогийн оршин суугаа хаяг /Байнгын/:
          </label>
          <input
            name="currentAddress"
            id="currentAddress"
            value={formData.currentAddress}
            onChange={(e) => updateField("currentAddress", e.target.value)}
            disabled={readOnly}
            rows={3}
            className="border border-gray-400 focus:outline-none max-md:h-[15px] text-[10px] md:text-[12px] p-1 px-2 input-focus-red w-40 md:w-96 text-[#0000ff]"
          />
        </div>
        <div className="flex items-center gap-4 md:gap-10 ">
          <label className="md:text-[12px] text-[10px]" htmlFor="tempAddress">
            Оршин суугаа хаяг /Түр, түрээс, танил/:
          </label>
          <input
            name="tempAddress"
            id="tempAddress"
            value={formData.tempAddress}
            onChange={(e) => updateField("tempAddress", e.target.value)}
            disabled={readOnly}
            rows={3}
            className="border border-gray-400 max-md:h-[15px] text-[10px] md:text-[12px] p-1 px-2 input-focus-red w-40 md:w-96 text-[#0000ff]"
          />
        </div>
      </div>

      <div className="md:py-2 flex md:flex-wrap md:gap-10 gap-2">
        <div className="flex items-center gap-2">
          <label className="md:text-[12px] text-[10px]" htmlFor="phoneHome">
            Утас /Гэрийн/:
          </label>
          <input
            type="text"
            name="phoneHome"
            id="phoneHome"
            value={formData.phoneHome}
            onChange={(e) => updateField("phoneHome", e.target.value)}
            disabled={readOnly}
            className="border border-gray-400 max-md:h-[15px] md:text-[12px] max-md:w-20 text-[10px] p-1 focus:outline-none px-2 input-focus-red text-[#0000ff]"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="md:text-[12px] text-[10px]" htmlFor="phoneMobile">
            /Гар утас/:
          </label>
          <input
            type="text"
            name="phoneMobile"
            id="phoneMobile"
            value={formData.phoneMobile}
            onChange={(e) => updateField("phoneMobile", e.target.value)}
            disabled={readOnly}
            className="border border-gray-400 max-md:h-[15px] md:text-[12px] max-md:w-20 text-[10px] p-1 focus:outline-none px-2 input-focus-red text-[#0000ff]"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="md:text-[12px] text-[10px]" htmlFor="phoneWork">
            /Ажлын/:
          </label>
          <input
            type="text"
            name="phoneWork"
            id="phoneWork"
            value={formData.phoneWork}
            onChange={(e) => updateField("phoneWork", e.target.value)}
            disabled={readOnly}
            className="border border-gray-400 max-md:h-[15px] md:text-[12px] max-md:w-20 text-[10px] p-1 focus:outline-none px-2 input-focus-red text-[#0000ff]"
          />
        </div>
      </div>

      <h1 className="md:py-4 py-2 text-[10px] md:text-[12px]">
        Яаралтай үед холбоо барих 3 хүний нэр, утасны дугаар:
      </h1>

      <div className="py-2 space-y-1 md:space-y-5">
        <div className="flex items-center gap-4 md:gap-20">
          <label className="text-[10px] md:text-[12px]">
            1. Таны хэн болох, нэр, утас:
          </label>
          <input
            type="text"
            name="emergencyContact1"
            placeholder="1-р хүн"
            value={formData.emergencyContact1}
            onChange={(e) => updateField("emergencyContact1", e.target.value)}
            disabled={readOnly}
            className="border border-gray-400 focus:outline-none text-[10px] md:text-[12px] p-1 w-48 max-md:h-[15px] px-2 input-focus-red md:w-96 text-[#0000ff]"
          />
        </div>
        <div className="flex items-center gap-4 md:gap-20">
          <label className="text-[10px] md:text-[12px]">
            2. Таны хэн болох, нэр, утас:
          </label>
          <input
            type="text"
            name="emergencyContact2"
            placeholder="2-р хүн"
            value={formData.emergencyContact2}
            onChange={(e) => updateField("emergencyContact2", e.target.value)}
            disabled={readOnly}
            className="border border-gray-400 focus:outline-none text-[10px] md:text-[12px] p-1 w-48 max-md:h-[15px] px-2 input-focus-red md:w-96 text-[#0000ff]"
          />
        </div>
        <div className="flex items-center gap-4 md:gap-20">
          <label className="text-[10px] md:text-[12px]">
            3. Таны хэн болох, нэр, утас:
          </label>
          <input
            type="text"
            name="emergencyContact3"
            placeholder="3-р хүн"
            value={formData.emergencyContact3}
            onChange={(e) => updateField("emergencyContact3", e.target.value)}
            disabled={readOnly}
            className="border border-gray-400 focus:outline-none text-[10px] md:text-[12px] p-1 w-48 max-md:h-[15px] px-2 input-focus-red md:w-96 text-[#0000ff]"
          />
        </div>
      </div>

      <div className="py-6 flex items-center space-x-2 md:gap-4 text-[10px] md:text-[12px]">
        <label className="block mb-2 ">
          Таны найз, эсвэл төрөл садан манай байгууллагад ажилладаг эсэх:
        </label>

        <div className="flex space-x-4 text-[12px] md:text-[12px]">
          {["Үгүй", "Тийм"].map((choice) => (
            <label
              key={choice}
              className="flex items-center space-x-2 text-[10px] md:text-[12px]"
            >
              <input
                type="radio"
                checked={formData.criminalRecord === choice}
                onChange={() => updateField("criminalRecord", choice)}
                disabled={readOnly}
              />
              <span>{choice}</span>
            </label>
          ))}
        </div>
        {formData.criminalRecord === "Тийм" &&
          renderInput(formData.criminalDetails, (e) =>
            updateField("criminalDetails", e.target.value)
          )}
      </div>

      <div className="flex w-full max-w-md gap-10">
        <label className="text-[12px]" htmlFor="relatedName">
          Тийм бол хэн, аль салбар/хэлтэст:
        </label>
        <input
          type="text"
          name="relatedName"
          id="relatedName"
          value={formData.relatedName}
          onChange={(e) => updateField("relatedName", e.target.value)}
          disabled={readOnly}
          className="border border-gray-400 max-md:h-[15px] focus:outline-none px-2 input-focus-red"
        />
      </div>
    </div>
  );
};

export default PersonalDataView;
