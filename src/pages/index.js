import BaseLayout from "../components/BaseLayout";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.css";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { BsFillCheckCircleFill, BsBarChartFill } from "react-icons/bs";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import { GiSwordsPower } from "react-icons/gi";
import {
  MdStickyNote2,
  MdOutlineHowToVote,
  MdWork,
  MdWorkOff,
} from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";

import {
  BsArrowRight,
  BsFillPatchQuestionFill,
  BsPeopleFill,
  BsFileEarmarkCheck,
  BsFillPhoneVibrateFill,
  BsFillSignpostFill,
  BsFillPeopleFill,
  BsFillTelephoneFill,
  BsFillCalendarCheckFill,
  BsFillArrowRightCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { FaPlaneArrival, FaGlobeAmericas, FaHandshake } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

//banners
import banner1 from "../../public/banner-1.jpg";
import banner2 from "../../public/banner-2.jpg";
import banner3 from "../../public/banner-3.jpg";
import banner4 from "../../public/banner-4.jpg";
import banner5 from "../../public/banner-5.jpg";
import banner6 from "../../public/banner-6.jpg";
import banner7 from "../../public/banner-7.jpg";
import banner8 from "../../public/banner-8.jpg";
import banner9 from "../../public/banner-9.jpg";
import banner10 from "../../public/banner-10.jpg";
import banner11 from "../../public/banner-11.jpg";
import banner12 from "../../public/banner-12.jpg";
import banner13 from "../../public/banner-13.jpg";
import banner14 from "../../public/banner-14.jpg";
import banner16 from "../../public/banner-16.jpg";
import banner17 from "../../public/banner-17.jpg";
import banner18 from "../../public/banner-18.jpg";
import banner19 from "../../public/banner-19.jpg";

import ombuds from "../../public/ombuds.jpg";
import supreme from "../../public/supreme.png";
import bottom1 from "../../public/bottom-pic-1.jpg";
import bottom2 from "../../public/bottom-pic-2.png";
import bottom3 from "../../public/bottom-pic-3.png";
import officeimg2 from "../../public/office.jpg";

import vision from "../../public/Vision_01.png";
import mission from "../../public/mission-01.png";
import p from "../../public/p.png";
import q from "../../public/q.png";
import r from "../../public/r.png";
import s from "../../public/s.png";

const Home = () => {
  const [activeData, setActiveData] = useState(1);
  const [expandedStories, setExpandedStories] = useState({});

  // Function to set the active data when an image is clicked
  const showData = (imageNumber) => {
    setActiveData(imageNumber);
  };

  const toggleText = (storyId) => {
    setExpandedStories((prevState) => ({
      ...prevState,
      [storyId]: !prevState[storyId],
    }));
  };

  function Counter({ number, title }) {
    const [isInView, setIsInView] = useState(false);
    const { ref } = useInView({
      triggerOnce: false,
      threshold: 0.2,
      onChange: (inView) => {
        setIsInView(inView);
      },
    });

    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      if (isInView) {
        setCurrentNumber(number);
      } else {
        setCurrentNumber(0); // Reset the counter to zero when out of view
      }
    }, [isInView, number]);

    return (
      <div className="counter-container" ref={ref}>
        {isInView ? (
          <CountUp start={0} end={currentNumber} duration={2} />
        ) : (
          <span>{currentNumber}</span>
        )}
        <p>{title}</p>
      </div>
    );
  }

  // Dummy data for stats
  const data = {
    complaintsReceived: { number: 7090, text: "Received Complaints" },
    complaintsCompleted: { number: 7357, text: "Complaints Completed" },
    performance: { number: 85, text: "Performance" },
  };

  const cards = [
    {
      image: "w-25.jpg",
      title: "ANNUAL REPORT",
      subtitle:
        "Provincial Ombudsman Sindh, Muhammad Sohail Rajput, presented the Annual Report 2025 to the Chief Minister of Sindh, Syed Murad Ali Shah, during a meeting held at the Chief Minister's House.",
      new: "Whats New",
    },
    {
      image: "Ziauddin.jpg",
      title: "Brand Ambassador Program",
      subtitle: "Visit to Ziauddin University - Brand Ambassador Program",
      new: "Whats New",
    },
    {
      image: "Ios2.jpg",
      title: "Now Live on iOS - Download Our Mobile App",
      subtitle:
        "Our Mobile app is officially available on the App Store. Download now and enjoy a faster, smarter, and more seamless experience on your iPhone.",
      new: "Whats New",
    },
    {
      image: "PakistanOmbudsmanConference.png",
      title: "Forum of Pakistan Ombudsman",
      subtitle:
        "The Forum of Pakistan Ombudsman (FPO) proudly announces that H.E. Muhammad Sohail Rajput, Provincial Ombudsman Sindh, has been elected as the Asian Regional Director on the Board of the International Ombudsman Institute (IOI).",
      new: "Whats New",
    },
    {
      image: "Seminar1.jpg",
      title: "Capacity Building",
      subtitle:
        "The Ombudsman Sindh Office organized a seminar graced by Honorable Mr.Justice Faisal Kamal Alam, Judge of the High Court, and Honorable Mr. Muhammad Sohail Rajput, Provincial Ombudsman Sindh.",
      new: "Whats New",
    },
    {
      image: "NED.jpg",
      title: "NED SEMINAR",
      subtitle:
        "Provincial Ombudsman Sindh, Mr. Muhammad Sohail Rajput, addressed students at NED University on 2nd Sept 2025, announcing the selection of 10 Brand Ambassadors to spread awareness about the Ombudsman’s role in providing fast and inexpensive justice. The initiative aims to utilize youth potential for greater outreach and public service.",
      new: "Whats New",
    },
    {
      image: "W-22.jpg",
      title: "ANNUAL REPORT",
      subtitle:
        "Provincial Ombudsman of Sindh, Muhammad Sohail Rajput, presents the annual report for 2024 to the Sindh Chief Minister, Syed Murad Ali Shah, at CM House.",
      new: "Whats New",
    },
    {
      image: "w-20.jpg",
      title: "Android App",
      subtitle:
        "Mohtasib Sindh Android Application is Launched on Google Play Store. Do click to Download the app for easier complaint registration.",
      new: "Whats New",
    },
    {
      image: "w-19.jpg",
      title: "VISIT",
      subtitle:
        "The Provincial Ombudsman of Sindh, H.E. Mr. Sohail Rajput attended the International Ombudsman Conference in Italy, emphasizing their role in safeguarding citizens' rights and ensuring government accountability.",
      new: "Whats New",
    },
    {
      image: "w-18.jpg",
      title: "VISIT",
      subtitle:
        "The Provincial Ombudsman of Sindh, H.E. Mr. Sohail Rajput attended the International Ombudsman Conference in Italy, emphasizing their role in safeguarding citizens' rights and ensuring government accountability.",
      new: "Whats New",
    },
    {
      image: "w-17.jpg",
      title: "VISIT",
      subtitle:
        "The Provincial Ombudsman of Sindh, H.E. Mr. Sohail Rajput attended the International Ombudsman Conference in Italy, emphasizing their role in safeguarding citizens' rights and ensuring government accountability.",
      new: "Whats New",
    },
    {
      image: "w-16.jpg",
      title: "VISIT",
      subtitle:
        "The Provincial Ombudsman of Sindh, H.E. Mr. Sohail Rajput, and the Provincial Ombudsman of Balochistan, H.E. Mr. Nazar Baloch attended the International Ombudsman Conference in Italy, emphasizing their role in safeguarding citizens' rights and ensuring government accountability.",
      new: "Whats New",
    },

    {
      image: "w-6.jpg",
      title: "VISIT",
      subtitle:
        "Honorable ombudsman Sindh Mr. Muhammad Sohail Rajput visiting office of Ombudsman for the women protection",
      new: "Whats New",
    },
    {
      image: "w-5.jpg",
      title: " CALL ON MEETING",
      subtitle:
        "HONORABLE OMBUDSMAN SINDH HOLDS THE FOLLOWUP SESSION  WITH 10  SELECTED STUDENTS OF HAMDARD UNIVERSITY AS AMBASSADORS FOR HIS INSTITUTE",
      new: "Whats New",
    },
    {
      image: "w-4.jpg",
      title: " CALL ON MEETING",
      subtitle:
        "Hon'ble ombudsman Sindh chaired the meeting with ACS L. G. Deptt, Secretary PHED, DG. HDa,/SDA, MC, HMC, Secretary, Sindh Local Govt. Fund Board and   officers of Water and Sewerage corporation Hyd, to discuss progress of cases pending investigation at R O. Hyd.",
      new: "Whats New",
    },
    {
      image: "w-1.jpg",
      title: "1st Ambassador Program",
      subtitle:
        "1st Ambassador Program was held at Hamdard University on 29th of May 2024 at Hamdard University, Karachi.",
      new: "Whats New",
    },
    {
      image: "w-2.jpg",
      title: "CALL ON MEETING",
      subtitle:
        "Meeting was held at  Sindh Ombudsman office which was chaired by Honorable Ombudsman Sindh with DEPARTMENT OF EMPOERMENT OF PERSONS WITH DISABILITIES to address the crucial issues facing Persons with Disabilities.",
      new: "Whats New",
    },

    {
      image: "w-15.jpg",
      title: "ANNUAL REPORT",
      subtitle:
        "Provincial Ombudsman sindh Mr. Muhammad Sohail Rajput presented annual report of year 2023 to Honourable governor Sindh on 28th May 2024.",
      new: "Whats New",
    },

    {
      image: "w-11.jpg",
      title: "OATH TAKING",
      subtitle:
        "Hon'ble Governor Sindh administered the oath of Mr. Muhammad Sohail Rajput as Ombudsman for the Province of Sindh.",
      new: "Whats New",
    },
  ];

  const Article = ({ data }) => (
    <figure className="snip1584">
      <img src={data.image} alt={data.title} />
      <p className="slider-btn">{data.new}</p>
      <figcaption>
        <h3>{data.title}</h3>
        <h5>{data.subtitle}</h5>
      </figcaption>
      <a href="#"></a>
    </figure>
  );

  //Slider
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 columns
    slidesToScroll: 3,
    rows: 3, // 3 rows
    slidesPerRow: 1, // 1 item per column per row
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          rows: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          rows: 3,
        },
      },
    ],
  };

  return (
    <BaseLayout>
      {/* dashboard banner */}
      <section className="dashboard-section" id="dashboard-section">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item  active" data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={officeimg2}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>HEADQUARTER</h5>
                <p>Provincial Ombudsman</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner1}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>KARACHI SOUTH</h5>
                <p>Quaid-e-Azam House</p>
              </div>
            </div>
            <div className="carousel-item  " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner2}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>KARACHI CENTRAL</h5>
                <p>Nagan Flyover</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner3}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>KARACHI WEST</h5>
                <p>Native Jetty Bridge</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner4}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>KARACHI EAST</h5>
                <p>Jinnah Airport</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner5}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>SUKKUR</h5>
                <p>Lansdowne Bridge</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner6}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>THARPARKAR</h5>
                <p>Naukot Fort</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner7}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>DADU</h5>
                <p>Gorakh Hill</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner8}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>KHAIRPUR</h5>
                <p>Faiz Mahal</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner9}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>NAUSHARO FEROZE</h5>
                <p>Grand Mosque Allahabad</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner10}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>THATTA</h5>
                <p>Makli Necropolis</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner11}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>HYDERABAD</h5>
                <p>Pakka Qila</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner12}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>KORANGI</h5>
                <p>Airmen Golf Club</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner13}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>BENAZIRABAD</h5>
                <p>Dalel Dero Fort</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner14}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>BADIN</h5>
                <p>Agham Kot</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner18}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>JACOBABAD</h5>
                <p>Police Building</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner16}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>MIRPURKHAS</h5>
                <p>Chittori</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner17}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>LARKANA</h5>
                <p>Mohenjo Daro</p>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <Image
                className="dashboard-slider-image"
                src={banner19}
                alt="slider1img"
              />
              <div className="carousel-caption  d-none d-md-block">
                <h5>Ombudsman Sindh</h5>
                <p>Mr. Muhammad Sohail Rajput</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon ca"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Cards */}

      <section className="">
        <div className="row container mx-auto justify-content-center text-center bg-trans ">
          <div className="col-lg-3  col-sm-5 col-12 d-flex flex-column align-items-center border-end">
            <Image
              className="mb-3"
              src={s}
              alt="slider1img"
              width={125}
              height={125}
            />
            <div className="card-text">
              <Link href="/About/OurCommitment">OUR COMMITMENT</Link>
            </div>
          </div>
          <div className="col-lg-3   col-sm-5 col-12 d-flex flex-column align-items-center border-end">
            <Image
              className="mb-3"
              src={p}
              alt="slider1img"
              width={90}
              height={90}
            />
            <div className="card-text">
              <Link
                href="https://complaints.mohtasibsindh.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MAKE A COMPLAINT
              </Link>
            </div>
          </div>
          <div className="col-lg-3   col-sm-5 col-12 d-flex flex-column align-items-center border-end">
            <Image
              className="mb-3"
              src={q}
              alt="slider1img"
              width={90}
              height={90}
            />
            <div className="card-text">
              <Link href="/MakeAComplaint/MakingAComplaint">
                HOW TO COMPLAINT
              </Link>
            </div>
          </div>
          <div className="col-lg-3   col-sm-5 col-12 d-flex flex-column align-items-center border-end  ">
            <Image
              className="mb-3"
              src={r}
              alt="slider1img"
              width={90}
              height={90}
            />
            <div className="card-text">
              <Link href="/MakeAComplaint/ComplaintFAQs">COMPLAINT FAQS</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ombudsman message */}

      <section
        className="container mt-5"
        style={{
          background: "linear-gradient(125deg, #71a777ff, #b3e6c2ff)",
          borderRadius: "14px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          padding: "40px",
        }}
      >
        <div className="row align-items-center g-4">
          {/* Image Column */}
          <div className="col-lg-4 col-md-12 order-lg-1 order-1 text-center">
            <Image
              src={ombuds}
              alt="ombudsmanimg"
              width={250}
              height={350}
              className="img-fluid mx-auto"
              style={{
                borderRadius: "14px",
                boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                border: "4px solid #ffffff",
              }}
            />
          </div>

          {/* Text Column */}
          <div className="col-lg-8 col-md-12 order-lg-2 order-2">
            <h2
              style={{
                fontWeight: "900",
                fontSize: "18px",
                color: "#004533ff",
                borderRight: "250px solid #064e3b",
                borderLeft: "250px solid #064e3b",
                paddingLeft: "14px",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              MESSAGE FROM OMBUDSMAN SINDH
            </h2>

            <p
              style={{
                color: "#000000ff",
                fontSize: "18px",
                lineHeight: "1.8",
                textAlign: "justify",
                marginBottom: "14px",
                textAlignLast: "center",
                // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
              }}
            >
              <b>
                I am delighted to extend a warm welcome to you on the website of
                the office of the Ombudsman Sindh. This platform has been
                created with the aim of offering direct accessibility to
                everyone, especially to citizens aggrieved by the act of
                maladministration of any Department/Agency of Government of
                Sindh. Our commitment is to address public complaints with
                effectiveness, efficiency and transparency. Our aim is to
                improve public administration through independent, objective and
                impartial investigation and we treasure your valuable input to
                keep improving our quality of service.
              </b>
            </p>

            <p
              style={{
                marginTop: "20px",
                fontWeight: "600",
                color: "#000000ff",
                fontSize: "17px",
                textAlign: "center",
              }}
            >
              Mr. Muhammad Sohail Rajput
            </p>

            <p
              style={{
                marginTop: "-4px",
                fontSize: "14px",
                color: "#000000ff",
                textAlign: "center",
              }}
            >
              OMBUDSMAN SINDH
            </p>
          </div>
        </div>
      </section>

      {/* vision and mission */}

      <section className="container mx-auto mt-5 p-5 vision-mission">
        <div className="row g-4 align-items-center">
          {/* VISION */}
          <div className="col-md-6">
            <div className="vision-card">
              <div className="row align-items-center">
                <div className="col-3 text-center">
                  <Image className="vm-icon" src={vision} alt="Vision" />
                </div>
                <div className="col-9">
                  <h2 className="vm-title">OUR VISION</h2>
                  <p className="vm-text">
                    <b>
                      To promote high standards of governance, and efficiency
                      through administrative justice services.
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MISSION */}
          <div className="col-md-6">
            <div className="vision-card">
              <div className="row align-items-center">
                <div className="col-3 text-center">
                  <Image
                    className="vm-icon"
                    src={mission}
                    alt="Mission"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="col-9">
                  <h2 className="vm-title">OUR MISSION</h2>
                  <p className="vm-text">
                    <b>
                      To effectively and comprehensively address public
                      grievances in a fair, prompt, transparent, equitable, and
                      efficient manner.
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {Order Justice mandate} */}
      <section className="container mx-auto mt-5 p-5 registration-wrap mandate-section">
        <div className="container p-4">
          <div className="row align-items-center g-4">
            {/* TEXT */}
            <div className="col-md-6">
              <div className="registration-content">
                <h2 className="mandate-title">WHAT IS OUR MANDATE?</h2>
                <div className="mandate-border"></div>

                <p className="mandate-text">
                  THE OMBUDSMAN SINDH HAS THE MANDATE TO PROTECT THE RIGHTS OF
                  THE PEOPLE, ENSURING ADHERENCE TO THE RULE OF LAW, DIAGNOSING,
                  REDRESSING AND RECTIFYING ANY INJUSTICE DONE TO A PERSON
                  THROUGH MALADMINISTRATION AND ADMINISTRATIVE INJUSTICE.
                </p>

                <Link className="learn-more" href="/About/OurCharter">
                  Learn more
                </Link>
              </div>
            </div>

            {/* IMAGE */}
            <div className="col-md-6 text-center">
              <div className="img-section">
                <Image
                  className="mandate-img"
                  src={supreme}
                  alt="mandate-image"
                  width={500}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ms-5 mt-5 mb-5 p-5">
        <strong>
          <h2 className="h2">What’s New</h2>
        </strong>
        <div className="">
          <Slider {...settings}>
            {cards.map((item, index) => (
              <div key={index}>
                {/* Your Article component */}
                <Article data={item} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Counter */}
      <section className="container">
        <div className="row justify-content-center align-items-center text-center ">
          <div className="col-6 d-flex justify-content-center">
            <div
              className="vision-missionbg our-value-system downing bg-dark text-white"
              onClick={() => showData(1)}
            >
              <h1 className="counter-heading">
                Complaints Data (December 2025 - July 2026) Complaint
                Management System
              </h1>
            </div>
          </div>
        </div>

        <div className="col-md-12 container  our-value-system1 p-5">
          <div
            id="data1"
            className="col-md-12 container p-3"
            style={{ display: activeData === 1 ? "block" : "none" }}
          >
            <div className="row justify-content-center">
              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <GiNotebook className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={14800} />
                  </div>
                  <div className="values-system-para">Complaints Received</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <GiNotebook className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={9161} />
                  </div>
                  <div className="values-system-para">Complaints Admitted</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <GiNotebook className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={3218} />
                  </div>
                  <div className="values-system-para">Complaints Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion */}

      <section className="container mt-5 mb-5 accordion-section">
        <h2 className="accordion-title text-center mb-4">
          How We Serve the Public
        </h2>

        <div className="accordion" id="accordionFlushExample">
          {/* ITEM 1 */}
          <div className="accordion-item acc-card">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed acc-btn"
                data-bs-toggle="collapse"
                data-bs-target="#one"
              >
                <MdWork className="acc-icon" />
                <span>What We Do</span>
              </button>
            </h2>
            <div id="one" className="accordion-collapse collapse">
              <div className="accordion-body acc-body">
                ✔ We investigate complaints about maladministration in
                Government of Sindh departments, provide relief, and help
                improve public services through independent and fair processes.
              </div>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="accordion-item acc-card">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed acc-btn"
                data-bs-toggle="collapse"
                data-bs-target="#two"
              >
                <MdWorkOff className="acc-icon" />
                <span>What We Don’t Do</span>
              </button>
            </h2>
            <div id="two" className="accordion-collapse collapse">
              <div className="accordion-body acc-body">
                <ul>
                  <li>✔ Matters under court proceedings</li>
                  <li>✔ Service-related issues</li>
                  <li>✔ External affairs</li>
                  <li>✔ Defence matters</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="accordion-item acc-card">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed acc-btn"
                data-bs-toggle="collapse"
                data-bs-target="#three"
              >
                <BsFillPatchQuestionFill className="acc-icon" />
                <span>How We Help You</span>
              </button>
            </h2>
            <div id="three" className="accordion-collapse collapse">
              <div className="accordion-body acc-body">
                <p>✔ Free administrative justice</p>
                <p>✔ Fair and timely complaint resolution</p>
                <p>✔ Relief recommendations</p>
                <p>✔ Priority for marginalized groups</p>
                <p>✔ Informal dispute resolution</p>
                <p>✔ Suo-Moto powers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper-justice py-5">
        <div className="container-fluid">
          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-4 col-sm-6">
              <Link
                href="/About/OurCommitment"
                className="text-decoration-none"
              >
                <div className="justice-card">
                  <div className="image-wrapper">
                    <Image
                      className="card-image"
                      src={bottom3}
                      alt="Our Commitment"
                      width={500}
                      height={500}
                    />
                  </div>

                  <div className="card-content">
                    <span className="top-line"></span>

                    <h3 className="title">Our Commitment</h3>

                    <p className="description">
                      We are committed to redress public grievances in an
                      efficient, effective, and transparent manner.
                    </p>

                    <div className="arrow-btn">
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6">
              <Link href="/About/OurCharter" className="text-decoration-none">
                <div className="justice-card">
                  <div className="image-wrapper">
                    <Image
                      className="card-image"
                      src={bottom2}
                      alt="Our Charter"
                      width={500}
                      height={500}
                    />
                  </div>

                  <div className="card-content">
                    <span className="top-line"></span>

                    <h3 className="title">Our Charter</h3>

                    <p className="description">
                      Delivering justice with accountability, transparency, and
                      excellence for the citizens of Sindh.
                    </p>

                    <div className="arrow-btn">
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6">
              <Link
                href="/About/TheSecratariat"
                className="text-decoration-none"
              >
                <div className="justice-card">
                  <div className="image-wrapper">
                    <Image
                      className="card-image"
                      src={bottom1}
                      alt="The Secretariat"
                      width={500}
                      height={500}
                    />
                  </div>

                  <div className="card-content">
                    <span className="top-line"></span>

                    <h3 className="title">The Secretariat</h3>

                    <p className="description">
                      The Secretariat of the Provincial Ombudsman Sindh is based
                      in Karachi and works under the supervision of the
                      Secretary.
                    </p>

                    <div className="arrow-btn">
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* upkey */}
      <section>
        <a href="#dashboard-section">
          <img src="/back-to-top.png" alt="" className="upKey" />
        </a>
      </section>

      <style jsx>{`
        .stories-wrapper {
          margin-top: 20px;
        }
        .stories-card {
          display: flex;
          flex-wrap: wrap;
        }
        .story-container {
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.2s;
          display: flex;
          flex-direction: column;
          max-width: 300px;
          margin: 10px;
        }
        .story-thumbnail {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
        }
        .story-video {
          width: 100%;
          height: 300px;
        }
        .story-info {
          padding: 10px;
          text-align: center;
          flex: 1;
        }
        .story-title {
          font-size: 16px;
          font-weight: bold;
          margin: 5px 0;
        }
        .story-description {
          font-size: 12px;
          margin: 5px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .expanded {
          overflow: visible;
          display: block;
          -webkit-line-clamp: unset;
        }
        .collapsed {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .story-container button {
          background: none;
          border: none;
          color: #007bff;
          cursor: pointer;
          text-decoration: underline;
        }
        .story-container button:hover {
          text-decoration: none;
        }
      `}</style>
    </BaseLayout>
  );
};

export default Home;
