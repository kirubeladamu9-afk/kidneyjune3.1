import HeroSection from '../../Components/HeroSection';
import CtaSection from '../../Components/CtaSection.jsx';
import About from '../../Components/About/index.jsx';
import CounterSection from '../../Components/FunSection/CounterSection.jsx';
import Service from '../../Components/Service/index.jsx';
import TeamSection from '../../Components/TeamSection/index.jsx';
import BrandsSlider from '../../Components/BrandsSection/index.jsx';
import ChooseUs from '../../Components/ChooseUs/index.jsx';
import ProjectSection from '../../Components/ProjectSection/index.jsx';
import CtaSection1 from '../../Components/CtaSection.jsx/CtaSection1.jsx';
import MedicalTabSection from '../../Components/MedicalTabSection/index.jsx';
import BlogSection from '../../Components/BlogsSection/index.jsx';
import Section from '../../Components/Section/index.jsx';
import ContactSection2 from '../../Components/ContactSection/ContactSection2.jsx';

const heroData = {
  primarySlider: [
    {
      bgImageUrl: 'assets/img/hero_slider_3.jpg',
      title: 'Hallelujah Kidney  <span>Patients Association</span>',
      contactSubtitle:
        'Founded by veteran Ato Aschalew Kassaye, Hallelujah Kidney Patients Association is turning personal adversity into a national mission of care.',
      contactTitle: 'Support Our Mission.',
      contact: 'Help us provide care and support to kidney patients.',
      btnText1: 'Donate Funds',
      link: '/contact',
      btnText2: 'Donate Office Supplies',
      link2: '/about',
      iconImgUrl: 'assets/img/icons/hero_icon.png',
    },
    {
      bgImageUrl: 'assets/img/hero_slider_2.jpg',
      title: 'Building a Sanctuary of Hope for <span>Kidney Patients.</span>',
      contactSubtitle:
        'Founded by veteran Ato Aschalew Kassaye, Hallelujah Kidney Patients Association is turning personal adversity into a national mission of care.',
      contactTitle: 'Support Our Mission.',
      contact: 'Help us provide care and support to kidney patients.',
      btnText1: 'Donate Funds',
      link: '/contact',
      btnText2: 'Donate Office Supplies',
      link2: '/about',
      iconImgUrl: 'assets/img/icons/hero_icon.png',
    },
    {
      bgImageUrl: 'assets/img/hero_slider_1.jpg',
      title: 'Building a Sanctuary of Hope for <span>Kidney Patients.</span>',
      contactSubtitle:
        'Founded by veteran Ato Aschalew Kassaye, Hallelujah Kidney Patients Association is turning personal adversity into a national mission of care.',
      contactTitle: 'Support Our Mission.',
      contact: 'Help us provide care and support to kidney patients.',
      btnText1: 'Donate Funds',
      link: '/contact',
      btnText2: 'Donate Office Supplies',
      link2: '/about',
      iconImgUrl: 'assets/img/icons/hero_icon.png',
    },
  ],
  secondarySlider: [
    'assets/img/hero_slider_sm_1.png',
    'assets/img/hero_slider_sm_2.png',
    'assets/img/hero_slider_sm_3.png',
  ],
};

const ctaData = {
  imageUrl: '/assets/img/cta_img_1.jpg',
  title: 'Legally Registered. by the Civil Society Organizations Authority.',
  subtitle: 'on Megabit 8, 2018 E.C',
  buttonUrl: '/appointments',
  buttonText: 'View Legal Certificate',
};

