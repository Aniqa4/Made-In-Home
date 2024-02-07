import React from 'react'
import Title from '../../../components/Title'
import BlogCard from '../../../components/BlogCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';

function PopularBlogs() {
    const blogs = Array(15).fill(null)
    return (
        <div>
            <Title title={'Popular Now'} />
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
                    }
                }}

            >
                {
                    blogs.map((x, index) =>
                        <SwiperSlide key={index}>
                            <BlogCard />
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default PopularBlogs