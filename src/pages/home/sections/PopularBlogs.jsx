import { useEffect, useState } from "react";
import Title from "../../../components/Title";
import BlogCard from "../../../components/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import axios from "axios";

function PopularBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/blogs`)
      .then((response) => {
        setBlogs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(blogs);

  return (
    <div>
      <Title title={"Popular Now"} />
      <Swiper
        modules={[EffectFade, Autoplay]}
        slidesPerView={1.2}
        spaceBetween={10}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          321: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          540: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          1201: {
            slidesPerView: 4.2,
            spaceBetween: 10,
          },
          1921: {
            slidesPerView: 4.2,
            spaceBetween: 10,
          },
        }}
      >
        {blogs.map((x, index) => (
          <SwiperSlide key={index}>
            <BlogCard
              blogTitle={x.blogTitle}
              nameOfWriter={x.nameOfWriter}
              description={x.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PopularBlogs;
