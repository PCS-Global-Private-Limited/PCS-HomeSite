import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'; // <-- add useLocation
import Logo from './logo.webp';
import {
  FiMenu,
  FiX,
  FiMapPin,
  FiHelpCircle,
  FiMail,
} from 'react-icons/fi'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownTimeout = useRef(null); // useRef for stable timeout
  const location = useLocation(); // <-- get current route

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if on home page
  const isHome = location.pathname === '/';

  // Determine color mode
  const isDark = isHome ? !scrolled : false; // true = white text/icons, false = black

  // Menu items for mapping
  const menuItems = [
    {
      title: 'Services',
      links: [
        { to: '/enterprise-web-solutions', text: 'Enterprise Web Solutions' },
        { to: '/branding-design-solutions', text: 'Branding & Design' },
        { to: '/marketing-solutions', text: 'Marketing & Strategy' },
      ],
    },
    {
      title: 'About',
      links: [
        { to: '/about', text: 'Company' },
        { to: '/our-history', text: 'Team' },
        { to: '/about-careers', text: 'Careers' },
      ],
    },
    {
      title: 'Projects',
      links: [
        { to: '/our-knowledge', text: 'Our Knowledge' },
        { to: '/portfolio', text: 'Portfolio' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { to: '/contact', text: 'Contact Form' },
        { to: '/privacypolicy', text: 'Privacy Policy' },
        { to: '/terms-conditions', text: 'Terms & Conditions' },
        { to: '/return-refund', text: 'Return & Refund' },
      ],
    },
  ];

  const handleDropdown = (idx) => {
    if (openDropdown === idx) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(idx);
    }
  };

  // Shared handlers for dropdown mouse events
  const handleDropdownMouseEnter = (idx) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(idx);
  };

  const handleDropdownMouseLeave = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 10000); // 1 second
  };

  return (
    <div className={`header-container ${scrolled ? 'scrolled' : 'transparent'}${!isHome ? ' always-dark' : ''}`}>
  
      <div className="left-section">
        <div className="logo-and-toggle">
          <div className="logo-container">
            <img
              src={Logo}
              alt="PCS Global Logo"
              className="logo"
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="toggle-button"
            aria-label="Toggle Navigation"
            style={{ color: isDark ? 'white' : '#3b94f8' }}
          >
            {isOpen ? <FiX size={40} /> : <FiMenu size={40} />}
          </button>
        </div>
      </div>

 
      <div className="right-section">
        <div className="info-boxes">
          <div className="info-box">
            <FiMapPin className="info-icon" style={{ color: isDark ? 'white' : '#3b94f8' }} />
            <span style={{ color: isDark ? 'white' : '#313e3b' }}>Merlin Infinite, Sector V, Saltlake, Kolkata, West Bengal</span>
          </div>
          <div className="info-box">
            <FiMail className="info-icon" style={{ color: isDark ? 'white' : '#3b94f8' }} />
            <a href="mailto:support@pcsgpl.com" className="email-link" style={{ color: isDark ? 'white' : '#313e3b' }}>
              <span>support@pcsgpl.com</span>
            </a>
          </div>
          <div className="info-box">
            <FiHelpCircle className="info-icon" style={{ color: isDark ? 'white' : '#3b94f8' }} />
            <span style={{ color: isDark ? 'white' : '#313e3b' }}>Need Help?</span>
          </div>
          <div className="info-box social">
            <a href="https://www.facebook.com/hrpcsglobal/" target="_blank" rel="noopener noreferrer" style={{ color: isDark ? 'white' : '#3b94f8' }}><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/pcs-global-pvt-ltd/" target="_blank" rel="noopener noreferrer" style={{ color: isDark ? 'white' : '#3b94f8' }}><FaLinkedin /></a>
            <a href="https://www.instagram.com/pcsglobalpvtltd/" target="_blank" rel="noopener noreferrer" style={{ color: isDark ? 'white' : '#3b94f8' }}><FaInstagram /></a>
          </div>
        </div>

       <div className="nav-links-wrapper">
        <div className="nav-links-bg"></div> 

        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <div className="nav-item">
            <Link to="/"><p>Home</p></Link>
          </div>
          {menuItems.map((item, idx) => (
            <div className="nav-item" key={idx}>
              <ul className="desktop-menu-category-list">
                <li
                  className={`menu-category${openDropdown === idx ? ' open' : ''}`}
                  onClick={() => window.innerWidth < 768 && handleDropdown(idx)}
                  onMouseEnter={() => handleDropdownMouseEnter(idx)}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <a href="#" className="menu-title">{item.title}</a>
                  <div
                    className="dropdown-panel"
                    onMouseEnter={() => handleDropdownMouseEnter(idx)}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="downpannel_content">
                      <div className="dropdown-panel-list">
                        <div className="item">
                          <div className="dropdown_menu-title">
                            {item.links.map((link, linkIdx) => (
                              <Link to={link.to} key={linkIdx}><p>{link.text}</p></Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
          <div className="nav-item">
            <a
              href="https://sales.pcsgpl.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: isDark ? 'white' : '', textDecoration: 'none' }}
            >
              <p>Sign Up</p>
            </a>
          </div>
        </div>
       </div>

      </div>
    </div>
  )
}

export default Header;