"use client";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Education from "@/component/Education";
import FamilyType from "@/component/FamilyType";
import FileInsert from "@/component/FileInsert";
import PersonalData from "@/component/PersonalData";
import WorkExperience from "@/component/WorkExperience";
import apiData from "@/utils/api/apiData";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Others from "@/component/Others";

export default function page() {
  const [dataA, setDataA] = useState({});
  const [dataB, setDataB] = useState({});
  const [dataC, setDataC] = useState({});
  const [dataD, setDataD] = useState({});
  const [dataE, setDataE] = useState({});
  const [dataF, setDataF] = useState({});
  const [dataG, setDataG] = useState({});
  const [dataH, setDataH] = useState({});
  const [loading, setLoading] = useState(true);
  const [systemInfo, setSystemInfo] = useState({});

  useEffect(() => {
    const fetchSystemInfo = async () => {
      const response = await axios.get(
        apiData.api_url + "/systeminfo/6829cac2217403b1ae47fafa"
      );
      setSystemInfo(response.data.data);
      setLoading(false);
    };
    if (loading) {
      fetchSystemInfo();
    }
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("personal", JSON.stringify(dataD));
      formData.append("experiences", JSON.stringify(dataA));
      formData.append("members", JSON.stringify(dataE));
      formData.append("schools", JSON.stringify(dataB));
      formData.append("others", JSON.stringify(dataF));
      formData.append("busdriver", JSON.stringify(dataG));
      formData.append("type", "office");
      formData.append("busdriver_details", JSON.stringify(dataH));
      if (dataC && Array.isArray(dataC)) {
        dataC.forEach((file) => {
          if (file) {
            formData.append("files", file);
          }
        });
      }

      const res = await axios.post(
        "https://templateapi.xyz/anket/api/v1/applications",
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
        <h1 className="text-2xl font-semibold">{systemInfo.title}</h1>
        <h1 className="text-[13px] text-gray-600">
          Та асуултад бүрэн гүйцэд, гаргацтай, үнэн зөвөөр хариулна уу!
        </h1>
      </div>

      <div className="flex flex-col justify-start items-start gap-3">
        {/* // ig fb address systeminfo-с авч харуулах */}
        <div className="flex gap-2">
          <a href={systemInfo.facebook} target="_blank">
            <FaFacebook size={40} color="blue" />
          </a>
          <a href={systemInfo.instagram} target="_blank">
            <FaInstagram size={40} color="red" />
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <p className="flex gap-2 items-center">
              <span>
                <FaPhone size={20} color="green" />
              </span>{" "}
              Утас: {systemInfo.phone}
            </p>
            <p className="flex gap-2 items-center">
              <span>
                <FaEnvelope size={20} color="red" />
              </span>{" "}
              Имэйл: {systemInfo.email}
            </p>
          </div>
          <p className="flex gap-2 items-center">
            <span>
              <FaLocationDot size={20} color="red" />
            </span>{" "}
            Хаяг: {systemInfo.address}
          </p>
        </div>
      </div>

      <FileInsert onChange={setDataC} />
      <PersonalData onChange={setDataD} />
      <FamilyType onChange={setDataE} />
      <Education onChange={setDataB} />
      <WorkExperience onChange={setDataA} />
      <Others onChange={setDataF} />
      {/* <BusDriver onChange={setDataG} />
      <BusDriverDetails onChange={setDataH} /> */}
      <button
        onClick={handleSubmit}
        className="bg-[#233882] flex justify-center text-white px-4 py-2 mx-auto w-full rounded-md mt-6 font-semibold"
      >
        Анкет илгээх
      </button>
    </div>
  );
}
