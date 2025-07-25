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
        <figure onClick={()=>inputRef.current?.click() 
        }>
          
          <MdOutlineFileUpload size={24} />
          <p>Click to upload your {id}</p>
        </figure>
      ) : (
        <div>
          {type === "video" ? (
            <video src={previewUrl} controls />
          ) : (
            <Image
              src={previewUrl}
              alt="
                preview"
              fill
            />
          )}
          <button type="button" onClick={onReset}>
            <IoIosCloseCircleOutline size={20} />
          </button>
          <p>{file?.name}</p>
        </div>
      )}
    </section>
  );
};

export default FileInput;
