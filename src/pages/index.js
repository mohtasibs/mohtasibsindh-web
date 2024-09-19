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

  const cards = [
    
    
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
    // {
    //   image: "w-3.mp4",
    //   title: "1st Batch Session",
    //   subtitle:
    //     "1st Batch of Sindh Ombudsman Ambassador from Sindh Madressatul Islam University visited Ombudsman Office for follow up Session",
    //   new: "Whats New",
    // },
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
              <Link href="/MakeAComplaint/MakeAComplaintOnline">
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

      <section className="container mt-5 our-value-system p-3">
        <div className="row m-2 justify-content-center align-items-center ">
          <div className="col-lg-4 text-center mb-4">
            <Image
              className="img-fluid  mx-auto  mt-3 "
              src={ombuds}
              alt="ombudsmanimg"
              width={300}
              height={450}
            />
          </div>
          <div className="col-md-8">
            <strong>
              {" "}
              <h2 className="values-system-heading d-flex">
                MESSAGE FROM OMBUDSMAN SINDH
              </h2>{" "}
            </strong>
            <p className="ombudsman-message-text mt-2 " align="justify">
              I am delighted to extend a warm welcome to you on the website of
              the office of the Ombudsman Sindh. This platform has been created
              with the aim of offering direct accessibility to everyone,
              especially to citizens aggrieved by the act of maladministration
              of any Department/Agency of Government of Sindh. Our commitment is
              to address public complaints with effectiveness, efficiency and
              transparency. Our aim is to improve public administration through
              independent objective and impartial investigation and would
              treasure your valuable input to keep improving our quality of
              service.
            </p>
            <p className="ombudsman-message-text mt-2 ">Mr. Muhammad Sohail Rajput </p>
            {/* <div className="ms-5">
              <p className="ombudsman-message-text ms-5"> P.A.S</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* vision and mission */}

      <section className="mx-auto p-5 container vision-missionbg  bg-dark text-white row mt-5 pt-5 pb-5 downward">
        <div className="col-md-6 p-2">
          <div className="card-body">
            <div className="row">
              <div className="col-3 d-flex align-items-center">
                <Image className="img" src={vision} alt="Image 1" />
              </div>
              <div className="col-9">
                <strong>
                  {" "}
                  <h2 className="card-title mb-2">OUR VISION</h2>
                </strong>
                <p className="">
                  To promote high standards of governance, and efficiency
                  through administrative justice services.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2 ">
          <div className="card-body">
            <div className="row">
              <div className="col-3 d-flex align-items-center">
                <Image
                  className="img"
                  src={mission}
                  alt="Image 1"
                  width={150}
                  height={150}
                />
              </div>
              <div className="col-9">
                <strong>
                  {" "}
                  <h2 className="card-title mb-2">OUR MISSION</h2>
                </strong>
                <p className="">
                  To effectively and comprehensively address public grievances
                  in a fair, prompt, transparent, equitable, and efficient
                  manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {Order Justice mandate} */}
      <section className=" registration-wrap">
        <div className="container p-5">
          <div className="row align-items-center ">
            <div className="col-md-4">
              <div className="registration-content">
                <h2>WHAT IS OUR MANDATE?</h2>
                <div className="borders"></div>
                <p align="justify">
                  The Ombudsman Sindh has the mandate to protect the rights of
                  the people, ensuring adherence to the rule of law, diagnosing,
                  redressing and rectifying any injustice done to a person
                  through maladministration and administrative injustice.
                </p>
                <Link className="learn-more" href="/About/OurCharter">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="col-md-8 ">
              <div className="img-section">
                <div className="left-image">
                  <Image
                    className="ms-4"
                    src={supreme}
                    alt="mandate-image"
                    width={500}
                    height={600}
                  />
                </div>
                {/* <div className="right-image">
                  
                  <Image
                    className=""
                    src={rightimg}
                    alt="right-img"
                    width={350}
                    height={350}
                  />
                </div> */}
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
          {/* <div className="col-6 d-flex justify-content-center">

            <div className="vision-missionbg our-value-system downing bg-dark text-white" onClick={() => showData(2)}>
              <h1 className="counter-heading">COMPLAINTS PROCESS</h1>
            </div>

          </div> */}

          <div className="col-6 d-flex justify-content-center">
            <div
              className="vision-missionbg our-value-system downing bg-dark text-white"
              onClick={() => showData(1)}
            >
              <h1 className="counter-heading">COMPLAINTS PROCESS</h1>
            </div>
          </div>
        </div>

        <div className="col-md-12 container  our-value-system p-5">
          {/* <div id="data1" className="col-md-12 container p-3" style={{ display: activeData === 1 ? 'block' : 'none' }}>
            <div className="row justify-content-center">

              <div className="col-md-4 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFileEarmarkCheck className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={455} />
                  </div>
                  <div className="values-system-para">Disposed of after preliminary scrutiny
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <FaGlobeAmericas className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={178} />
                  </div>
                  <div className="values-system-para">Referred to department for necessary action (u/s 33)
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <GiNotebook className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={474} />
                  </div>
                  <div className="values-system-para">Decided after detailed investigation</div>
                </div>
              </div>

            </div>
          </div> */}

          <div
            id="data1"
            className="col-md-12 container p-3"
            style={{ display: activeData === 1 ? "block" : "none" }}
          >
            <div className="row justify-content-center">
              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillPhoneVibrateFill className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={1654} />
                  </div>
                  <div className="values-system-para">
                    By Electronic Means / Online
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillSignpostFill className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={110} />
                  </div>
                  <div className="values-system-para"> By Post</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillPeopleFill className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={84} />
                  </div>
                  <div className="values-system-para">In Person</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <GiNotebook className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={1584} />
                  </div>
                  <div className="values-system-para">
                    Complaints Disposed Off
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div id="data3" className="col-md-12 container p-3" style={{ display: activeData === 3 ? 'block' : 'none' }}>
            <div className="row justify-content-center">
              <h1 className="text-center big-text mb-4 mt-4">Performance Achieved</h1>
              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillCalendarCheckFill className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={150} />
                  </div>
                  <div>100% Complaints Closed Within 15 days</div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillCalendarCheckFill className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={350} />
                  </div>
                  <div> Complaints Concluded Within 1 month</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillCalendarCheckFill className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={1200} />
                  </div>
                  <div>Complaints Concluded Within 3 month</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12 mb-3 text-center">
                <div className="d-flex flex-column align-items-center">
                  <BsFillCalendarCheckFill className="counter-icon mt-3" />
                  <div className="big-text">
                    <Counter number={2275} />
                  </div>
                  <div>Complaints Concluded Within 6 month</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Accordion */}
      <section className="mt-5 mb-5 container">
        <div
          className="accordion accordion-flush container mt-5"
          id="accordionFlushExample"
        >
          <div className="accordion-item item-1">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <MdWork className=" me-3 values-system-heading" /> What we Do
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-dark values-system-para text-white">
                We resolve complaints and provide relief to the public by
                carrying out independent investigations into complaints about
                maladministration in any Government of Sindh agency. We work to
                put things right and share lessons learned and help improve
                public services as a result. Our independent complaints handling
                service is free and open to everyone.
              </div>
            </div>
          </div>
          <div className="accordion-item item-2">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <MdWorkOff className=" me-3" /> What We Dont Do
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-dark text-white">
                <p className="values-system-para mt-2 pe-3">
                  We cannot help you if your complaint is about:
                </p>
                <li className="values-system-para mt-2 pe-3">
                  Matters that are sub-judice (i.e. already under consideration
                  of any court of law)
                </li>
                <li className="values-system-para mt-2 pe-3">
                  Service matters
                </li>
                <li className="values-system-para mt-2 pe-3">
                  External affairs
                </li>
                <li className="values-system-para mt-2 pe-3">
                  Defence matters
                </li>
              </div>
            </div>
          </div>
          <div className="accordion-item item-3">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <BsFillPatchQuestionFill className=" me-3" /> How Can We Help
                You
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-dark text-white">
                <ul>
                  <p className="values-system-para mt-2 pe-3">
                    We are an independent statuary body that promotes good
                    governance and protect human rights;
                  </p>

                  <p className="values-system-para mt-2 pe-3">
                    We aim to redress public grievances as fairly and as quickly
                    as we can, after examining all facts. If we think the Agency
                    you are complaining about has treated you fairly, we will
                    tell you.
                  </p>

                  <p className="values-system-para mt-2 pe-3">
                    If we determine that the Agency has acted wrongly, we will
                    recommend the Agency to put things right for you. This can
                    include recommending that the Agency provide you relief
                    sought and to treat you fairly and in accordance with law.
                  </p>
                  <p className="values-system-para mt-2 pe-3">
                    To deliver free of cost and administrative justice by
                    performing the role of bridge between the public and
                    Government Departments/agencies.
                  </p>
                  <p className="values-system-para mt-2 pe-3">
                    Ombudsman Sindh accords high priority to hardship cases
                    relating to marginalized section of society specially
                    widows, children, pensioners, differently abled persons and
                    those below the poverty line;
                  </p>
                  <p className="values-system-para mt-2 pe-3">
                    Informal resolution of disputes;
                  </p>
                  <p className="values-system-para mt-2 pe-3">
                    Own Motion (Suo-Moto Power) is the unique feature of this
                    institute.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <section className="container mb-5 d-flex justify-content-center align-items-center stories-wrapper">
        <div className="row stories-card">
          <h2 className="h2 mt-5 text-center">Success Stories</h2>
          <div className="col-md-6 p-2 d-flex justify-content-center">
            <article className="story-container">
              <div className="story-thumbnail">
                <video controls className="story-video">
                  <source src="/suvideo1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="story-info">
                <h2 className="story-title">Success Story 1</h2>
                <p className={`story-description ${expandedStories[1] ? "expanded" : "collapsed"}`}>
                  Mr. Khalique Zaman Soomro filed complaint No. POS/3844/2023 with the Honorable Ombudsman Sindh regarding the posting of Male and Female Medical Officers at BHU Village Yousif Soomro and the restoration of the solar system. Following the intervention of this institution, the issue has been resolved. Male and Female Medical Officers have been assigned to BHU Village Yousif Soomro, and the solar system has been restored. The complainant is satisfied and has expressed profound gratitude to the Honorable Ombudsman Sindh and the Regional Director of Badin for addressing and resolving the problem.
                </p>
                <button className="btn btn-link p-0" onClick={() => toggleText(1)}>
                  {expandedStories[1] ? "Show less" : "Show more"}
                </button>
              </div>
            </article>
          </div>
          <div className="col-md-6 p-2 d-flex justify-content-center">
            <article className="story-container">
              <div className="story-thumbnail">
                <video controls className="story-video">
                  <source src="/suvideo2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="story-info">
                <h2 className="story-title">Success Story 2</h2>
                <p className={`story-description ${expandedStories[2] ? "expanded" : "collapsed"}`}>
                  Miss Dua Solangi, a resident of First Family Lane, Jacobabad, filed a complaint against the XEN Public Health Jacobabad and the Assistant Manager of State Life Insurance regarding the payment of the Group Insurance (GI) for her late father. Following the intervention of this institute, she received an amount of 350,000. Miss Solangi has expressed her deep gratitude to the Ombudsman Sindh for their assistance in resolving this matter.
                </p>
                <button className="btn btn-link p-0" onClick={() => toggleText(2)}>
                  {expandedStories[2] ? "Show less" : "Show more"}
                </button>
              </div>
            </article>
          </div>
          <Link
            className="learn-more mt-3 ms-3 values-system-para text-success"
            href="/WhatsNew"
          >
            Load more
          </Link>
        </div>
      </section>


      {/* bottomcards */}
      <section className="wrapper-justice mb-5">
        <div className="container-fluid">
          <div className="target-items d-flex justify-content-center align-items-center">
            <Link href="/About/OurCommitment">
              <div className="card-items">
                <Image
                  className="card-image"
                  src={bottom3}
                  alt="who we are"
                  width={200}
                  height={200}
                />
                <div className="card-body-content">
                  <div className="borders"></div>
                  <h3 className="title">Our Commitment</h3>
                  <p className="text">
                    We are committed to redress of public grievances in an
                    efficient, effective and transparent manner.
                  </p>
                  <div className="arrow-border">
                    <BsArrowRight className="arrow-left" />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/About/OurCharter">
              <div className="card-items">
                <Image
                  className="card-image"
                  src={bottom2}
                  alt="our charter"
                  width={500}
                  height={500}
                />
                <div className="card-body-content">
                  <div className="borders"></div>
                  <h3 className="title">Our charter</h3>
                  <p className="text">
                    We are committed to redress of public grievances in an
                    efficient, effective and transparent manner.
                  </p>
                  <div className="arrow-border">
                    <BsArrowRight className="arrow-left" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/About/TheSecratariat">
              <div className="card-items">
                <Image
                  className="card-image"
                  src={bottom1}
                  alt="right-img"
                  width={200}
                  height={200}
                />
                <div className="card-body-content">
                  <div className="borders"></div>
                  <h3 className="title">The Secretariat</h3>
                  <p className="text">
                    The Provincial Ombudsman (Mohtasib) Sindhs Secretariat is
                    located in Karachi and is headed by ombudsman sindh through
                    secretary
                  </p>
                  <div className="arrow-border">
                    <BsArrowRight className="arrow-left" />
                  </div>
                </div>
              </div>
            </Link>
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
