"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import PersonalData from "@/component/PersonalDataView";
import FamilyType from "@/component/FamilyTypeView";
import Education from "@/component/EducationView";
import WorkExperience from "@/component/WorkExperienceView";
import { useParams } from "next/navigation";
import Others from "@/component/OthersView";
import FilePreview from "@/component/FilePreview";
import BusDriverView from "@/component/BusDriverView";
import BusDriverDetails from "@/component/BusDriverDetailView";
import apiData from "@/utils/api/apiData";

const ApplicantDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const contentRef = useRef(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://templateapi.xyz/anket/api/v1/applications/${id}`)
        .then((res) => setData(res.data.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write("<html><head><title>Анкет хэвлэх</title>");
    printWindow.document.write('<link rel="stylesheet" href="/globals.css" />');
    printWindow.document.write(
      "<style>body { font-family: Arial, sans-serif; padding: 20px; }</style>"
    );
    printWindow.document.write("</head><body>");
    printWindow.document.write(contentRef.current.innerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  if (!data) return <div className="p-4">Уншиж байна...</div>;

  return (
    <div className="md:px-[20%] py-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Анкет дэлгэрэнгүй</h1>
        <button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Хэвлэх
        </button>
      </div>

      <div ref={contentRef}>
        <FilePreview defaultValue={data.files || []} readOnly />

        <div className="border-2 border-dashed border-gray-300 rounded-md p-4 hover:border-[#233882] transition-colors">
          <video
            src={apiData.video_api_url + data.video}
            controls
            className="max-h-[200px] mb-2 rounded"
          ></video>
        </div>
        <PersonalData defaultValue={data.personal} readOnly />

        <FamilyType
          defaultValue={
            data.members && data.members.length > 0 ? data.members[0] : []
          }
          readOnly
        />

        <Education
          defaultValue={{
            schools: data.schools && data.schools[0].schools,
            computerSkills: data.schools && data.schools[0].computerSkills,
            personalSkills: data.schools && data.schools[0].personalSkills,
          }}
          readOnly
        />

        <WorkExperience
          defaultValue={
            data.experiences && data.experiences.length > 0
              ? data.experiences[0]
              : []
          }
          readOnly
        />

        <Others defaultValue={data.others || {}} readOnly />

        {data.type === "driver" ? (
          <BusDriverView value={data.busdriver || {}} readOnly />
        ) : null}
        {data.type === "driver" ? (
          <BusDriverDetails value={data.busdriver_details || {}} readOnly />
        ) : null}
      </div>
    </div>
  );
};

export default ApplicantDetail;
