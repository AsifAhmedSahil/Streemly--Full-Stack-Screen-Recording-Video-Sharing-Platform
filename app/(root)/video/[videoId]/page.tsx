import VideoDetailsHeader from "@/Components/VideoDetailsHeader";
import VideoPlayer from "@/Components/VideoPlayer";
import { getVideoById } from "@/lib/actions/video";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: Params) => {
  const { videoId } = await params;

  const { user, video } = await getVideoById(videoId);

  if (!video) redirect("/404");

  return (
    <main className="wrapper page">
     <VideoDetailsHeader {...video} userImg={user?.image} ownerId={video?.userId} username={user?.name}/>

      <section className="video-details">
        <div className="content">
          <VideoPlayer videoId={video.videoId} />
        </div>
      </section>
    </main>
  );
};

export default page;
