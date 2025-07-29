import EmptyState from "@/Components/EmptyState";
import Header from "@/Components/Header";
import VideoCard from "@/Components/VideoCard";
import { getAllVideosByUser } from "@/lib/actions/video";
import { redirect } from "next/navigation";
import { CiVideoOn } from "react-icons/ci";

const page = async ({ params, searchParams }: ParamsWithSearch) => {
  const { id } = await params;
  const { query, filter } = await searchParams;

  console.log("id",id)

  const { user, videos } = await getAllVideosByUser(id,  query,filter);

  console.log(user,id,"isuser")

  if (!user) redirect("/404");

  return (
    <div className="wrapper page">
      <Header
        subHeader={user?.email}
        title={user?.name}
        userImg={user?.image ?? ""}
      />

      {videos?.length > 0 ? (
        <section className="video-grid">
          {videos.map(({ video, user }) => (
            <VideoCard
              key={video.id}
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
          title="No Videos avaiable yet"
          description="Videos will shows up when you upload"
        />
      )}
    </div>
  );
};

export default page;
