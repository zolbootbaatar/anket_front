"use client";
import React, { useState, useEffect } from "react";

const emptyMember = {
  relation: "",
  fullName: "",
  age: "",
  registrationNumber: "",
  currentJob: "",
  contactPhone: "",
};

const FamilyType = ({
  onChange = () => {},
  defaultValue = {},
  readOnly = true,
}) => {
  const [familyCount, setFamilyCount] = useState(
    defaultValue.familyCount || ""
  );
  const [members, setMembers] = useState(() => {
    return defaultValue.members && defaultValue.members.length > 0
      ? defaultValue.members
      : Array(6).fill({ ...emptyMember });
  });

  useEffect(() => {
    if (defaultValue) {
      setFamilyCount(defaultValue.familyCount);
    }
    if (defaultValue.members) {
      setMembers(defaultValue.members);
    }
  }, [defaultValue.familyCount, defaultValue.members]);

  useEffect(() => {
    onChange({
      familyCount: familyCount ? Number(familyCount) : 0,
      members,
    });
  }, [familyCount, members, onChange]);

  const handleMemberChange = (index, field, value) => {
    const updated = [...members];
    updated[index] = { ...updated[index], [field]: value };
    setMembers(updated);
  };

  const handleFamilyCountChange = (e) => {
    const value = e.target.value;
    setFamilyCount(value);
  };

  return (
    <div className="relative p-6 border border-gray-400">
      <h2 className="absolute -top-3 left-2 z-50 bg-white px-4 text-black font-medium uppercase text-lg">
        Гэр бүлийн байдал
      </h2>

      <div className="mt-2">
        <label className="text-[12px] font-semibold">
          Хамт амьдардаг ам бүлийн байдал /одоо/: Ам бүлийн тоо:
        </label>
        <input
          type="number"
          min="0"
          value={familyCount}
          onChange={handleFamilyCountChange}
          className="w-16 border border-gray-400 focus:outline-none focus:border-[#f00237]"
          readOnly={true}
          disabled={true}
        />
        <label className="text-[12px] ml-2">
          (Аав, ээж, төрсөн ах, эгч, дүү, эхнэр хүүхдийн мэдээллийг заавал
          оруулах)
        </label>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border text-[12px]">
          <thead>
            <tr>
              <th className="border px-1">Таны хэн болох</th>
              <th className="border px-1">Эцгийн нэр, нэр</th>
              <th className="border px-1">Нас</th>
              <th className="border px-1">Регистрийн дугаар</th>
              <th className="border px-1">Одоо эрхэлж байгаа ажил</th>
              <th className="border px-1">Холбоо барих утас</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, i) => (
              <tr key={i}>
                {[
                  "relation",
                  "fullName",
                  "age",
                  "registrationNumber",
                  "currentJob",
                  "contactPhone",
                ].map((field) => (
                  <td className="border px-1" key={field}>
                    <input
                      type={field === "age" ? "number" : "text"}
                      value={member[field] || ""}
                      onChange={(e) =>
                        handleMemberChange(i, field, e.target.value)
                      }
                      className="w-full p-1 outline-none px-2 text-[#0000ff]"
                      readOnly={true}
                      disabled={true}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FamilyType;

// formData.append("personal",dataD);
// formData.append("experiences",dataA);
// formData.append("members",dataE);
// formData.append("persol",dataC);
// formData.append("persol",dataC);
