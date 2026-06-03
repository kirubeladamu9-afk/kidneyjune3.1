import { BsTwitter } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPinterestP,
  FaRegClock,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  const data = {
    backgroundImage: '/assets/img/footer_bg.jpg',
    logo: '/assets/img/footer_logo.svg',
    contactText:
      'Association Core Hours: <br /> Mon - Fri: 8:30 am. - 5:30 pm.',
    contactText2: 'Akaki Kality Sub-City, Central Office, Addis Ababa, Ethiopia.',
    contactText3: '+251 911 000 000', // Update with actual phone number when available
    facebookHref: '/',
    pinterestHref: '/',
    twitterHref: '/',
    instagramHref: '/',
    widgets: [
      {
        title: 'Core Framework',
        links: [
          { href: '#dialysis_subsidy', text: 'Dialysis Subsidies' },
          { href: '#office_drive', text: 'Material Support' },
          { href: '#volunteer_hub', text: 'Volunteer Network' },
          { href: '#partnerships', text: 'Corporate Alliances' },
          { href: '#preventative_health', text: 'Preventative Advocacy' },
        ],
      },
      {
        title: 'Quick Links',
        links: [
          { href: '/', text: 'Home Portal' },
          { href: '#story', text: 'Who We Are' },
          { href: '#pillars', text: 'Our Pillars' },
          { href: '#milestones', text: 'Strategic Roadmap' },
          { href: '#donate', text: 'Resource Mobilization' },
        ],
      },
    ],
    recentPosts: [
      {
        href: '/blog/patient-protocols',
        image: '/assets/img/recent_post_1.png',
        date: '02 Jun 2026',
        title: 'Standardizing Patient Registration Criteria for Transparency',
      },
      {
        href: '/blog/infrastructure-mobilization',
        image: '/assets/img/recent_post_2.png',
        date: '28 May 2026',
        title: 'Launching the Administrative Hub Equipment Drive',
      },
    ],
    copyrightText: 'Copyright © 2026 Hallelujah Kidney Patients Association. All Rights Reserved.',
    footerMenu: [
      { href: '#story', text: 'About Us' },
      { href: '#milestones', text: 'Roadmap' },
      { href: '#blog', text: 'Newsroom' },
      { href: '#donate', text: 'Donate Us' },
    ],
  };

  return (
    <footer
      className="cs_footer cs_blue_bg cs_bg_filed cs_white_color"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_highlight_col cs_accent_bg">
              <div className="cs_footer_logo">
                <img src={data.logo} alt="Hallelujah Association Logo" />
              </div>
              <ul className="cs_footer_contact cs_mp_0">
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaRegClock />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaLocationDot />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText2 }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FaPhoneAlt />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText3 }}
                  />
                </li>
              </ul>
              <div className="cs_social_btns cs_style_1">
                <Link to={data.facebookHref} className="cs_center">
                  <i>
                    <FaFacebookF />
                  </i>
                </Link>
                <Link to={data.pinterestHref} className="cs_center">
                  <i>
                    <FaPinterestP />
                  </i>
                </Link>
                <Link to={data.twitterHref} className="cs_center">
                  <i>
                    <BsTwitter />
                  </i>
                </Link>
                <Link to={data.instagramHref} className="cs_center">
                  <i>
                    <FaInstagram />
                  </i>
                </Link>
              </div>
            </div>
          </div>

          {data.widgets.map((widget, index) => (
            <div className="cs_footer_col" key={index}>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title">{widget.title}</h2>
                <ul className="cs_footer_widget_nav_list cs_mp_0">
                  {widget.links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Recent Updates</h2>
              <ul className="cs_recent_post_list cs_mp_0">
                {data.recentPosts.map((post, index) => (
                  <li key={index}>
                    <div className="cs_recent_post">
                      <Link to={post.href} className="cs_recent_post_thumb">
                        <img src={post.image} alt="" />
                      </Link>
                      <div className="cs_recent_post_right">
                        <p>{post.date}</p>
                        <h3 className="cs_recent_post_title">
                          <Link to={post.href}>{post.title}</Link>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="cs_footer_bottom cs_primary_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <p className="cs_footer_copyright mb-0">{data.copyrightText}</p>
            <ul className="cs_footer_menu cs_mp_0">
              {data.footerMenu.map((item, index) => (
                <li key={index}>
                  <Link to={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;