"use client";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/component/utils/Sidebar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/context/AuthProvider";

export default function ClientLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  // Open the sidebar toggle button for debugging
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <AuthProvider>
      {pathname.includes("admin") ? (
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      ) : null}
      <Toaster />
      <div
        style={{
          marginLeft: sidebarOpen && pathname.includes("admin") ? "240px" : "0",
          transition: "margin-left 0.3s ease",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        {/* Temporary sidebar toggle button for debugging */}
        <button
          onClick={toggleSidebar}
          className="md:hidden"
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: 1000,
            padding: "5px 10px",
            background: "#3f51b5",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {sidebarOpen ? "Menu хаах" : "Menu нээх"}
        </button>
        {children}
      </div>
    </AuthProvider>
  );
}
