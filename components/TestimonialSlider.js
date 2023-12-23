// testimonial data
const testimonialData = [
  {
    image: "/testi1.png",
    name: "Anne Dely",
    position: "Assistant Manager",
    message:
      "I have worked with him 2 times and have been pleased each time. He knows what kind of website I wanted to make.",
  },
  {
    image: "/testi2.png",
    name: "Jack Smith",
    position: "Blogger",
    message:
      "I am interested in your work and will give you work if necessary.",
  },
  {
    image: "/testi3.png",
    name: "Maisha Harley",
    position: "Manager",
    message: "Any one can work with shakib, he really does a great job.",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// icons
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[320px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-5 h-full px-28">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image
                      className="rounded-full"
                      src={person.image}
                      width={100}
                      height={80}
                      alt=""
                    />
                  </div>
                  {/* name */}
                  <div className="text-md">{person.name}</div>
                  {/* position */}
                  <div className="text-[10px] mb-2 uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>

              {/* quote & message */}
              <div className="bg-pink-500/10 flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[160px] relative xl:pl-20">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-3xl xl:text-5xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-md text-center md:text-left text-white/50">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
