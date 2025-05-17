"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PersonalData from '@/component/PersonalData'
import FamilyType from '@/component/FamilyType'
import Education from '@/component/Education'
import WorkExperience from '@/component/WorkExperience'
import { useParams } from 'next/navigation'
import Others from '@/component/Others'
import FileInsert from '@/component/FileInsert'

const ApplicantDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/api/v1/experience/${id}`)
        .then(res => setData(res.data.data))
        .catch(err => console.error(err))
    }
  }, [id])

  if (!data) return <div className="p-4">Уншиж байна...</div>

  return (
    <div className="md:px-[20%] py-6 space-y-8">
      <h1 className="text-2xl font-bold">Анкет дэлгэрэнгүй</h1>
      
      <FileInsert 
        defaultValue={data.files || []}
        readOnly
      />

      <PersonalData 
        defaultValue={data.personal && data.personal.length > 0 ? data.personal[0] : {}} 
        readOnly 
      />
      
      <FamilyType 
        defaultValue={data.members && data.members.length > 0 ? data.members : []} 
        readOnly 
      />
      
      <Education
      defaultValue={{
        schools: data.schools,
        computerSkills: data.computerSkills,
        personalSkills: data.personalSkills
      }}
      readOnly
      />

      
      <WorkExperience 
        defaultValue={data.experiences && data.experiences.length > 0 ? data.experiences : []} 
        readOnly 
      />
      
      <Others 
        defaultValue={data.others || {}} 
        readOnly 
      />
    </div>
  )
}

export default ApplicantDetail