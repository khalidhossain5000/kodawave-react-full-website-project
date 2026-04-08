/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Title from "../../Shared/Title/Title";

const testimonialData = [
  {
    name: "Alexander Wright",
    role: "CEO of TechFlow",
    review:
      "PixelGrow transformed our outdated platform into a high-performance MERN application. The attention to detail in UI/UX and the smooth Framer Motion animations are simply world-class.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    bgColor: "bg-[#fff5f5]",
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Director at Nexa",
    review:
      "The SEO results we got from Khalid were phenomenal. Our organic traffic increased by 150% in just three months. Professional, fast, and highly skilled in modern web tech.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    bgColor: "bg-[#ebfdfe]",
  },
  {
    name: "David Chen",
    role: "Founder of VillaX",
    review:
      "Building our room booking platform with PixelGrow was the best decision. The Stripe integration is flawless and the dashboard is incredibly intuitive. A true Full stack expert.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    bgColor: "bg-[#f4f2fe]",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    review:
      "The 3D motion elements added to our landing page created a massive engagement boost. PixelGrow knows how to balance luxury aesthetics with high-speed performance.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    bgColor: "bg-[#fff5f5]",
  },
];

const Testimonial = () => {
  return (
    <section className="py-22 px-6 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4"
        >
          Testimonials
        </motion.h4>

        <Title title={"What Our"} highlightedWord={"Clients Say"} />
      </div>

      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="pb-20 testimonial-swiper"
        >
          {testimonialData.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={`p-10 rounded-[40px] ${item.bgColor} border border-white/50 h-full flex flex-col justify-between shadow-sm relative overflow-hidden`}
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="absolute top-8 right-8 text-indigo-200 text-5xl opacity-40" />

                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-orange-400 text-sm" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-lg italic leading-relaxed mb-8 relative z-10">
                    "{item.review}"
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-slate-200/50 pt-6">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-slate-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styles for Swiper Dots */}
      <style jsx="true">{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #6366f1;
          width: 12px;
          height: 12px;
          opacity: 0.3;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .testimonial-swiper {
          padding-bottom: 60px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
