import React, { useState, useEffect } from "react";

const WorkExperience = ({
  onChange = () => {},
  defaultValue = [],
  readOnly = false,
}) => {
  const [experiences, setExperiences] = useState(
    defaultValue.length > 0
      ? defaultValue
      : [
          {
            jobTitle: "",
            companyName: "",
            startDate: "",
            endDate: "",
            salary: "",
            reasonForLeaving: "",
            supervisorContact: "",
          },
          {
            jobTitle: "",
            companyName: "",
            startDate: "",
            endDate: "",
            salary: "",
            reasonForLeaving: "",
            supervisorContact: "",
          },
          {
            jobTitle: "",
            companyName: "",
            startDate: "",
            endDate: "",
            salary: "",
            reasonForLeaving: "",
            supervisorContact: "",
          },
          {
            jobTitle: "",
            companyName: "",
            startDate: "",
            endDate: "",
            salary: "",
            reasonForLeaving: "",
            supervisorContact: "",
          },
        ]
  );

  const [gapReason, setGapReason] = useState(defaultValue.gapReason || "");

  const handleExperienceChange = (index, field, value) => {
    const updated = experiences.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    setExperiences(updated);
    onChange({ experiences: updated, gapReason });
  };

  const handleGapReasonChange = (value) => {
    setGapReason(value);
    onChange({ experiences, gapReason: value });
  };

  const headers = [
    { label: "Ажил/албан тушаал", key: "jobTitle" },
    { label: "Байгууллага", key: "companyName" },
    { label: "Элссэн огноо", key: "startDate" },
    { label: "Гарсан огноо", key: "endDate" },
    { label: "Цалин", key: "salary" },
    { label: "Гарсан шалтгаан", key: "reasonForLeaving" },
    { label: "Удирдлага, утас", key: "supervisorContact" },
  ];

  useEffect(() => {
    onChange({ experiences, gapReason });
  }, [experiences, gapReason, onChange]);

  useEffect(() => {
    if (defaultValue && defaultValue.experiences) {
      setExperiences(defaultValue.experiences);
    }
  }, [defaultValue]);

  return (
    <div className="relative p-6 border border-gray-400">
      <h2 className="absolute -top-3 left-2 z-50 bg-white px-4 text-black font-medium uppercase text-lg">
        Ажлын дадлага туршлага
      </h2>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border text-[12px]">
          <thead>
            <tr className="text-gray-700">
              {headers.map((head, i) => (
                <th key={i} className="border border-gray-300 px-1">
                  {head.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {experiences.map((exp, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((col, colIndex) => (
                  <td key={colIndex} className="border border-gray-300 px-1">
                    <input
                      type="text"
                      value={exp[col.key]}
                      onChange={(e) =>
                        handleExperienceChange(
                          rowIndex,
                          col.key,
                          e.target.value
                        )
                      }
                      className="w-full p-1 outline-none text-[#0000ff] input-focus-red"
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

      <h1 className="text-[12px] py-6">
        Та 3 сараас дээш хугацаагаар ажилгүй байсан шалтгаанаа заавал бичнэ үү:
      </h1>

      <div className="w-full">
        <input
          type="text"
          value={gapReason}
          onChange={(e) => handleGapReasonChange(e.target.value)}
          className="px-2 border w-full border-gray-400 focus:outline-none shadow-2xl focus:border-[#f00237] shadow-even"
          readOnly={true}
          disabled={true}
        />
      </div>
    </div>
  );
};

export default WorkExperience;
