import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', desc: '', demo: '', images: [] });

  const projects = [
    {
      title: 'PCS Global',
      category: 'MERN',
      desc: 'This is a full-stack application built with MongoDB, Express.js, React, and Node.js.',
      demo: 'https://pcsgpl.com/',
      images: ['/pcsgpl.com_.webp', '/pcsgpl.com_1.webp', '/pcsgpl.com_2.webp', '/pcsgpl.com_4.webp'],
    },
    {
      title: 'PCS Cloud Labs',
      category: 'Java',
      desc: 'Cloud-based labs for hands-on learning in all Kinds of Technology Purchasing and Learning them through our Platform.',
      demo: 'https://pcscloudlabs.com/index.jsp',
      images: ['/pcscloudlabs.com1.webp', '/pcscloudlabs.com2.webp', '/pcscloudlabs.com3.webp', '/pcscloudlabs.com4.webp'],
    },
    {
      title: 'PCS Employee Management',
      category: 'Java',
      desc: 'A comprehensive employee management system built with Java.',
      demo: 'https://pcshr.pcsgpl.com/',
      images: ['/pcsgpl1.webp', '/pcsgpl2.webp', '/pcsgpl3.webp'],
    },
       {
      title: 'Python Project',
      category: 'Python',
      desc: 'Automation and backend services built with Python.',
      demo: 'https://demo-python.com',
      images: ['/python.webp'],
    },
    {
      title: 'Data science Project',
      category: 'Data Analytics',
      desc: 'Visual dashboards and insights using analytics tools.',
      demo: 'https://demo-analytics.com',
      images: ['/datascience.webp'],
    },
    {
      title: 'AI/ML Project',
      category: 'AI/ML',
      desc: 'AI-powered solutions for predictive analytics.',
      demo: 'https://demo-ai.com',
      images: ['/aiml.webp'],
    },
    {
      title: 'IoT Project',
      category: 'IoT',
      desc: 'Creative IoT.',
      demo: 'https://demo-flyer.com',
      images: ['/iot.webp'],
    },
  ];

  const categories = ['All Categories', ...new Set(projects.map(p => p.category))];

  const filteredProjects =
    selectedCategory === 'All Categories'
      ? projects
      : projects.filter(p => p.category === selectedCategory);

  const openModal = (project) => {
    setModalContent(project);
    setModalOpen(true);
  };

  const cardStyle = {
    width: '300px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    overflow: 'hidden',
    cursor: 'pointer',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease',
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: '30px' }}>PORTFOLIO</h1>


      <div style={{ marginBottom: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '10px 20px',
              backgroundColor: selectedCategory === cat ? '#3498db' : '#ecf0f1',
              color: selectedCategory === cat ? 'white' : '#2c3e50',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: '0.3s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

   
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {filteredProjects.map((project, idx) => (
          <div key={idx} style={cardStyle} onClick={() => openModal(project)}>
            <img
              src={project.images[0]}
              alt={project.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '16px', textAlign: 'left' }}>
              <h3 style={{ color: '#3498db', fontWeight: 'bold' }}>{project.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>{project.desc}</p>
            
            </div>
          </div>
        ))}
      </div>

    
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            padding: '10px',
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '100%',
              maxWidth: '600px',
              maxHeight: '90vh',
              overflowY: 'auto',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <h2 style={{ marginBottom: '20px', color: '#2c3e50', fontSize: '1.5rem' }}>
              {modalContent.title}
            </h2>

            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {modalContent.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${modalContent.title} ${i + 1}`}
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <p style={{ marginTop: '10px', color: '#555', fontSize: '0.95rem' }}>
              {modalContent.desc}
            </p>

            <a
              href={modalContent.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '18px',
                background: '#3498db',
                color: 'white',
                padding: '8px 24px',
                borderRadius: '5px',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              Demo
            </a>

         

            
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'blue',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
