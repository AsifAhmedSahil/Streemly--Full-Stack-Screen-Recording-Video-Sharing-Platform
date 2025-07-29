"use client";
import { daysAgo } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa6";
import { ImCheckboxChecked } from "react-icons/im";

const VideoDetailsHeader = ({
  title,
  createdAt,
  userImg,
  username,
  ownerId,
  thumbnailUrl,
  videoId,
  visibility,
  id
}: VideoDetailHeaderProps) => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/video/${id}`);

    setCopied(true);
  };

  useEffect(()=>{
    const changeChecked = setTimeout(() => {
        if(copied) setCopied(false)
    }, 2000);

    return () => clearTimeout(changeChecked)
  },[copied])
  return (
    <header className="detail-header">
      <aside className="user-info">
        <h1>{title}</h1>
        <figure>
          <button onClick={() => router.push(`/profile/${ownerId}`)}>
            <Image
              src={userImg || ""}
              alt="user"
              width={24}
              height={24}
              className="rounded-full"
            />
            <h2>{username ?? "Guest"}</h2>
          </button>
          <figcaption>
            <span className="mt-1">-</span>
            <p>{daysAgo(createdAt)}</p>
          </figcaption>
        </figure>
      </aside>

      <aside className="cta">
        <button onClick={handleCopyLink}>
          {copied ? <ImCheckboxChecked /> : <FaLink />}
        </button>
      </aside>
    </header>
  );
};

export default VideoDetailsHeader;
