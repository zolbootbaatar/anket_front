import React, { useEffect, useState } from "react";

const Test = ({ onChange = () => {}, defaultValue = [], readOnly = false }) => {
  const [formData, setFormData] = useState({
    diseases: [["", ""], ["", ""], ["", ""]],
    relatives: [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]],
    references: [["", "", ""], ["", "", ""], ["", "", ""]],
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
  });

  useEffect(() => {
    onChange(formData);
  }, [formData]);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateTableData = (section, rowIndex, colIndex, value) => {
    const updated = [...formData[section]];
    updated[rowIndex][colIndex] = value;
    setFormData((prev) => ({ ...prev, [section]: updated }));
  };

  return (
    <div className="relative p-6 border border-gray-400">
      <h2 className="absolute -top-3 left-2 z-50 bg-white px-4 text-black font-medium uppercase text-lg">
        Бусад мэдээлэл
      </h2>
     {/* <section className="overflow-x-auto mt-4">
        <h1 className="text-[12px] py-4">Эрүүл мэндийн байдал:</h1>
        <table className="min-w-full border text-[12px]">
          <thead>
            <tr><th className="border px-1 py-2">Өвчлөл</th><th className="border px-1 py-2">Муу зуршил</th></tr>
          </thead>
          <tbody>
            {formData.diseases.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((col, colIndex) => (
                  <td key={colIndex} className="border px-1">
                    <input
                      value={col}
                      onChange={(e) => updateTableData("diseases", rowIndex, colIndex, e.target.value)}
                      className="w-full outline-none px-2 py-2 text-blue-700"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-6 overflow-x-auto">
        <h1 className="text-[12px] py-4 font-semibold">Таны мэдлэг ур чадварыг тодорхойлох 3 хүн:</h1>
        <table className="min-w-full border text-[12px]">
          <thead>
            <tr><th>Эцгийн нэр, нэр</th><th>Хаана, ямар ажил эрхэлдэг</th><th>Хаяг, утас, и-мэйл</th></tr>
          </thead>
          <tbody>
            {formData.relatives.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((col, colIndex) => (
                  <td key={colIndex} className="border px-1">
                    <input
                      value={col}
                      onChange={(e) => updateTableData("relatives", rowIndex, colIndex, e.target.value)}
                      className="w-full outline-none px-2 py-2 text-blue-700"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-6 overflow-x-auto">
        <h1 className="text-[12px] py-4 font-semibold">Таны мэдлэг ур чадварыг тодорхойлох 3 хүн:</h1>
        <table className="min-w-full border text-[12px]">
          <thead>
            <tr><th>Эцгийн нэр, нэр</th><th>Хаана, ямар ажил эрхэлдэг</th><th>Хаяг, утас, и-мэйл</th></tr>
          </thead>
          <tbody>
            {formData.references.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((col, colIndex) => (
                  <td key={colIndex} className="border px-1">
                    <input
                      value={col}
                      onChange={(e) => updateTableData("references", rowIndex, colIndex, e.target.value)}
                      className="w-full outline-none px-2 py-2 text-blue-700"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="py-6">
        <h1 className="text-[12px] py-2">Таны ирээдүйн зорилго:</h1>
        <textarea
          className="w-full h-32 border px-2 text-blue-700"
          value={formData.futureGoal}
          onChange={(e) => updateField("futureGoal", e.target.value)}
        />
      </div>

      <div className="py-6 text-[12px]">
        <label className="block mb-2">Ажлын мэдээллийн эх сурвалж</label>
        <div className="flex flex-wrap gap-4">
          {["Сургууль дээрээсээ", "Сонин дээрх зараас", "Найз, төрөл садангаас", " Facebook, website", 
          "Манайхтай холбоо барьж, эсвэл өөрөө ирж", "Бусад: /Дээр дурьдаагүй ямар мэдээллийн сувгаар/"].map((src) => (
            <label key={src} className="flex items-center space-x-2">
              <input
                type="radio"
                checked={formData.jobInfoSource === src}
                onChange={() => updateField("jobInfoSource", src)}
              />
              <span>{src}</span>
            </label>
          ))}
          {formData.jobInfoSource === "Бусад: /Дээр дурьдаагүй ямар мэдээллийн сувгаар/" && (
            <input
              type="text"
              className="border px-2 py-1 w-90"
              value={formData.otherJobSource}
              onChange={(e) => updateField("otherJobSource", e.target.value)}
              placeholder="Бусад эх сурвалж..."
            />
          )}
        </div>
      </div>

      <div className="py-6">
        <h1 className="text-[12px] py-2">Та өөрийнхөө талаар нэмэлт мэдээлэл байвал өгнө үү! (Эзэмшиж, мэргэшсэн чадварууд,
             онцгой авьяас чадвар, сонирхол, алдар цол өргөмжлөл, шагнал урамшуулал, давхар эрхэлдэг ажил, спорт, урлаг г. м.)</h1>
        <textarea
          className="w-full h-32 border px-2 text-blue-700"
          value={formData.addDatas}
          onChange={(e) => updateField("addDatas", e.target.value)}
        />
      </div>

      <div className="py-6 text-[12px]">
        <label className="block mb-2">Та гэмт хэрэгт холбогдож байсан уу?</label>
        <div className="flex space-x-4">
          {["Үгүй", "Тийм"].map((choice) => (
            <label key={choice} className="flex items-center space-x-2">
              <input
                type="radio"
                checked={formData.criminalRecord === choice}
                onChange={() => updateField("criminalRecord", choice)}
              />
              <span>{choice}</span>
            </label>
          ))}
          {formData.criminalRecord === "Тийм" && (
            <input
              type="text"
              className="border px-2 py-1 w-90"
              value={formData.criminalDetails}
              onChange={(e) => updateField("criminalDetails", e.target.value)}
              placeholder="Дэлгэрэнгүй"
            />
          )}
        </div>
      </div>

      <div className="py-6 flex flex-wrap gap-4 text-[12px]">
        <div className="flex space-x-2 items-center">
          <label>Цалингийн хүлээлт:</label>
          <input
            type="text"
            className="border px-2"
            value={formData.expectedSalary}
            onChange={(e) => updateField("expectedSalary", e.target.value)}
          />
        </div>
        <div className="flex space-x-2 items-center">
          <label>Ажилд орох боломжтой хугацаа:</label>
          <input
            type="text"
            className="border px-2"
            value={formData.availableDate}
            onChange={(e) => updateField("availableDate", e.target.value)}
          />
        </div>
        <div className="flex space-x-2 items-center">
          <label>Гарын үсэг:</label>
          <input
            type="text"
            className="border px-2"
            value={formData.signature}
            onChange={(e) => updateField("signature", e.target.value)}
          />
        </div>
        <div className="flex space-x-2 items-center">
          <label>Огноо:</label>
          <input type="text" readOnly className="border px-2 italic" value={formData.dateSubmitted} />
        </div>
      </div> */}
    </div>
  );
};

export default Test;
