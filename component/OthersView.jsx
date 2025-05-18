import React, { useEffect, useState } from "react";

const OthersView = ({
  onChange = () => {},
  defaultValue = {},
  readOnly = true,
}) => {
  const [formData, setFormData] = useState({
    diseases: [
      ["", ""],
      ["", ""],
      ["", ""],
    ],
    relatives: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    references: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    futureGoal: "",
    jobInfoSource: "",
    otherJobSource: "",
    criminalRecord: "",
    criminalDetails: "",
    expectedSalary: "",
    availableDate: "",
    signature: "",
    addDatas: "",
    dateSubmitted: new Date().toISOString().split("T")[0].replace(/-/g, "/"),
    ...defaultValue,
  });

  useEffect(() => {
    onChange(formData);
  }, [formData]);

  useEffect(() => {
    if (defaultValue.diseases) {
      setFormData(defaultValue);
    }
  }, [defaultValue]);

  const updateField = (field, value) => {
    // Disabled - Бүх талбарыг засах боломжгүй болгосон
  };

  const updateTableData = (section, rowIndex, colIndex, value) => {
    // Disabled - Бүх хүснэгтийн өгөгдлийг засах боломжгүй болгосон
  };

  const renderInput = (value, onChange, key) => (
    <div className="p-2 text-gray-700">{value}</div>
  );

  const renderTextarea = (value, onChange) => (
    <div className="p-2 text-gray-700 whitespace-pre-wrap">{value}</div>
  );

  return (
    <div className="relative p-6 border border-gray-400">
      <h2 className="absolute -top-3 left-2 z-50 bg-white px-4 text-black font-medium uppercase text-lg">
        Бусад мэдээлэл
      </h2>

      <section className="overflow-x-auto mt-4">
        <h1 className="text-[12px] py-4">Эрүүл мэндийн байдал:</h1>
        <table className="min-w-full border text-[12px]">
          <thead>
            <tr>
              <th className="border px-1 py-2">Өвчлөл</th>
              <th className="border px-1 py-2">Муу зуршил</th>
            </tr>
          </thead>
          <tbody>
            {formData.diseases.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((col, colIndex) => (
                  <td key={colIndex} className="border px-1">
                    {renderInput(col, (e) =>
                      updateTableData(
                        "diseases",
                        rowIndex,
                        colIndex,
                        e.target.value
                      )
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-6 overflow-x-auto">
        <h1 className="text-[12px] py-4 font-semibold">Таны хамаатан садан:</h1>
        <table className="min-w-full border text-[12px]">
          <thead>
            <tr>
              <th>Эцгийн нэр, нэр</th>
              <th>Хаана, ямар ажил эрхэлдэг</th>
              <th>Хаяг, утас, и-мэйл</th>
            </tr>
          </thead>
          <tbody>
            {formData.relatives.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((col, colIndex) => (
                  <td key={colIndex} className="border px-1">
                    {renderInput(col, (e) =>
                      updateTableData(
                        "relatives",
                        rowIndex,
                        colIndex,
                        e.target.value
                      )
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-6 overflow-x-auto">
        <h1 className="text-[12px] py-4 font-semibold">
          Таны мэдлэг ур чадварыг тодорхойлох 3 хүн:
        </h1>
        <table className="min-w-full border text-[12px]">
          <thead>
            <tr>
              <th>Эцгийн нэр, нэр</th>
              <th>Хаана, ямар ажил эрхэлдэг</th>
              <th>Хаяг, утас, и-мэйл</th>
            </tr>
          </thead>
          <tbody>
            {formData.references.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((col, colIndex) => (
                  <td key={colIndex} className="border px-1">
                    {renderInput(col, (e) =>
                      updateTableData(
                        "references",
                        rowIndex,
                        colIndex,
                        e.target.value
                      )
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="py-6">
        <h1 className="text-[12px] py-2">Таны ирээдүйн зорилго:</h1>
        {renderTextarea(formData.futureGoal)}
      </div>

      <div className="py-6 text-[12px]">
        <label className="block mb-2">Ажлын мэдээллийн эх сурвалж</label>
        <div>{formData.jobInfoSource || "—"}</div>
      </div>

      <div className="py-6">
        <h1 className="text-[12px] py-2">
          Та өөрийнхөө талаар нэмэлт мэдээлэл байвал өгнө үү:
        </h1>
        {renderTextarea(formData.addDatas, (e) =>
          updateField("addDatas", e.target.value)
        )}
      </div>

      <div className="py-6 text-[12px]">
        <label className="block mb-2">
          Та гэмт хэрэгт холбогдож байсан уу?
        </label>
        <div>{formData.criminalRecord || "—"}</div>
        {formData.criminalRecord === "Тийм" && (
          <div className="p-2 text-gray-700">{formData.criminalDetails}</div>
        )}
      </div>

      <div className="py-6 flex flex-wrap gap-4 text-[12px]">
        <div className="flex space-x-2 items-center">
          <label>Цалингийн хүлээлт:</label>
          <div className="p-2 text-gray-700">{formData.expectedSalary}</div>
        </div>
        <div className="flex space-x-2 items-center">
          <label>Ажилд орох боломжтой хугацаа:</label>
          <div className="p-2 text-gray-700">{formData.availableDate}</div>
        </div>
        <div className="flex space-x-2 items-center">
          <label>Гарын үсэг:</label>
          <div className="p-2 text-gray-700">{formData.signature}</div>
        </div>
        <div className="flex space-x-2 items-center">
          <label>Огноо:</label>
          <div className="p-2 text-gray-700">{formData.dateSubmitted}</div>
        </div>
      </div>
    </div>
  );
};

export default OthersView;
