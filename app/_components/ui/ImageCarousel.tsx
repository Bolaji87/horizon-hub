"use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { images } from "@/app/_lib/data";
// import Container from "./Container";

// function ImageCarousel() {
//   return (
//     <Container className="relative">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={10}
//         slidesPerView={5}
//         navigation={{
//           nextEl: ".custom-next",
//           prevEl: ".custom-prev",
//         }}
//         pagination={{ clickable: true, el: ".custom-pagination" }}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         className="mx-auto w-full rounded-lg"
//       >
//         {images.map((src, key) => (
//           <SwiperSlide key={key}>
//             <div className="h-32 w-40 rounded-2xl bg-white shadow-md transition hover:shadow-lg">
//               <div className="h-full w-full rounded-lg bg-red-500 object-cover py-1 shadow-lg"></div>
//               {/* <div className="custom-pagination mt-4 flex justify-center" /> */}
//             </div>
//           </SwiperSlide>
//         ))}

//         <div className="custom-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-white p-3 shadow-md hover:bg-gray-100">
//           <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
//         </div>

//         <div className="custom-next absolute top-1/2 right-0 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-white p-3 shadow-md hover:bg-gray-100">
//           <ChevronRightIcon className="h-6 w-6 text-gray-700" />
//         </div>
//       </Swiper>
//     </Container>
//   );
// }

// export default ImageCarousel;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "@/app/_lib/data";

function ImageCarousel() {
  return (
    <div className="mx-auto mt-6 w-full max-w-6xl px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="overflow-hidden rounded-lg"
      >
        {images.map((src, key) => (
          <SwiperSlide key={key}>
            <div className="flex h-40 w-full items-center justify-center rounded-xl bg-white p-4 shadow-md transition hover:shadow-lg">
              <img
                src={src}
                alt={`slide ${key + 1}`}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