const aboutData = {
  sectionSubtitle: 'OUR ABOUT US',
  sectionTitle: 'Building Ethiopia’s Next Essential Public Healthcare Institution',
  aboutText:
    'Hallelujah Kidney Patients Association was established to address a critical gap in chronic healthcare infrastructure. For thousands of families in Ethiopia, managing advanced kidney disease is a catastrophic financial and logistical burden. With a single standard dialysis session costing 4,500 ETB—required three times a week—the economic strain quickly outpaces a familys regular income, leading to preventable loss of life.',
  service:
    "Our ultimate objective mirrors the institutional scale of pioneering organizations like Macedonia and the Abebech Gobena Association. We are not just managing a crisis; we are constructing a permanent foundation for public healthcare relief. <a href='#''>READ MORE +</a>",
  experienceYears: '26+',
  experienceTitle: 'Experience',
  videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
  videoText: 'How We Work',
  iconboxes: [
    {
      imgUrl: '/assets/img/icons/about_icon_1.png',
      title: 'Client Support',
      subtitle: 'But must explain to you medical of and pain was.',
    },
    {
      imgUrl: '/assets/img/icons/about_icon_2.png',
      title: 'Doctor Support',
      subtitle: 'But must explain to you medical of and pain was.',
    },
  ],

  btnUrl: '/about',
  btnText: 'About More',
  sectionImgUrl: 'assets/img/about_section_img_1.png',
  headImgUrl: 'assets/img/about_img_1.jpg',
};

const countersData = [
  {
    iconUrl: '/assets/img/icons/counter_icon_1.png',
    number: '13,500 ETB+',
    title: 'Average Weekly Cost per Patient',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_2.png',
    number: '3x',
    title: 'Weekly Mandatory Treatment Frequency',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_3.png',
    number: '100%',
    title: 'Non-Profit Transparency & Compliance',
  },
  {
    iconUrl: '/assets/img/icons/counter_icon_4.png',
    number: '2018 E.C.',
    title: 'Founded for Institutional Relief',
  },
];

const serviceData = {
  subtitle: 'Strategic Pillars & Programs',
  title: 'Our Core Framework of Action',
  description:
    'The association operates through structured program pillars designed to maximize patient survival rates, institutional transparency, and operational scalability.',
  services: [
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_1.png',
      index: '01',
      title: 'Dialysis Subsidy Fund',
      subtitle: 'Providing direct financial grants to low-income or poor patients to cover immediate hospital dialysis bills.',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_2.png',
      index: '02',
      title: 'Infrastructure & Head Office Drive',
      subtitle: 'Mobilizing corporate assets and tech equipment to establish our central administrative hub in Akaki Kality.',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_3.png',
      index: '03',
      title: 'National Patient Registry',
      subtitle: 'Deploying a secure, verified database to track patient demographics, treatment stages, and financial needs.',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_4.png',
      index: '04',
      title: 'Preventative Health Advocacy',
      subtitle: 'Conducting nationwide public awareness campaigns focused on early detection and kidney health management.',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_5.png',
      index: '05',
      title: 'Patient Logistics Networks',
      subtitle: 'Coordinating transport solutions to ensure vulnerable patients safely reach their medical centers on time.',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_6.png',
      index: '06',
      title: 'Pharmaceutical Procurement',
      subtitle: 'Partnering with medical suppliers to secure and distribute essential chronic medications at subsidized rates.',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_7.png',
      index: '07',
      title: 'Regulatory Accountability',
      subtitle: 'Ensuring complete alignment with Civil Society Authority operational audits and legal frameworks.',
      link: '/service/service-details',
    },
    {
      backgroundImage: '/assets/img/service_bg.jpg',
      iconUrl: '/assets/img/icons/service_icon_8.png',
      index: '08',
      title: 'Diaspora & Corporate Alliances',
      subtitle: 'Creating secure channels for international institutions and corporate partners to sponsor long-term medical relief.',
      link: '/service/service-details',
    },
  ],
  footerIcon: '/assets/img/icons/service_footer_icon_1.png',
  footerText:
    'Delivering tomorrow’s health care for your family.<br>medical this View',
  footerLink: '/',
  footerLinkText: 'SEE MORE',
};

