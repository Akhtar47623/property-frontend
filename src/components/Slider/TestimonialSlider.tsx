import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: "https://picsum.photos/160/160?random=1",
    name: "Roger Scott",
    role: "Marketing Manager",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: "https://picsum.photos/160/160?random=2",
    name: "Jane Doe",
    role: "Product Designer",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: "https://picsum.photos/160/160?random=3",
    name: "John Smith",
    role: "CEO",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: "https://picsum.photos/160/160?random=4",
    name: "Alice Brown",
    role: "HR Lead",
  },
  {
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: "https://picsum.photos/160/160?random=6",
    name: "Samantha Grey",
    role: "UX Researcher",
  },
];

const TestimonialCard = ({
  text,
  img,
  name,
  role,
}: {
  text: string;
  img: string;
  name: string;
  role: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md h-full w-full mb-12">
    <p className="!text-gray-500 mb-4 !leading-8 !text-[16px]">{text}</p>
    <div className="flex items-center  gap-4">
      <img
        src={img}
        alt={name}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="leading-10">
        <p className="font-semibold text-gray-900">{name}</p>
        <span className="text text-gray-400">{role}</span>
      </div>
    </div>
  </div>
);

const TestimonialSlider = () => (
  <div className="w-full xl:max-w-[65%] mx-auto px-5 xl:px-2 py-10">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerGroup={1}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: { slidesPerView: 1 }, // Mobile (one card)
        768: { slidesPerView: 2 }, // Tablet
        1024: { slidesPerView: 3 }, // Desktop
      }}
    >
      {testimonials.map((t, idx) => (
        <SwiperSlide key={idx}>
          <TestimonialCard {...t} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default TestimonialSlider;
