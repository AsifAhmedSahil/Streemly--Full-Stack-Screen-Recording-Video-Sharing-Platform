import Image from "next/image";
import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

const FileInput = ({
  id,
  label,
  accept,
  file,
  previewUrl,
  inputRef,
  onChange,
  onReset,
  type,
}: FileInputProps) => {
  return (
    <section className="file-input">
      <label htmlFor={id}>{label}</label>

      <input
        type="file"
        id={id}
        accept={accept}
        ref={inputRef}
        hidden
        onChange={onChange}
      />

      {!previewUrl ? (
        <figure onClick={() => inputRef.current?.click()}>
          <MdOutlineFileUpload size={24} />
          <p>Click to upload your {id}</p>
        </figure>
      ) : (
        <div className="relative w-full max-w-md">
          {type === "video" ? (
            <video
              key={previewUrl}
              src={previewUrl}
              controls
              className="w-full max-h-64 rounded-md"
            />
          ) : (
            <Image
              key={previewUrl}
              src={previewUrl}
              alt="preview"
              fill
              className="object-contain rounded-md"
            />
          )}
          <button
            type="button"
            onClick={onReset}
            className="absolute top-1 right-1 text-red-600 bg-white rounded-full"
          >
            <IoIosCloseCircleOutline size={20} />
          </button>
          <p className="mt-2 text-sm text-gray-700">{file?.name}</p>
        </div>
      )}
    </section>
  );
};

export default FileInput;
