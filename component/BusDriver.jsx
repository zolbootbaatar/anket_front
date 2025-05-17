"use client"
import React from 'react'

const BusDriver = () => {
  return (
    <div className="relative p-6 border border-gray-400">
        <h2 className="absolute -top-3 left-2 z-50 bg-white px-4 text-black font-medium uppercase text-lg">
        НҮҮРС ТЭЭВЭРТ ОРОЛЦОХ ТЭЭВРИЙН ХЭРЭГСЛИЙН ЭЗЭМШИГЧИЙН АНКЕТ
        </h2>
        <div className='grid grid-cols-2 gap-6'>
            <div className="space-x-4 py-4 flex flex-wrap">
                <label className="text-[12px]" htmlFor="jobName">
                Овог нэр:
                </label>
                <input
                type="text"
                className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 input-focus-red w-64 max-w-md"
                />
            </div>    
            <div className="space-x-4 flex py-4">
                <label className="text-[12px]" htmlFor="jobName">
                Регистрийн дугаар:
                </label>
                <input
                type="text"
                className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 input-focus-red w-64 max-w-md"
                />
            </div>    
            <div className="space-x-4 py-4 flex">
                <label className="text-[12px]" htmlFor="jobName">
                Оршин суугаа хаяг:
                </label>
                <input
                type="text"
                className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 input-focus-red w-64 max-w-md"
                />
            </div>    
            <div className="space-x-4 py-4 flex">
                <label className="text-[12px]" htmlFor="jobName">
                Утасны дугаар:
                </label>
                <input
                type="text"
                className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 input-focus-red w-64 max-w-md"
                />
            </div>    
            <div className="space-x-4 py-4 flex">
                <label className="text-[12px]" htmlFor="jobName">
                И-мэйл хаяг:
                </label>
                <input
                type="text"
                className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 input-focus-red w-64 max-w-md"
                />
            </div>    
            <div className=" py-4 flex">
                <label className="text-[12px]" htmlFor="jobName">
                Аж ахуйн нэгжийн нэр (хувь хүн биш бол):
                </label>
                <input
                type="text"
                className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 input-focus-red w-64 max-w-md"
                />
            </div>    
            <div className="space-x-4 py-4 flex">
                <label className="text-[12px]" htmlFor="jobName">
                Улсын бүртгэлийн дугаар:
                </label>
                <input
                type="text"
                className="border border-gray-400 focus:outline-none text-[#0000ff] px-2 input-focus-red w-64 max-w-md"
                />
            </div>    
        </div>

    </div>
  )
}

export default BusDriver
