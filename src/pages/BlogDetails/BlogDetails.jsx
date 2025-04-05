import { useState } from "react";
import UserAvatar from "../../components/UserAvatar";
import { MdFavorite } from "react-icons/md";
import { TiEye } from "react-icons/ti";
import { BsDot } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import FetchData from "../../api/fetchData";
import { HiOutlineSaveAs } from "react-icons/hi";

function BlogDetails() {
  const [defaultImage, setDefaultImage] = useState(false);
  const params = useParams();
  const { data: blogDetails } = FetchData(`blogs/${params?.id}`);

  return (
    <div className="container mx-auto pt-10">
      <div className=" fixed left-0 right-0 top-0 bg-white z-20 shadow">
        <Navbar />
      </div>
      <div className="pt-16">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <p className=" text-3xl font-semibold">{blogDetails?.blogTitle}</p>
            <Link to="/user">
              <div className="flex items-center gap-2 py-5">
                <img
                  src=""
                  alt="User Image"
                  onError={() => setDefaultImage(true)}
                  className={defaultImage ? "hidden" : "rounded-full w-8 h-8"}
                />
                {defaultImage && <UserAvatar />}
                <p className="font-semibold cursor-pointer hover:text-blue-400">
                  {blogDetails.nameOfWriter}
                </p>
              </div>
            </Link>
            <p>
              Category:{" "}
              <span className=" font-medium">{blogDetails?.categoryName}</span>
            </p>
            <p>
              Posted on: <span className=" font-medium"> 20th January 2024</span>
            </p>
            <div className="flex items-center gap-5 py-5">
              <p className="flex gap-1 items-center">
                <TiEye /> {blogDetails.views}
              </p>
              <BsDot />
              <p className="flex gap-1 items-center">
                <MdFavorite /> {blogDetails.likes}
              </p>
              <BsDot />
              <p className="flex gap-1 items-center">
                <HiOutlineSaveAs /> {blogDetails.saved}
              </p>
            </div>
            <div className="flex gap-3">
              <p className="border border-[#1c1b1b] text-center rounded py-1 px-5">
                Like
              </p>
              {/*     <p className='border bg-[#1c1b1b] text-white text-center rounded py-1 px-5'>Liked</p> */}
              <p className="border border-[#1c1b1b] text-center rounded py-1 px-5">
                Save
              </p>
              {/*    <p className='border bg-[#1c1b1b] text-white text-center rounded py-1 px-5'>Saved</p> */}
              <p className="border border-[#1c1b1b] text-center rounded py-1 px-5">
                Share
              </p>
              {/*     <p className='border bg-[#1c1b1b] text-white text-center rounded py-1 px-5'>Shared</p> */}
            </div>
          </div>
          <img
            src="https://www.lightstalking.com/wp-content/uploads/backlit-beach-color-258109-3-1024x576.jpg"
            alt="cover photo"
          />
        </div>
        <div className="py-10 flex gap-10 ">
          <div className="border rounded-xl p-10">
            <p className="font-semibold text-xl">Ingredients</p>
            <ol className=" list-inside list-disc py-3">
              {blogDetails?.ingredients?.map((x, index) => (
                <li key={index}>{x}</li>
              ))}
            </ol>
          </div>
          <div className="border rounded-xl p-10 w-full">
            <h1 className=" text-xl font-semibold pb-3">Recipe:</h1>
            <p className=" text-justify">{blogDetails.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