const teamData = {
  subtitle: 'OUR TEAM MEMBER',
  title: ' Organizational Structure <br />',
  sliderData: [
    {
      name: 'Dr. Norma Pedric',
      profession: 'Executive Secretariat',
      imageUrl: '/assets/img/team_1.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. James Lewis',
      profession: 'Medical Advisory Committee',
      imageUrl: '/assets/img/team_3.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. Sophia Anderson',
      profession: 'Financial Oversight & Auditing',
      imageUrl: '/assets/img/team_4.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. Michael Thompson',
      profession: 'Volunteer & Operations Management',
      imageUrl: 'assets/img/team_5.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
    {
      name: 'Dr. David Wilson',
      profession: 'Board of Directors',
      imageUrl: '/assets/img/team_6.jpg',
      link: '/doctors/doctor-details',
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    },
  ],
};

const brandData = [
  { image: '/assets/img/envato-logo.png', altText: 'Brand 1' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 2' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 3' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 4' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 5' },
  { image: '/assets/img/envato-logo.png', altText: 'Brand 6' },
];

const sectionData = {
  subtitle: 'WHY CHOOSE US',
  title: 'Medical Ready To Get This <br /> Health Solution.',
  services: [
    {
      iconUrl: '/assets/img/icons/service_icon_9.png',
      title: 'Expert Care',
      subtitle: 'Medical competitor research startup to financial',
    },
    {
      iconUrl: '/assets/img/icons/service_icon_10.png',
      title: 'Emergency Help',
      subtitle: 'Medical competitor research startup to financial',
    },
    {
      iconUrl: '/assets/img/icons/service_icon_11.png',
      title: 'Qualified Doctors',
      subtitle: 'Medical competitor research startup to financial',
    },
    {
      iconUrl: '/assets/img/icons/service_icon_12.png',
      title: 'Medical Advices',
      subtitle: 'Medical competitor research startup to financial',
    },
    {
      iconUrl: '/assets/img/icons/service_icon_13.png',
      title: 'Medical Research',
      subtitle: 'Medical competitor research startup to financial',
    },
    {
      iconUrl: '/assets/img/icons/service_icon_14.png',
      title: 'Affordable Prices',
      subtitle: 'Medical competitor research startup to financial',
    },
  ],
};

const projectData = {
  title: 'All The Great Work That<br> Medical Service',
  subtitle: 'OUR PORTFOLIO',
  description:
    'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
  tabs: [
    { id: 'dental', label: 'Dental' },
    { id: 'cardiology', label: 'Cardiology' },
    { id: 'neurology', label: 'Neurology' },
    { id: 'medical', label: 'Medical' },
  ],
  tabData: [
    {
      id: 'dental',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Dental',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 2,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Laboratory Technologist',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 3,
        },
      ],
    },
    {
      id: 'cardiology',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Laboratory Technologist',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 3,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Dental',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 2,
        },
      ],
    },
    {
      id: 'neurology',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
      ],
    },
    {
      id: 'medical',
      items: [
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Medical Of Working',
          subtitle:
            'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
          index: 1,
        },
      ],
    },
  ],
};

const ctaData1 = {
  videoLink: 'https://www.youtube.com/embed/rRid6GCJtgc',
  videoButtonText: 'WATCH VIDEO',
  subtitle: 'OUR WATCH VIDEO',
  title: 'Professional Medical Care Measure Medical.',
  description:
    'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and comfortable in establishing.',
  buttonLink: '/contact',
  buttonText: 'Video More',
  brandImage: 'assets/img/medical_brand.png',
};

