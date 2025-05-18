import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">ANKET системд тавтай морил</h1>
      <p className="text-gray-600 mb-8">
        Та доорх товчийг ашиглан системд нэвтэрнэ үү
      </p>
      <div className="flex gap-4">
        <a
          href="/auth/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Нэвтрэх
        </a>
        <a
          href="/admin"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
        >
          Админ
        </a>
      </div>
    </div>
  );
};

export default Home;
