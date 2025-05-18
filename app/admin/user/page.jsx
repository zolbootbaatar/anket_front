"use client";
import UserTable from "@/component/tables/UserTable";
import getRequest from "@/utils/api/getRequest";
import React, { useEffect, useState } from "react";

const page = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      getRequest({
        route: "/user",
        setValue: setDatas,
        setIsLoading,
      });
    }
  }, [isLoading]);
  return (
    <div>
      <UserTable datas={datas} setDatas={setDatas} />
    </div>
  );
};

export default page;
