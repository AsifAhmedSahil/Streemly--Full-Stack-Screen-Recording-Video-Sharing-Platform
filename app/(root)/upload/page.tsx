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

  const video = {}
  const thumbnail = {}

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
        <FileInput 
          id="video"
          label="video"
          accept="video/*"
          file={video.file}
          previewUrl = {video.previewUrl}
          inputRef = {video.inputRef}
          onChange={video.handleFileChange}
          onReset = {video.resetFile}
          type="video"
        />
        <FileInput 
          id="thumbnail"
          label="Thumbnail"
          accept="image/*"
          file={thumbnail.file}
          previewUrl = {thumbnail.previewUrl}
          inputRef = {thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset = {thumbnail.resetFile}
          type="image"
        />
        <FormField
          id="visibility"
          label="Visibility"
          value={formData.visibility}
          onChange={handleInputChange}
          placeholder="Select the visibility criteria"
          as="select"
          options={[
            {value:"public",label:"Public"},
            {value:"private",label:"Private"}
          ]}
        />

        
      </form>
    </div>
  );
};

export default page;
