import EmptyState from "@/Components/EmptyState";
import Header from "@/Components/Header";
import VideoCard from "@/Components/VideoCard";
import { dummyCards } from "@/constants";
import { getAllVideos } from "@/lib/actions/video";
import React from "react";
import { CiVideoOn } from "react-icons/ci";

const Page = async ({ searchParams }: SearchParams) => {
  const { query, filter, page } = await searchParams;

  const { videos, pagination } = await getAllVideos(
    query,
    filter,
    Number(page) || 1
  );

  console.log(videos);

  return (
    <div className="wrapper page">
      <Header subHeader="Public Library" title="All Videos" />

      {videos?.length > 0 ? (
        <section className="video-grid">
          {videos.map(({ video,user })=>(
            <VideoCard key={video.id} 
            {...video}
            thumbnail={video.thumbnailUrl}
            userImg={user?.image || ""}
            username={user?.name || ""}
            />

          ))}
          </section>
      ) : (
        <EmptyState
          icon={<CiVideoOn size={46} />}
          title="No Videos"
          description="Please upload a video to get started."
        />
      )}
    </div>
  );
};

export default Page;
