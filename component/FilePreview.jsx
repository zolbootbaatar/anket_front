"use client";

import { useEffect, useState } from "react";

const FilePreview = ({ onChange, defaultValue = [], readOnly = false }) => {
  const [files, setFiles] = useState([null, null, null, null]);

  const imageLabels = [
    "Цээж зураг /4x3/",
    "Иргэний үнэмлэхний хуулбар",
    "Дипломын хуулбар",
    "Нэмэлт файл",
  ];

  useEffect(() => {
    if (defaultValue.length > 0) {
      setFiles(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (onChange) {
      onChange(files);
    }
  }, [files, onChange]);

  const handleFileChange = (index, e) => {
    const newFiles = [...files];
    newFiles[index] = e.target.files?.[0] || null;
    setFiles(newFiles);
  };

  return (
    <div className="relative p-6 border">
      <h2 className="absolute -top-3 left-2 z-50 bg-white px-4 text-black font-medium uppercase text-lg">
        Цээж зураг, иргэний үнэмлэх, дипломын хуулбар
      </h2>

      <div className="flex flex-wrap gap-4 mt-6">
        {files.map((file, index) => {
          const imageUrl = file
            ? `http://localhost:8000/${file}`
            : file?.preview
            ? file.preview
            : file instanceof File
            ? URL.createObjectURL(file)
            : null;

          return (
            <label
              key={index}
              htmlFor={`image${index}`}
              className="w-32 h-32 rounded-sm bg-slate-500 cursor-pointer flex flex-col items-center justify-center overflow-hidden text-center text-[12px] relative"
            >
              {!readOnly && (
                <input
                  type="file"
                  id={`image${index}`}
                  hidden
                  accept="image/*"
                  onChange={(e) => handleFileChange(index, e)}
                />
              )}

              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={`preview-${index}`}
                  className="object-cover w-full h-full text-white"
                />
              ) : (
                <>
                  <img
                    src="/imageupload.png"
                    alt="upload"
                    width={40}
                    height={40}
                    className="mb-1"
                  />
                  <p className="text-white text-[12px] px-1 w-24">
                    {imageLabels[index]}
                  </p>
                </>
              )}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FilePreview;
