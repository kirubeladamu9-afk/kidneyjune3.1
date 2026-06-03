import HeroSection from '../../Components/HeroSection';
import CtaSection from '../../Components/CtaSection.jsx';
import About from '../../Components/About/index.jsx';
import CounterSection from '../../Components/FunSection/CounterSection.jsx';
import Service from '../../Components/Service/index.jsx';
import TeamSection from '../../Components/TeamSection/index.jsx';
import ChooseUs from '../../Components/ChooseUs/index.jsx';
import ProjectSection from '../../Components/ProjectSection/index.jsx';
import CtaSection1 from '../../Components/CtaSection.jsx/CtaSection1.jsx';
import MedicalTabSection from '../../Components/MedicalTabSection/index.jsx';
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

const sectionData = {
  subtitle: 'WHY PARTNER WITH US',
  title: 'A Certified, Accountable Framework <br /> For Public Healthcare Relief.',
  services: [
    {
      iconUrl: '/assets/img/icons/service_icon_9.png',
      title: 'Full CSO Accreditation',
      subtitle: 'Legally certified and fully recognized under the Federal Civil Society Organizations Authority.',
    },
    {
      iconUrl: '/assets/img/icons/service_icon_10.png',
      title: 'Audited Transparency',
      subtitle: 'Strict structural financial reporting guarantees every resource reaches direct patient subsidies.',
    },
    {
      iconUrl: '/assets/img/icons/service_icon_11.png',
      title: 'Zero Overhead Waste',
      subtitle: 'Operating out of a localized grassroots hub ensures funds target patient care over corporate costs.',
    },
    {
      iconUrl: '/assets/img/icons/service_icon_12.png',
      title: 'Verified Intake Registry',
      subtitle: 'An objective data evaluation framework prioritizes low-income families facing severe medical crises.',
    },
    {
      iconUrl: '/assets/img/icons/service_icon_13.png',
      title: 'Institutional Scalability',
      subtitle: 'Backed by a long-term strategic roadmap to scale from local relief into a regional public utility.',
    },
    {
      iconUrl: '/assets/img/icons/service_icon_14.png',
      title: 'Direct Strategic Impact',
      subtitle: 'Seamlessly matches corporate social responsibility programs directly with local community needs.',
    },
  ],
};

const projectData = {
  title: 'Operational Milestones',
  subtitle: 'OUR ROADMAP',
  description: 'Association Milestone Tracking',
  tabs: [
    { id: 'incorporation', label: 'Legal Setup' },
    { id: 'infrastructure', label: 'Headquarters' },
    { id: 'registry', label: 'Patients' },
    { id: 'sustainability', label: 'Scaling' },
  ],
  tabData: [
    {
      id: 'incorporation',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'CSO Charter Approval',
          subtitle:
            'Successfully completed formal alignment and legal incorporation with the Federal Civil Society Organizations Authority.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Governance Structural Framework',
          subtitle:
            'Appointed the executive board, financial management compliance auditors, and medical advisory committees.',
          index: 2,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Regulatory Compliance Setup',
          subtitle:
            'Established institutional bank accounts and tracking portals according to federal operational transparency standards.',
          index: 3,
        },
      ],
    },
    {
      id: 'infrastructure',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Central Hub Allocation',
          subtitle:
            'Secured the foundational physical headquarters facility localized within Akaki Kality Sub-City to deploy operations.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Material Mobilization Campaign',
          subtitle:
            'Launched procurement drives targeting workstations, networking equipment, and essential administrative office furniture.',
          index: 2,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Operational Communications Line',
          subtitle:
            'Deployed core data infrastructure, stakeholder intake lines, and online portals to link the hub with regional donors.',
          index: 3,
        },
      ],
    },
    {
      id: 'registry',
      items: [
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'National Patient Database Blueprint',
          subtitle:
            'Designed a secure, encrypted digital registry platform to track patient clinical diagnostics and financial profiles securely.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Intake and Evaluation Verification',
          subtitle:
            'Drafted objective verification rules to assess low-income healthcare subsidy allocation applications transparently.',
          index: 2,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'Clinical Center Integration',
          subtitle:
            'Initiated communications pathways with local diagnosis centers to facilitate direct medical funding transfer validations.',
          index: 3,
        },
      ],
    },
    {
      id: 'sustainability',
      items: [
        {
          imgUrl: '/assets/img/project_3.jpg',
          title: 'Dialysis Direct Subsidy Fund',
          subtitle:
            'Activated operational fundraising channels to securely clear medical bills for registered, low-income kidney patients.',
          index: 1,
        },
        {
          imgUrl: '/assets/img/project_2.jpg',
          title: 'CSR Corporate Alliances',
          subtitle:
            'Formulated long-term Corporate Social Responsibility partnerships with national financial institutions and local enterprises.',
          index: 2,
        },
        {
          imgUrl: '/assets/img/project_1.jpg',
          title: 'Five-Year Scaling Blueprint',
          subtitle:
            'Constructed a long-term strategy to expand our localized home hub into a multi-regional healthcare support framework.',
          index: 3,
        },
      ],
    },
  ],
};

