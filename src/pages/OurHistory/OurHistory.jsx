import React from 'react';
import './OurHistory.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Alok from './Alok-Sir.png'; // Ensure this image is in the correct path
import banner  from './banner.png'

const OurHistory = () => {
  return (
    <div className="our-history-page">
      {/* 1. Banner Image (Single) */}
      <section className="banner-carousel">
        <img
          src={banner}
          alt="Technology Stack Banner"
        />
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
        <Swiper modules={[Autoplay]} autoplay={{ delay: 2000 }} spaceBetween={20} slidesPerView={3} loop>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <SwiperSlide key={n}>
              <img src={`https://via.placeholder.com/300x200?text=Office+${n}`} alt={`Office ${n}`} />
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
      <section className="global-reach">
        <h2>Our Global Presence</h2>
        <div className="stats-container">
          <div className="stat-box"><h3>12+</h3><p>Years in Business</p></div>
          <div className="stat-box"><h3>25+</h3><p>Countries Served</p></div>
          <div className="stat-box"><h3>100+</h3><p>Corporate Clients</p></div>
          <div className="stat-box"><h3>500+</h3><p>Projects Delivered</p></div>
        </div>
      </section>
    </div>
  );
};

export default OurHistory;
