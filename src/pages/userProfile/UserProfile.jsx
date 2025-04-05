
import Navbar from "../../components/Navbar";
import BlogCard from "../../components/BlogCard";
import Following from "./Following";

function UserProfile() {
  return (
    <div className="container mx-auto">
      <div className=" fixed left-0 right-0 top-0 bg-white z-20 shadow">
        <Navbar />
      </div>
      <div className="py-16">
        <div className="relative">
          <img
            src="https://www.lightstalking.com/wp-content/uploads/backlit-beach-color-258109-3-1024x576.jpg"
            alt="cover photo"
            className=" w-full h-96 rounded-b-xl"
          />
          <div className=" absolute left-10 -bottom-[25%]">
            <img
              src="https://instacaptionsforall.in/wp-content/uploads/2023/12/converted_52-1024x1024.jpg"
              alt="dp"
              className=" w-48 rounded-full"
            />
          </div>
        </div>
        <div className="ps-60 py-5 flex justify-between">
          <p className="text-xl font-semibold">Name</p>
          <div className="flex items-center gap-5">
            <p>100 Followers</p>
            <Following />
            <button className="bg-[#1c1b1b] text-white px-5 rounded py-1">
              Follow
            </button>
            <button className="bg-[#1c1b1b] text-white px-5 rounded py-1">
              Message
            </button>
          </div>
        </div>
      </div>
      <div className="border p-5">
        <h1 className="pb-5 uppercase">Blogs</h1>
        <div className="grid grid-cols-5 gap-5">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
