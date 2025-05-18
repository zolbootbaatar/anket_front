"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import axiosInstance, { axiosUrl } from "@/utils/api/axios";
import apiData from "@/utils/api/apiData";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user_info");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async ({ email, password }) => {
    try {
      const res = await axiosInstance.post(`${apiData.api_url}/user/login`, {
        email,
        password,
      });
      if (res.data.success) {
        setUser(res.data.user);
        localStorage.setItem("user_info", JSON.stringify(res.data.user));
        Cookies.set("user_info", JSON.stringify(res.data.user), { expires: 7 });
        localStorage.setItem("token", res.data.token);
        Cookies.set("auth_token", res.data.token, { expires: 7, secure: true });
        console.log("auth_token", res.data.token);
        toast.success("Амжилттай нэвтэрлээ!");
        setTimeout(() => {
          router.push("/admin/user");
        }, 2000);
      }
    } catch (error) {
      console.error("Нэвтрэхэд алдаа гарлаа:", error);
      toast.error("Нэвтрэх үед алдаа гарлаа.");
    }
  };

  const register = async (registerData) => {
    try {
      const res = await axios.post(
        `${apiData.api_url}/user/register`,
        registerData
      );
      if (res.data.success) {
        setUser(res.data.user);
        localStorage.setItem("user_info", JSON.stringify(res.data.user));
        toast.success("Амжилттай бүртгүүллээ!");
        router.push("/auth/login");
      }
    } catch (error) {
      console.error("Бүртгэл хийхэд алдаа гарлаа:", error);
      toast.error("Бүртгэл хийхэд алдаа гарлаа.");
      // alert("Бүртгэл хийхэд алдаа гарлаа.");
    }
  };

  const signup = async (registerData) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("user_info"));
      const dataWithUser = {
        ...registerData,
        user: userInfo?._id,
        merchantId: userInfo?._id,
      };

      const res = await axios.post(
        `${apiData.api_url}/user/register`,
        dataWithUser
      );
      if (res.data.success) {
        toast.success("Хэрэглэгч амжилттай бүртгэгдлээ!");
      }
    } catch (error) {
      console.error("Бүртгэл хийхэд алдаа гарлаа:", error);
      alert("Бүртгэл хийхэд алдаа гарлаа.");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_info");
    localStorage.removeItem("token");
    Cookies.remove("auth_token");
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, loading, signup, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
