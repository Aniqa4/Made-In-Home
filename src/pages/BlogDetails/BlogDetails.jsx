import { useState } from "react";
import UserAvatar from "../../components/UserAvatar";
import { MdFavorite } from "react-icons/md";
import { TiEye } from "react-icons/ti";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function BlogDetails() {
  const [defaultImage, setDefaultImage] = useState(false);

  return (
    <div className="container mx-auto pt-10">
      <div className=" fixed left-0 right-0 top-0 bg-white z-20 shadow">
        <Navbar />
      </div>
      <div className="pt-16">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <p className=" text-3xl font-semibold">Title of the Blog</p>
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
                  Name of the writer
                </p>
              </div>
            </Link>
            <p>Category: Name of the Category</p>
            <p>Posted on: 20th January 2024</p>
            <div className="flex items-center gap-5 py-5">
              <p className="flex gap-1 items-center">
                <TiEye /> 1M
              </p>
              <BsDot />
              <p className="flex gap-1 items-center">
                <MdFavorite /> 1K
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
            <ol className=" list-inside list-disc">
              <li>Suger</li>
              <li>Suger</li>
              <li>Suger</li>
              <li>Suger</li>
              <li>Suger</li>
            </ol>
          </div>
          <div className="border rounded-xl p-10">
            <h1 className=" text-xl font-semibold">Procedure:</h1>
            <p className=" text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              nesciunt, at iure, tempore a architecto voluptas illo distinctio
              voluptatem suscipit fuga culpa ipsam, quod quasi commodi nemo enim
              placeat hic. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consequatur, minima eius explicabo enim quisquam nulla nemo
              nesciunt molestiae eos quidem. Ad aliquid fugiat impedit accusamus
              atque fuga minima at dolor. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus, sint nihil quam, omnis magnam,
              tempora quos ad excepturi aliquid alias nemo inventore! Molestias,
              fugit animi. Distinctio, et facilis. Ea, dolores? Repellat
              officiis eaque repellendus ex, magni esse est beatae dolore, quasi
              quae autem labore suscipit iusto pariatur laboriosam minima ad
              optio ea corrupti sit tempora aliquam? Blanditiis laudantium
              magnam reiciendis. Voluptate repellat ipsum possimus, quo labore
              eum est, autem quidem nihil in ipsa voluptatem animi quisquam,
              quis recusandae cumque ab accusantium ullam illum tenetur non
              libero! Aperiam magni in error. Enim at vitae nisi illo eius
              beatae molestiae aliquid sapiente. Ea modi quas, laudantium
              quaerat esse, et harum enim, recusandae voluptates magnam
              molestias minima mollitia ipsam! Reprehenderit vitae quam totam.
              Molestiae ipsa, autem voluptatum, ipsam accusantium iusto at
              mollitia placeat magnam, obcaecati velit. Ex consectetur earum
              labore ea sint est qui quis deserunt natus recusandae? Suscipit et
              esse veritatis reiciendis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
