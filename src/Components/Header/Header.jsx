import { useEffect, useState } from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa';
import { FaAnglesRight, FaLocationDot } from 'react-icons/fa6';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

// ─── Smooth scroll utility ────────────────────────────────────────────────────
// Scrolls to a hash section with a 100px offset for the sticky header.
// Passing '#' or no hash scrolls back to the very top.
const smoothScroll = (href) => {
  if (!href || href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const target = document.querySelector(href);
  if (target) {
    const HEADER_OFFSET = 100; // adjust if your header height changes
    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const Header = ({ isTopBar, variant }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState('');

  // ─── Navigation data ───────────────────────────────────────────────────────
  const menu = {
    email: 'info@hallelujahkidney.org',
    location: 'Akaki Kality, Addis Ababa, Ethiopia',
    logoUrl: '/assets/img/logo.svg',
    logoLink: '/',
    navItems: [
      { label: 'Home', href: '#home' },
      { label: 'Who We Are', href: '#story' },
      {
        label: 'Our Pillars',
        href: '#pillars',
        subItems: [
          { label: 'Dialysis Subsidies', href: '#dialysis_subsidy' },
          { label: 'Material Support', href: '#office_drive' },
          { label: 'Volunteer Network', href: '#volunteer_hub' },
          { label: 'Corporate Alliances', href: '#partnerships' },
        ],
      },
      { label: 'Strategic Roadmap', href: '#milestones' },
      { label: 'Contact Us', href: '#contact' },
    ],
    btnUrl: '#donate',
    btnText: 'Support Our Mission',
  };

  // ─── Mobile submenu toggle ─────────────────────────────────────────────────
  const handleOpenMobileSubmenu = (index) => {
    setOpenMobileSubmenuIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // ─── Handle nav link click (scroll + close mobile menu) ───────────────────
  const handleNavClick = (e, href) => {
    // Only intercept hash links — let real page links pass through normally
    if (href && href.startsWith('#')) {
      e.preventDefault();
      smoothScroll(href);
    }
    setIsShowMobileMenu(false);
  };

  // ─── Sticky header on scroll ───────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs_gescout_sticky'); // scrolling down — hide
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs_gescout_sticky cs_gescout_show'); // scrolling up — show
      } else {
        setIsSticky(''); // at top
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <header
        className={`cs_site_header cs_style_1 ${
          variant ? variant : ''
        } cs_primary_color cs_sticky_header ${isSticky}`}
      >
        {/* ── Top bar ──────────────────────────────────────────────────────── */}
        {isTopBar && (
          <div className="cs_top_header cs_blue_bg cs_white_color">
            <div className="container">
              <div className="cs_top_header_in">
                <div className="cs_top_header_left">
                  <ul className="cs_header_contact_list cs_mp_0">
                    <li>
                      <i>
                        <FaEnvelope />
                      </i>
                      <Link to={`mailto:${menu.email}`}>{menu.email}</Link>
                    </li>
                    <li>
                      <i>
                        <FaLocationDot />
                      </i>
                      {menu.location}
                    </li>
                  </ul>
                </div>
                <div className="cs_top_header_right">
                  <div className="cs_social_btns cs_style_1">
                    <Link to="/" className="cs_center">
                      <i><FaFacebookF /></i>
                    </Link>
                    <Link to="/" className="cs_center">
                      <i><FaPinterestP /></i>
                    </Link>
                    <Link to="/" className="cs_center">
                      <i><FaTwitter /></i>
                    </Link>
                    <Link to="/" className="cs_center">
                      <i><FaInstagram /></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Main header ──────────────────────────────────────────────────── */}
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">

              {/* Logo */}
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to={menu.logoLink}>
                  <img src={menu.logoUrl} alt="Hallelujah Association Logo" />
                </Link>
              </div>

              {/* Nav + actions */}
              <div className="cs_main_header_right">
                <div className="cs_nav cs_primary_color">
                  <ul className={`cs_nav_list ${isShowMobileMenu ? 'cs_active' : ''}`}>
                    {menu.navItems.map((item, index) => (
                      <li
                        key={index}
                        className={item.subItems ? 'menu-item-has-children' : ''}
                      >
                        {/* Main nav link */}
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                        >
                          {item.label}
                        </a>

                        {/* Dropdown sub-menu */}
                        {item.subItems && (
                          <ul
                            style={{
                              display: openMobileSubmenuIndex.includes(index)
                                ? 'block'
                                : '',
                            }}
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href={subItem.href}
                                  onClick={(e) => handleNavClick(e, subItem.href)}
                                >
                                  {subItem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Mobile dropdown toggle arrow */}
                        {item.subItems?.length > 0 && (
                          <span
                            className={`cs_menu_dropdown_toggle ${
                              openMobileSubmenuIndex.includes(index) ? 'active' : ''
                            }`}
                            onClick={() => handleOpenMobileSubmenu(index)}
                          >
                            <span></span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Hamburger */}
                  <span
                    className={`cs_menu_toggle ${isShowMobileMenu ? 'cs_toggle_active' : ''}`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>

                {/* Search */}
                <div className="cs_search_wrap">
                  <div
                    className="cs_search_toggle cs_center"
                    onClick={() => setIsSearchActive(!isSearchActive)}
                  >
                    <i><HiMiniMagnifyingGlass /></i>
                  </div>
                  <form
                    action="#"
                    className={`cs_header_search_form ${isSearchActive ? 'active' : ''}`}
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="cs_header_search_form_in">
                      <input
                        type="text"
                        placeholder="Search updates..."
                        className="cs_header_search_field"
                      />
                      <button className="cs_header_submit_btn">
                        <i><HiMiniMagnifyingGlass /></i>
                      </button>
                    </div>
                  </form>
                </div>

                {/* CTA button */}
                <a
                  href={menu.btnUrl}
                  className="cs_btn cs_style_1 cs_color_1"
                  onClick={(e) => handleNavClick(e, menu.btnUrl)}
                >
                  <span>{menu.btnText}</span>
                  <i><FaAnglesRight /></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative shape for cs_type_1 variant */}
        {variant === 'cs_type_1' && (
          <div className="cs_main_header_shape">
            <svg
              width={1679}
              height={112}
              viewBox="0 0 1679 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0L1679 0.014C1679 0.014 1639 23.128 1639 48.261V111.014H40V47.351C40 22.567 0 0 0 0Z"
                fill="#2EA6F7"
              />
              <path
                d="M10 0L1669 0.014C1669 0.014 1629 23.128 1629 48.261V111.014H50V47.351C50 22.567 10 0 10 0Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </header>

      {/* Spacing placeholder when top bar is visible */}
      {isTopBar && <div className="cs_site_header_spacing_150" />}
    </>
  );
};

export default Header;