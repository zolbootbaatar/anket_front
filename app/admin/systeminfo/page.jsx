"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import apiData from "@/utils/api/apiData";
import { Edit } from "@mui/icons-material";

const SystemInfoPage = () => {
  const [systemInfo, setSystemInfo] = useState({
    title: "",
    type: "office",
    description: "",
    image: "",
    address: "",
    phone: "",
    email: "",
    facebook: "",
    instagram: "",
  });
  const [systemInfos, setSystemInfos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSystemInfos();
  }, []);

  const fetchSystemInfos = async () => {
    try {
      const response = await axios.get(apiData.api_url + "/systeminfo");
      setSystemInfos(response.data.data);
    } catch (error) {
      console.error("Системийн мэдээлэл авахад алдаа гарлаа", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSystemInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editId) {
        await axios.put(`${apiData.api_url}/systeminfo/${editId}`, systemInfo);
        toast.success("Мэдээлэл амжилттай шинэчлэгдлээ");
      } else {
        await axios.post(`${apiData.api_url}/systeminfo`, systemInfo);
        toast.success("Мэдээлэл амжилттай үүсгэгдлээ");
      }

      resetForm();
      fetchSystemInfos();
    } catch (error) {
      toast.error("Алдаа гарлаа: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (info) => {
    setSystemInfo(info);
    setEditId(info._id);
  };

  const handleDelete = async (id) => {
    if (!confirm("Устгахдаа итгэлтэй байна уу?")) return;

    try {
      await axios.delete(`/api/systeminfo/${id}`);
      toast.success("Амжилттай устгалаа");
      fetchSystemInfos();
    } catch (error) {
      toast.error("Устгахад алдаа гарлаа");
    }
  };

  const resetForm = () => {
    setSystemInfo({
      title: "",
      type: "office",
      description: "",
      image: "",
      address: "",
      phone: "",
      email: "",
      facebook: "",
      instagram: "",
    });
    setEditId(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Системийн мэдээлэл</h1>

      {editId && (
        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {editId ? "Мэдээлэл засах" : "Шинэ мэдээлэл үүсгэх"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block mb-1">Гарчиг</label>
                <input
                  type="text"
                  name="title"
                  value={systemInfo.title}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1">Төрөл</label>
                <select
                  name="type"
                  value={systemInfo.type}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                >
                  <option value="office">Оффис</option>
                  <option value="driver">Жолооч</option>
                </select>
              </div>

              <div className="mb-4 md:col-span-2">
                <label className="block mb-1">Тайлбар</label>
                <textarea
                  name="description"
                  value={systemInfo.description}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  rows="3"
                ></textarea>
              </div>

              {/* <div className="mb-4">
              <label className="block mb-1">Зургийн URL</label>
              <input
                type="text"
                name="image"
                value={systemInfo.image}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div> */}

              <div className="mb-4">
                <label className="block mb-1">Хаяг</label>
                <input
                  type="text"
                  name="address"
                  value={systemInfo.address}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1">Утас</label>
                <input
                  type="text"
                  name="phone"
                  value={systemInfo.phone}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1">И-мэйл</label>
                <input
                  type="email"
                  name="email"
                  value={systemInfo.email}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1">Facebook</label>
                <input
                  type="text"
                  name="facebook"
                  value={systemInfo.facebook}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1">Instagram</label>
                <input
                  type="text"
                  name="instagram"
                  value={systemInfo.instagram}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                disabled={loading}
              >
                {loading
                  ? "Хадгалж байна..."
                  : editId
                  ? "Шинэчлэх"
                  : "Хадгалах"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Цуцлах
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Бүх мэдээлэл</h2>

        {systemInfos.length === 0 ? (
          <p>Мэдээлэл олдсонгүй</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Гарчиг</th>
                  <th className="py-2 px-4 text-left">Төрөл</th>
                  <th className="py-2 px-4 text-left">Утас</th>
                  <th className="py-2 px-4 text-left">И-мэйл</th>
                  <th className="py-2 px-4 text-left">Үйлдэл</th>
                </tr>
              </thead>
              <tbody>
                {systemInfos.map((info) => (
                  <tr key={info._id} className="border-b">
                    <td className="py-2 px-4">{info.title}</td>
                    <td className="py-2 px-4">
                      {info.type === "office" ? "Оффис" : "Жолооч"}
                    </td>
                    <td className="py-2 px-4">{info.phone}</td>
                    <td className="py-2 px-4">{info.email}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleEdit(info)}
                        className="mr-2 flex justify-center items-center gap-3 cursor-pointer bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                      >
                        Засах{" "}
                        <span>
                          <Edit />
                        </span>
                      </button>
                      {/* <button
                        onClick={() => handleDelete(info._id)}
                        className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                      >
                        Устгах
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SystemInfoPage;
