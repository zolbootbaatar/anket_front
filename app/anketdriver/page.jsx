"use client";

import BusDriver from "@/component/BusDriver";
import BusDriverDetails from "@/component/BusDriverDetail";
import Education from "@/component/Education";
import FamilyType from "@/component/FamilyType";
import FileInsert from "@/component/FileInsert";
import Others from "@/component/OthersView";
import PersonalData from "@/component/PersonalData";
import WorkExperience from "@/component/WorkExperience";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function page() {
  const [dataA, setDataA] = useState({});
  const [dataB, setDataB] = useState({});
  const [dataC, setDataC] = useState({});
  const [dataD, setDataD] = useState({});
  const [dataE, setDataE] = useState({});
  const [dataF, setDataF] = useState({});
  const [dataG, setDataG] = useState({});
  const [dataH, setDataH] = useState({});

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("personal", JSON.stringify(dataD));
      formData.append("experiences", JSON.stringify(dataA));
      formData.append("members", JSON.stringify(dataE));
      formData.append("schools", JSON.stringify(dataB));
      formData.append("others", JSON.stringify(dataF));
      formData.append("busdriver", JSON.stringify(dataG));
      formData.append("type", "driver");
      formData.append("busdriver_details", JSON.stringify(dataH));
      if (dataC && Array.isArray(dataC)) {
        dataC.forEach((file) => {
          if (file) {
            formData.append("files", file);
          }
        });
      }

      const res = await axios.post(
        "http://localhost:8000/api/v1/applications",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Амжилттай илгээгдлээ");
      console.log("Амжилттай:", res.data.data);
    } catch (error) {
      toast.error("Илгээхэд алдаа гарлаа");
      console.error("Илгээхэд алдаа:", error);
    }
  };

  return (
    <div className="md:px-[24%] px-0.5 bg-white text-black md:pt-6 space-y-12 md:pb-20">
      <div className="space-y-4">
        <Image src="/logo.png" alt="logo" width={150} height={90} />
        <h1 className="text-2xl font-semibold">АЖИЛД ОРОХЫГ ХҮССЭН ӨРГӨДӨЛ</h1>
        <h1 className="text-[13px] text-gray-600">
          Та асуултад бүрэн гүйцэд, гаргацтай, үнэн зөвөөр хариулна уу!
        </h1>
      </div>

      <FileInsert onChange={setDataC} />
      <PersonalData onChange={setDataD} />
      <FamilyType onChange={setDataE} />
      <Education onChange={setDataB} />
      <WorkExperience onChange={setDataA} />
      <Others onChange={setDataF} />
      <BusDriver onChange={setDataG} />
      <BusDriverDetails onChange={setDataH} />
      <button
        onClick={handleSubmit}
        className="bg-[#233882] flex justify-center text-white px-4 py-2 mx-auto w-full rounded-md mt-6 font-semibold"
      >
        Анкет илгээх
      </button>
    </div>
  );
}