const ctaData1 = {
  videoLink: 'https://www.youtube.com/embed/rRid6GCJtgc', // Replace with the association's promotional or introductory video if available
  videoButtonText: 'WATCH OVERVIEW',
  subtitle: 'OPERATIONAL TRANSPARENCY',
  title: 'Constructing a Scalable Public Utility for Chronic Healthcare.',
  description:
    'Hallelujah Kidney Patients Association acts as a direct link between corporate social responsibility programs, global philanthropy networks, and high-impact medical relief. Every operational milestone is structurally logged and audited to guarantee complete administrative accountability.',
  buttonLink: '#contact',
  buttonText: 'Partner With Us',
  brandImage: 'assets/img/medical_brand.png', // This will render nicely as a stamp of certification or the association insignia next to the text
};

const medicalTabsData = {
  subtitle: 'Support Pillars',
  title: 'Explore Our Core<br> Association Services',
  tabsTitle: [
    {
      href: 'dialysis_subsidy',
      iconUrl: 'assets/img/icons/tab_link_icon_1.png',
      label: 'Dialysis Subsidies',
    },
    {
      href: 'office_drive',
      iconUrl: 'assets/img/icons/tab_link_icon_2.png',
      label: 'Material Support',
    },
    {
      href: 'volunteer_hub',
      iconUrl: 'assets/img/icons/tab_link_icon_3.png',
      label: 'Volunteer Network',
    },
    {
      href: 'partnerships',
      iconUrl: 'assets/img/icons/tab_link_icon_4.png',
      label: 'Corporate Alliances',
    },
  ],
  tabsData: [
    {
      id: 'dialysis_subsidy',
      imageSrc: 'assets/img/post_6.jpeg',
      title: 'Easing the Financial Burden of Dialysis Care',
      subtitle:
        'We work strategically with local diagnostic centers to lower medical barriers, helping subsidize standard dialysis treatments for low-income patients who cannot afford the continuous cost of chronic care.',
      points: [
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Direct healthcare fund transfers targeting low-income patient medical fees.',
        },
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Structured patient registry systems to prioritize families facing catastrophic costs.',
        },
      ],
      linkHref: '#donate',
      buttonText: 'Sponsor a Session',
    },
    {
      id: 'office_drive',
      imageSrc: 'assets/img/post_5.jpeg',
      title: 'Establishing Our Administrative Infrastructure',
      subtitle:
        'To effectively transition operations into a fully scalable public hub, the association coordinates material donation drives specifically designed to equip our core Akaki Kality headquarters.',
      points: [
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Accepting corporate office capital assets, including workstations, printers, and router hardware.',
        },
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Transparent logging and auditing for every item pledged by corporate partners.',
        },
      ],
      linkHref: '#contact',
      buttonText: 'Pledge Materials',
    },
    {
      id: 'volunteer_hub',
      imageSrc: 'assets/img/post_1.jpeg',
      title: 'Mobilizing Professional Skills for Public Relief',
      subtitle:
        'Building a lasting humanitarian utility requires diverse institutional skillsets. We invite professionals across sectors to contribute to our administrative and medical operations.',
      points: [
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Onboarding legal, IT, and data management volunteers to strengthen organizational foundations.',
        },
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Partnering with certified medical practitioners for patient intake assessment validations.',
        },
      ],
      linkHref: '#contact',
      buttonText: 'Join as a Volunteer',
    },
    {
      id: 'partnerships',
      imageSrc: 'assets/img/post_3.jpeg',
      title: 'Strategic Corporate Social Responsibility',
      subtitle:
        'We align our structural workflows with the CSR frameworks of financial institutions, insurance corporations, and enterprises to implement robust, scalable community health programs.',
      points: [
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Strict compliance oversight in alignment with Civil Society Organizations Authority standards.',
        },
        {
          icon: 'assets/img/icons/check_icon_1.png',
          text: 'Coordinated funding allocations backed by audited annual transparency reports.',
        },
      ],
      linkHref: '#contact',
      buttonText: 'Partner With Us',
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

      <Section bottomSpaceLg="70" bottomSpaceMd="110">
        <ContactSection2 />
      </Section>

      {/* End Contact Solution */}
    </>
  );
};

export default MainHome;