const medicalTabsData = {
  subtitle: 'Service Offerings',
  title: 'Explore Our Service<br> Offerings',
  tabsTitle: [
    {
      href: 'brain_althim',
      iconUrl: 'assets/img/icons/tab_link_icon_1.png',
      label: 'Modern Technology',
    },
    {
      href: 'emergency',
      iconUrl: 'assets/img/icons/tab_link_icon_2.png',
      label: 'Success of Treatment',
    },
    {
      href: 'heart_beat',
      iconUrl: 'assets/img/icons/tab_link_icon_3.png',
      label: 'Certified Doctors',
    },
    {
      href: 'blood_test',
      iconUrl: 'assets/img/icons/tab_link_icon_4.png',
      label: 'Medical Advice',
    },
  ],
  tabsData: [
    {
      id: 'brain_althim',
      imageSrc: 'assets/img/post_6.jpeg',
      title: 'We are here to hear and heal your',
      subtitle:
        'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and comfortable in establishing.',
      points: [
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
        },
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
        },
      ],
      linkHref: '/contact',
      buttonText: 'Read More',
    },
    {
      id: 'emergency',
      imageSrc: 'assets/img/post_5.jpeg',
      title: 'Treatment patients in primary care',
      subtitle:
        'We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
      points: [
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
        },
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
        },
      ],
      linkHref: '/contact',
      buttonText: 'Read More',
    },
    {
      id: 'heart_beat',
      imageSrc: 'assets/img/post_1.jpeg',
      title: 'Accreditation within a given specialty',
      subtitle:
        'We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
      points: [
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
        },
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
        },
      ],
      linkHref: '/contact',
      buttonText: 'Read More',
    },
    {
      id: 'blood_test',
      imageSrc: 'assets/img/post_3.jpeg',
      title: 'Better Health While Aging health',
      subtitle:
        'We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
      points: [
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
        },
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
        },
      ],
      linkHref: '/contact',
      buttonText: 'Read More',
    },
    // Add other tab data here
  ],
};

const blogsData = {
  sectionTitle: 'OUR LARGEST BLOG',
  sectionSubtitle: 'Latest Posts &amp; Articles',
  postsData: [
    {
      title: 'Medical Of This Working Health Blog',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: '/assets/img/post_1.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'There Is Only One Thing That Is Hospital.',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: 'assets/img/post_2.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'This Working World and Infection Prevention.',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: 'assets/img/post_3.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
    {
      title: 'Medical Of This Working Health Blog',
      subtitle:
        'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
      date: 'May 02',
      category: 'Medical',
      author: 'Admin',
      thumbnail: 'assets/img/post_1.jpeg',
      btnText: 'Read More',
      postLink: '/blog/blog-details',
      authorIcon: '/assets/img/icons/post_user_icon.png',
      commentIcon: '/assets/img/icons/post_comment_icon.png',
    },
  ],
};

const MainHome = () => {
  return (
    <>
      {/* End Header Section */}
      {/* Start Hero Section */}
      <HeroSection data={heroData} />
      {/* End Hero Section */}
      {/* Start CTA Section */}
      <Section
        className={
          'cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden'
        }
      >
        <CtaSection data={ctaData} />
      </Section>

      {/* End CTA Section */}
      {/* Start About Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 position-relative"
      >
        <About data={aboutData} />
      </Section>

      {/* End About Section */}
      {/* Start Counter */}
      <Section className="cs_counter_area cs_gray_bg">
        <CounterSection data={countersData} />
      </Section>

      {/* End Counter */}
      {/* Start Service Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_gray_bg'}
      >
        <Service cardBg={'cs_gray_bg'} data={serviceData} />
      </Section>

      {/* End Service Section */}
      {/* Start Team Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        className={'cs_team_section position-relative'}
      >
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section>
      {/* End Team Section */}
      {/* Start Brand Section */}
      <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section">
        <BrandsSlider data={brandData} />
      </Section>

      {/* End Brand Section */}
      {/* Start Why Choose Us Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg cs_bg_filed"
        backgroundImage="/assets/img/service_bg_2.jpg"
      >
        <ChooseUs data={sectionData} />
      </Section>

      {/* End Why Choose Us Section */}
      {/* Start Projects Section */}
      <Section topSpaceLg="70" topSpaceMd="110" className="cs_tabs">
        <ProjectSection data={projectData} />
      </Section>

      {/* End Projects Section */}
      {/* Start CTA Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData1} />
      </Section>

      {/* End CTA Section */}
      {/* Start Medical Tab Section */}
      <Section topSpaceLg="70" topSpaceMd="110">
        <MedicalTabSection data={medicalTabsData} />
      </Section>

      {/* End Medical Tab Section */}
      {/* Start Contact Solution */}

      <ContactSection2></ContactSection2>

      {/* End Contact Solution */}
      {/* Start Blog Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection data={blogsData} />
      </Section>
    </>
  );
};

export default MainHome;
