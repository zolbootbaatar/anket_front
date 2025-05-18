"use client";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaVideo,
  FaUpload,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
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
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import apiData from "@/utils/api/apiData";

export default function page() {
  const [dataA, setDataA] = useState({});
  const [dataB, setDataB] = useState({});
  const [dataC, setDataC] = useState({});
  const [dataD, setDataD] = useState({});
  const [dataE, setDataE] = useState({});
  const [dataF, setDataF] = useState({});
  const [dataG, setDataG] = useState({});
  const [dataH, setDataH] = useState({});
  const [systemInfo, setSystemInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  useEffect(() => {
    const fetchSystemInfo = async () => {
      const response = await axios.get(
        apiData.api_url + "/systeminfo/6829cb53217403b1ae47fb06"
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
      formData.append("type", "driver");
      formData.append("busdriver_details", JSON.stringify(dataH));
      if (video) {
        formData.append("video", video);
      }
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

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="md:px-[24%] px-0.5 bg-white text-black md:pt-6 space-y-12 md:pb-20">
      <div className="space-y-4">
        <Image src="/logo.png" alt="logo" width={150} height={90} />
        <h1 className="text-2xl font-semibold">{systemInfo.title}</h1>
        <h1 className="text-[13px] text-gray-600">{systemInfo.description}</h1>
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
      {/* video оруулах хэсэг */}
      {/* video хэсэг preview тэй мөн input дээр биш icon дээр дарж видеогоо
      оруулдаг байх ёстой */}
      <div className="flex flex-col gap-2">
        <label htmlFor="video" className="font-medium">
          Видео оруулах
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-md p-4 hover:border-[#233882] transition-colors">
          {videoPreview ? (
            <div className="flex flex-col items-center">
              <video
                src={videoPreview}
                controls
                className="max-h-[200px] mb-2 rounded"
              ></video>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setVideo(null);
                    setVideoPreview(null);
                  }}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                >
                  Устгах
                </button>
                <label
                  htmlFor="video"
                  className="bg-[#233882] text-white px-2 py-1 rounded text-sm cursor-pointer flex items-center gap-1"
                >
                  <FaUpload size={14} /> Солих
                </label>
              </div>
            </div>
          ) : (
            <label
              htmlFor="video"
              className="flex flex-col items-center justify-center cursor-pointer h-24"
            >
              <FaVideo size={40} color="#233882" />
              <p className="text-gray-500 mt-2">
                Видео оруулахын тулд энд дарна уу
              </p>
            </label>
          )}
          <input
            type="file"
            id="video"
            accept="video/*"
            className="hidden"
            onChange={handleVideoChange}
          />
        </div>
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
