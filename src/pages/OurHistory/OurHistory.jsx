import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Briefcase, Lightbulb, TrendingUp, Users, Code, Cloud, ChevronRight,
  Database, Coffee, Smartphone, Server, Wifi, FlaskConical, BrainCircuit
} from 'lucide-react'; // Added new icons for specific technologies
import './OurHistory.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Alok from './Alok-Sir.png';
import banner  from './12.jpg'
import office1 from './office1.jpeg'
import office2 from './office2.jpeg'
import office3 from './office3.jpeg'
import office4 from './office4.jpeg'
import office5 from './office5.png'
import office6 from './office6.png'
import Counter from '../../components/Counter/Counter'





const OurHistory = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    );
    gsap.fromTo(heroRef.current.children[0].children[0],
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.5, delay: 0.5, ease: "power4.out" }
    );
    gsap.fromTo(heroRef.current.children[0].children[1],
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1.5, delay: 0.7, ease: "power4.out" }
    );
    gsap.fromTo(heroRef.current.children[0].children[2],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.9, ease: "power3.out" }
    );
    }, []);

  return (
    <div className="our-history-page">
      {/* 1. Banner Image (Single) */}
      <section ref={heroRef} className="relative h-[82vh] flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 h-[82vh] bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-blue-500 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Driving Business Success Through Innovation
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-80 max-w-3xl mx-auto">
            We Empower businesses to achieve success through cutting-edge innovation and smart technology solutions.

          </p>
          <button className="bg-gradient-to-r from-blue-400 to-blue-800 text-white px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 font-bold text-lg flex items-center justify-center mx-auto" onClick={() => navigate('/about')}>
            Explore Our Vision <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* 2. Idea by CEO */}
      <section className="ceo-message">
        <div className="ceo-container">
          <img src={Alok} alt="CEO" />
          <div className="ceo-content">
            <h2>Vision from Our Founder</h2>
            <p className="ceo-subtitle">“Innovation is not just about technology, it's about making lives better.”</p>
            <p>Innovation with Purpose: 
At PCS Global, we believe innovation isn’t just about creating cutting-edge technology, it’s about solving real-world problems and improving lives. Every product we build, every strategy we design, and every solution we deliver is rooted in that belief.
We go beyond code and infrastructure to understand the people behind the processes. By combining deep technical expertise with a human-first approach, we create digital experiences that are intuitive, impactful, and future-ready.
Whether it’s streamlining operations for a growing business, building intelligent systems that learn and adapt, or designing platforms that connect people more meaningfully, our goal remains the same: to make technology that matters.
Because at the heart of true innovation is empathy, and at PCS Global, we’re committed to building a smarter, more connected, and more compassionate digital world.
</p>
          </div>
        </div>
      </section>

      {/* 3. Office Gallery Carousel */}
      <section className="gallery-carousel">
        <h2>Our Journey in Pictures</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={3}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[office1, office2, office3, office4, office5, office6].map((imgSrc, idx) => (
            <SwiperSlide key={idx}>
              <img src={imgSrc} alt={`Office ${idx + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 4. Timeline Section */}
      <section className="company-timeline">
        <h2>Milestones Through the Years</h2>
        <div className="timeline-items">
          { [
            {
              year: 2010,
              desc: "PCS Global started its journey with a Single Telecaller cum receptionist and a single developer in 2010 from a two seated office at Kasba, Kolkata – the Initial name was The Professional Tutors."
            },
            {
              year: 2012,
              desc: "PCS Global started a new journey with its own office at Kasba, Kolkata – the Initial name was The Professional Consultancy Service."
            },
            {
              year: 2014,
              desc: "Promoted to an ISO certified company on 9th April, 2014. Company created head office at Merlin Infinite, Saltlake Sector – V."
            },
            {
              year: 2016,
              desc: "Company Enlisted Ministry of Human Resource Department."
            },
            {
              year: 2019,
              desc: "Company wins First Central Govt. Project www.bopter.gov.in"
            }
          ].map((item, index) => (
            <div className="timeline-box" key={index}>
              <h3>{item.year}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Mission & Vision */}
      <section className="mission-vision">
        <div className="mv-box">
          <h2>Our Mission</h2>
          <p>Our mission is to harness our collective strengths, technical depth, and brand legacy to accelerate growth in our core IT and consulting domains, while exploring complementary areas that expand our impact. We strive to continuously evolve—adapting to emerging technologies, embracing unconventional ideas, and staying ahead of industry trends. With a focus on excellence, agility, and innovation, we empower our clients, partners, and people to thrive in a rapidly changing digital world.</p>
        </div>
        <div className="mv-box">
          <h2>Our Vision</h2>
          <p>Vision PCS Global envisions is to be a globally respected, innovation-driven technology partner. Renowned by trust for our professionalism, integrity, and ability to deliver transformative digital solutions. We aim for seamless embedding internet driven technologies into both enterprise ecosystems and internal operations, creating smart, agile, and future-ready businesses. Guided by strong ethics, a collaborative mindset, and a deep sense of corporate responsibility, we aspire to grow as a regional and global leader in IT services and knowledge solutions.</p>
        </div>
      </section>

      {/* 6. Leadership Quotes */}
      <section className="leadership-quotes">
        <h2>Words from Our Leaders</h2>
        <div className="quote-box">
          <p>“PCS Global, driven by a clear purpose — to build meaningful solutions that serve real people and solve real problems in real time. Our journey is rooted in trust, innovation, and a deep commitment to those we work with.”</p>
          <span>- Abhishek Ghosh, CTO</span>
        </div>
        <div className="quote-box">
          <p>“At PCS Global, operational strength is built on clarity, consistency, and collaboration, aligning strategy with execution to ensure every solution we deliver is scalable, efficient, and future-ready.”</p>
          <span>- Manish Bhattacharjee, COO</span>
        </div>
      </section>

      {/* 7. Global Reach / Stats */}
      <Counter />
    </div>
  );
};

export default OurHistory;
