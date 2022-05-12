import React from "react";
import people1 from "../../../images/people1.png";
import people2 from "../../../images/people2.png";
import people3 from "../../../images/people3.png";
import quote from "../../../icons/quote.svg";

// _________swiper slider____________
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Testimonial = () => {
  const testimonials = [
    {
      _id: 1,
      name: "Winson Herry",
      address: "California",
      img: people1,
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
    },
    {
      _id: 2,
      name: "Winson Herry",
      address: "California",
      img: people2,
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
    },
    {
      _id: 3,
      img: people3,
      name: "Winson Herry",
      address: "California",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
    },
    {
      _id: 4,
      img: people2,
      name: "Winson Herry",
      address: "California",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
    },
    {
      _id: 5,
      img: people3,
      name: "Winson Herry",
      address: "California",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
    },
  ];
  return (
    <div
      className="font-serif m-0 md:m-16"
      style={{
        background: `url(${quote})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundSize: "200px ",
      }}
    >
      <div className="text-left pt-8 mx-4 md:mx-0">
        <h3 className="text-secondary font-semibold py-4">Testimonial</h3>
        <h1 className="text-4xl">What Our Patients Says</h1>
      </div>
      {/* _________card info start___________ */}
      {/* _____swiper start______ */}
      <Swiper
        className="mySwiper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 my-16 md:my-32"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={
          (true,
          {
            clickable: true,
          })
        }
        // navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
      >
        {testimonials.map(({ _id, name, address, img, text }) => (
          <SwiperSlide key={_id} className="shadow p-6 text-left rounded-xl">
            <div>
              <p>{text}</p>
            </div>
            <div className="flex items-center content-center pt-6">
              <img
                className="border-4 rounded-full border-secondary"
                src={img}
                alt="testimonial-img"
              />
              <div className="ml-6 flex flex-col">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p>{address}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* ______swiper end_____ */}
    </div>
  );
};

export default Testimonial;
