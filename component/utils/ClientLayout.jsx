"use client";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/component/utils/Sidebar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/context/AuthProvider";

export default function ClientLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Mobile дээр хуудас шилжих үед sidebar хаах
  useEffect(() => {
    const isMobile = window.innerWidth < 768; // md breakpoint
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [pathname]);

  return (
    <AuthProvider>
      {pathname.includes("admin") ? (
        <>
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          {/* Mobile Navbar */}
          <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="flex items-center justify-between px-4 py-3">
              <h1 className="text-xl font-semibold">Удирдах систем</h1>
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {sidebarOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </>
      ) : null}
      <Toaster />
      <div
        style={{
          marginLeft: sidebarOpen && pathname.includes("admin") ? "240px" : "0",
          transition: "margin-left 0.3s ease",
          minHeight: "100vh",
          padding: "20px",
          paddingTop: pathname.includes("admin") ? "60px" : "20px",
        }}
      >
        {children}
      </div>
    </AuthProvider>
  );
}
