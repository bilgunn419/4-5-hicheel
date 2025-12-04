import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from "../assets/data/data.jsx";
const Testimonials = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold ">What our happy client say</h1>
        <p className="text-gray-700">
          Things that make it the best place to start trading
        </p>
      </div>
      {/* Swiper */}
      <div className="mt-16">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          //   breakpoints={{
          //     0: {
          //       slidesPerView: 1,
          //     },
          //     768: {
          //       slidesPerView: 2,
          //     },
          //     1024: {
          //       slidesPerView: 3,
          //     },
          //   }}
          className="testmonials-swiper"
        >
          {testimonials.map((items,) => (
            <SwiperSlide key={items.id}>
              <div className="flex flex-col items-center gap-4">
                <img className="rounded-full" src={items.image} alt="" />
                <h2 className="text-xl font-bold">{items.name}</h2>
                <p className="text-center">{items.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* custom button */}
      <div className="mt-16 mb-12 flex justify-center gap-4">
        <button class=" w-12 h-12 swiper-button-prev-custom rounded-full border border-gray-200 flex justify-center items-center text-gray-800 hover:text-gray-500">
          <FaChevronLeft className="w-8 h-8" />
        </button>
        <button class=" w-12 h-12 swiper-button-next-custom rounded-full border border-gray-200 flex justify-center items-center text-gray-800 hover:text-gray-500">
          <FaChevronRight className="w-8 h-8" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 p-15 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-5 mx-8">
           <div className="text-white">
        <h3 className="text-2xl font-semibold">Subcribe newsletter</h3>
        <p className="text-sm opacity-90">
          Best cooks and best delivery guys all at your service. Hot tasty food
        </p>
      </div>
      <div className="flex">
  <input
    type="email"
    placeholder="Enter your email address"
    className="px-4 py-2 rounded-l-lg border text-black bg-white"
  />
  <button className="px-5 py-2 bg-green-600 text-white rounded-r-lg border">
    Discover →
  </button>
</div>
      </div>
    </div>
  );
};

export default Testimonials;