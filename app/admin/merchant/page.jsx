"use client";
import MerchantTable from "@/component/tables/MerchantTable";
import getRequest from "@/utils/api/getRequest";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      getRequest({
        route: "/applications",
        setValue: setDatas,
        setIsLoading,
      });
    }
  }, [isLoading]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Merchant Table</h1>
      <MerchantTable datas={datas} setDatas={setDatas} />
    </div>
  );
};

export default Page;
