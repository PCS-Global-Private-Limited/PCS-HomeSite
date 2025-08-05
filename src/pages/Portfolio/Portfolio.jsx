import React, { useState } from 'react';

const Portfolio = () => {
  const [selected, setSelected] = useState('All Categories');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ label: '', images: [], index: 0 });

  const categories = [
    'All Categories',
    'MERN',
    'Python',
    'Java',
    'Data Analytics',
    'AI/ML',
  ];

  const images = {
    MERN: ['/mern.webp', '/mean.webp'],
    Python: ['/python.webp'],
    Java: ['/java.webp'],
    'Data Analytics': ['/dataanalytics.webp'],
    'AI/ML': ['/ai-ml.webp'],
  };

  const extraImages = [
    { label: 'IOT', path: '/iot.webp' },
    { label: 'Data Science', path: '/datascience.webp' },
  ];

  const getImagesToShow = () => {
    let result = [];
    if (selected === 'All Categories') {
      result = Object.entries(images).flatMap(([label, paths]) =>
        paths.map((path) => ({ label, path }))
      );
      result.push(...extraImages);
    } else {
      const currentPaths = images[selected]?.map((path) => ({ label: selected, path })) || [];
      if (currentPaths.length > 0) {
        result = [currentPaths[carouselIndex % currentPaths.length]];
      }
    }
    return result;
  };

  const handleNext = () => {
    setCarouselIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + (images[selected]?.length || 1)) % (images[selected]?.length || 1));
  };

  const openModal = (label, paths, index = 0) => {
    setModalContent({ label, images: paths, index });
    setModalOpen(true);
  };

  const navButtonStyle = {
    margin: '10px',
    padding: '8px 16px',
    background: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const showFeaturedProjects = selected === 'All Categories';

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: '30px' }}>PORTFOLIO</h1>

      <div style={{ marginBottom: '40px', flexWrap: 'wrap', display: 'flex', justifyContent: 'center' }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelected(category);
              setCarouselIndex(0);
            }}
            style={{
              margin: '10px',
              padding: '10px 20px',
              backgroundColor: selected === category ? '#3498db' : '#ecf0f1',
              color: selected === category ? 'white' : '#2c3e50',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: '0.3s',
              fontWeight: 'bold',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '60px',
        }}
      >
        {getImagesToShow().map(({ label, path }, index) => (
          <div
            key={`${label}-${index}`}
            style={{
              width: '300px',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'transform 0.3s',
            }}
          >
            <div
              onClick={() => openModal(label, images[label] || [path])}
              style={{ position: 'relative', cursor: 'pointer' }}
            >
              <img
                src={path}
                alt={label}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
                className="hover-zoom"
              />
              <div
                className="overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(41, 98, 255, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '3rem',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                +
              </div>
            </div>
            <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#3498db' }}>{label}</p>

            {selected !== 'All Categories' && images[selected]?.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    background: '#ffffffcc',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    background: '#ffffffcc',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  ›
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {showFeaturedProjects && (
        <>
          <h2 style={{ fontSize: '2.2rem', color: '#2c3e50', marginBottom: '20px' }}>Featured Projects</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            {[{
              title: 'Web Page',
              img: '/webimg1.webp',
              desc: 'A responsive web layout using the MERN stack.',
            }, {
              title: 'Business Card Design',
              img: '/businesscard.webp',
              desc: 'Professional business card design for branding.',
            }, {
              title: 'Flyer Design Project',
              img: '/flyerdesign.webp',
              desc: 'Creative flyer design for digital marketing.',
            }].map(({ title, img, desc }, index) => (
              <div
                key={index}
                style={{
                  width: '280px',
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  textAlign: 'left',
                  marginBottom: '30px',
                  transition: 'transform 0.3s ease',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '200px',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={img}
                    alt={title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    className="hover-zoom"
                  />
                  <div
                    className="overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#555', margin: '10px 0' }}>{desc}</p>
                  <a href="#" style={{ color: '#2962ff', fontWeight: 'bold', fontSize: '0.95rem' }}>
                    See More &rsaquo;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

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
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              width: '100%',
              maxWidth: '600px',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              textAlign: 'center',
            }}
          >
            <h2 style={{ marginBottom: '20px', color: '#2c3e50', fontSize: '1.5rem' }}>
              {modalContent.label}
            </h2>

            <img
              src={modalContent.images[modalContent.index]}
              alt="Modal Content"
              style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
            />

            {/* Title before description */}
            <h3 style={{ marginTop: '18px', color: '#2962ff', fontWeight: 'bold', fontSize: '1.15rem' }}>
              {modalContent.label} Project
            </h3>

            <p style={{ marginTop: '10px', color: '#555', fontSize: '0.95rem' }}>
              This is a description for the <strong>{modalContent.label}</strong> project.
            </p>

            {/* Demo button at the end of description */}
            <a
              href={`https://demo-link-for-${modalContent.label.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '18px',
                background: '#3498db',
                color: 'white',
                padding: '8px 24px',
                border: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'background 0.2s',
              }}
            >
              Demo
            </a>

            {modalContent.images.length > 1 && (
              <div style={{ marginTop: '10px' }}>
                <button
                  onClick={() =>
                    setModalContent((prev) => ({
                      ...prev,
                      index: (prev.index - 1 + prev.images.length) % prev.images.length,
                    }))
                  }
                  style={navButtonStyle}
                >
                  ‹ Prev
                </button>
                <button
                  onClick={() =>
                    setModalContent((prev) => ({
                      ...prev,
                      index: (prev.index + 1) % prev.images.length,
                    }))
                  }
                  style={navButtonStyle}
                >
                  Next ›
                </button>
              </div>
            )}

            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#e74c3c',
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

      <style>
        {`
          .hover-zoom:hover {
            transform: scale(1.05);
          }
          .hover-zoom:hover + .overlay {
            opacity: 1;
          }
          .overlay:hover {
            opacity: 1 !important;
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 2rem !important;
            }
            h2 {
              font-size: 1.3rem !important;
            }
            .overlay {
              font-size: 2rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Portfolio;