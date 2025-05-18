import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">ANKET системд тавтай морил</h1>
      <div className="flex gap-4">
        <a
          href="/anketdriver"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Жолоочын анкет
        </a>
        <a
          href="/anket"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
        >
          Оффисын анкет
        </a>
      </div>
      <div className="border-t-[1px] border-gray-300 w-[40%] my-8"></div>
      <p className="text-gray-600 mb-8">
        Та системд нэвтэрхийг хүсэж байвал{" "}
        <span className="text-blue-600">
          <a href="/auth/login"> энд</a>
        </span>{" "}
        дарна уу.
      </p>
    </div>
  );
};

export default Home;
