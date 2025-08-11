
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";

const reviews = [
  {
    name: "Priya Sharma",
    company: "Co-founder, EduBridge Academy",
    rating: 5,
    text: "Reliable hosting and prompt support! We shifted our legacy system to PCS Global's cloud-hosted infrastructure and the transition was seamless. No downtime, no stress.",
     img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    name: "Abhijit Roy",
    company: "Operations Head, UrbanX Facilities",
    rating: 4.1,
    text: "IoT automation from PCS Global helped us improve operational efficiency. Their custom IoT deployment saved us time, effort, and money. We can now track everything in real time.",
     img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    name: "Shalini Mehta",
    company: "Founder, LegalInnova Pvt. Ltd.",
    rating: 4.7,
    text: "They took care of all our legal headaches. From registering our Pvt. Ltd. company to handling all documentation, PCS Global made our startup journey hassle-free.",
     img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    name: "Sandeep Ghosh",
    company: "Marketing Manager, Finovate Solutions",
    rating: 4.7,
    text: "Amazing digital marketing team! Their content and social media team helped our brand get noticed. We've seen a solid increase in engagement and leads.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  },
  {
    name: "Neha Jain",
    company: "CEO, StartRight Enterprises",
    rating: 5,
    text: "One-stop solution for startups! We used PCS Global for everything—hosting, website, legal registration, and marketing. They guided us like a true business partner.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
  },
];

const logos = [
  // Replaced non-loading logos with reliable Clearbit logo endpoints
  "https://logo.clearbit.com/tumblr.com",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://logo.clearbit.com/nginx.com",
  "https://logo.clearbit.com/upwork.com",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
];

const CustomerRev = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 ]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Customers Review</h2>
        <p className="text-sm text-gray-500">What Our Clients Says About US</p>
        <div className="mt-2 w-10 h-1 bg-pink-600 mx-auto rounded-full" />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {reviews.map((review, index) => {
          return (
            <SwiperSlide key={index} className="h-[100px] my-10" >
              <div
                className={`w-full h-auto max-w-sm mx-auto rounded-xl shadow-xl p-6 flex flex-col justify-between bg-white`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-pink-500"
                  />
                  <div>
                    <h4 className="font-bold text-base">{review.name}</h4>
                    <p className="text-sm opacity-70">{review.company}</p>
                  </div>
                </div>
                <div className="my-3 flex-1">
                  <p className="text-sm italic leading-relaxed">"{review.text}"</p>
                </div>
                <div className="flex items-center text-yellow-500">
                  {[...Array(Math.round(review.rating))].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                  <span className="ml-2 text-sm font-semibold">{review.rating}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex flex-wrap justify-center items-center mt-12 gap-6 px-4">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="brand"
            className="h-8 max-w-[100px] grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerRev;
