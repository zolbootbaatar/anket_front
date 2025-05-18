import React, { useEffect, useState } from "react";

const schoolTypes = ["Дунд сургууль", "Их, дээд сургууль"];
const programTypes = [
  "MS Word®",
  "MS Excel®",
  "MS PowerPoint®",
  "MS Access®",
  "Хурдан бичих чадвар",
];

const Education = ({
  onChange = () => {},
  defaultValue = [],
  readOnly = false,
}) => {
  const [schools, setSchools] = useState(
    schoolTypes.map((type) => ({
      schoolType: type,
      schoolName: "",
      startDate: "",
      endDate: "",
      gpa: "",
      major: "",
      fundingType: "",
    }))
  );

  const [computerSkills, setComputerSkills] = useState(
    programTypes.map((program) => ({
      programName: program,
      skillLevel: "",
    }))
  );

  const [personalSkills, setPersonalSkills] = useState(
    Array(4).fill({ relationship: "", skillLevel: "" })
  );

  useEffect(() => {
    onChange({
      schools,
      computerSkills,
      personalSkills,
    });
  }, [schools, computerSkills, personalSkills]);

  const handleSchoolChange = (index, field, value) => {
    const updated = [...schools];
    updated[index][field] = value;
    setSchools(updated);
  };

  const handleProgramSkillChange = (index, value) => {
    const updated = [...computerSkills];
    updated[index].skillLevel = value;
    setComputerSkills(updated);
  };

  const handlePersonalSkillChange = (index, field, value) => {
    const updated = [...personalSkills];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setPersonalSkills(updated);
  };

  return (
    <div className="relative p-4 sm:p-6 border border-gray-400">
      <h2 className="absolute -top-3 left-2 z-50 bg-white px-2 sm:px-4 text-black font-medium uppercase text-sm sm:text-lg">
        Боловсрол
      </h2>

      <table className="table-auto w-full border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="border px-1 py-0.5 text-[10px] sm:text-[13px] sm:px-2 sm:py-1">
              Сургуулийн төрөл
            </th>
            <th className="border px-1 py-0.5 text-[10px] sm:text-[13px] sm:px-2 sm:py-1">
              Сургуулийн нэр
            </th>
            <th className="border px-1 py-0.5 text-[10px] sm:text-[13px] sm:px-2 sm:py-1">
              Элссэн он
            </th>
            <th className="border px-1 py-0.5 text-[10px] sm:text-[13px] sm:px-2 sm:py-1">
              Төгссөн он
            </th>
            <th className="border px-1 py-0.5 text-[10px] sm:text-[13px] sm:px-2 sm:py-1">
              Голч дүн
            </th>
            <th className="border px-1 py-0.5 text-[10px] sm:text-[13px] sm:px-2 sm:py-1">
              Мэргэжил
            </th>
            <th className="border px-1 py-0.5 text-[10px] sm:text-[13px] sm:px-2 sm:py-1">
              Төлбөр
            </th>
          </tr>
        </thead>
        <tbody>
          {schools.map((school, index) => (
            <tr key={index}>
              <td className="border px-1 py-0.5 text-center text-[10px] sm:text-[13px] sm:px-3 sm:py-1">
                {school.schoolType}
              </td>
              {[
                "schoolName",
                "startDate",
                "endDate",
                "gpa",
                "major",
                "fundingType",
              ].map((field, i) => (
                <td key={i} className="border">
                  <input
                    type="text"
                    value={school[field]}
                    onChange={(e) =>
                      handleSchoolChange(index, field, e.target.value)
                    }
                    className="w-full p-1 sm:p-2 text-xs sm:text-sm shadow-even focus:outline-none"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-[10px] sm:text-[12px] py-3 sm:py-6">
        Компьютер дээр ажиллах чадвараа хувиар тэмдэглэнэ:
      </h1>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:justify-between">
        <table className="table-auto w-full border border-gray-300 text-[10px] sm:text-[13px]">
          <thead>
            <tr>
              <th className="border px-1 py-0.5 sm:px-2 sm:py-1">
                Програмын нэр
              </th>
              <th className="border py-0.5 sm:py-1 text-center">
                <p className="mb-0.5 sm:mb-1">Ажиллах чадвар</p>
                <p className="text-gray-500 text-[9px] sm:text-[12px] border-t pt-0.5 sm:pt-1">
                  %
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {computerSkills.map((program, index) => (
              <tr key={index}>
                <td className="border px-1 py-0.5 text-center sm:px-3 sm:py-1">
                  {program.programName}
                </td>
                <td className="border">
                  <input
                    type="text"
                    value={program.skillLevel}
                    onChange={(e) =>
                      handleProgramSkillChange(index, e.target.value)
                    }
                    className="w-full p-1 sm:p-2 text-xs sm:text-sm shadow-even focus:outline-none"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="border w-full border-gray-300 text-[10px] sm:text-[13px] mt-2 sm:mt-0">
          <thead>
            <tr>
              <th className="border px-1 py-0.5 sm:px-2 sm:py-1">
                Таны хэн болох
              </th>
              <th className="border py-0.5 sm:py-1 text-center">
                <p className="mb-0.5 sm:mb-1">Ажиллах чадвар</p>
                <p className="text-gray-500 text-[9px] sm:text-[12px] border-t pt-0.5 sm:pt-1">
                  %
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {personalSkills.map((item, index) => (
              <tr key={index}>
                <td className="border px-1 py-0.5 sm:px-2 sm:py-1">
                  <input
                    type="text"
                    value={item.relationship}
                    onChange={(e) =>
                      handlePersonalSkillChange(
                        index,
                        "relationship",
                        e.target.value
                      )
                    }
                    className="w-full p-1 sm:p-2 text-xs sm:text-sm shadow-even text-blue-700 focus:outline-none"
                  />
                </td>
                <td className="border px-1 py-0.5 sm:px-2 sm:py-1">
                  <input
                    type="text"
                    value={item.skillLevel}
                    onChange={(e) =>
                      handlePersonalSkillChange(
                        index,
                        "skillLevel",
                        e.target.value
                      )
                    }
                    className="w-full p-1 sm:p-2 text-xs sm:text-sm shadow-even text-blue-700 focus:outline-none"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;
