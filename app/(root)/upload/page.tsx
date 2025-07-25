"use client";
import FileInput from "@/Components/FileInput";
import FormField from "@/Components/FormField";
import React, { ChangeEvent, useState } from "react";

const page = () => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "public",
  });

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a video</h1>
      {error && <div className="error-field">{error}</div>}

      <form className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5">
        <FormField
          id="title"
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter a clear and concise video title"
        />
        <FormField
          id="description"
          label="Description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe what is the video about"
          as="textarea"
        />

        <FileInput />
      </form>
    </div>
  );
};

export default page;
