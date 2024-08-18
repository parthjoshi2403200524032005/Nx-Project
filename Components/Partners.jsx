import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import apollotransperant from "../public/apollotransperant.png";
import fortisransperant from "../public/fortistransperant.png";
import lilavathitransperant from "../public/lilavathitransperant.png";
import medantatransperant from "../public/medantatransperant.png";
import meenakshitransperant from "../public/meenakshitransperant.png";
import { Typography, useMediaQuery } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Heading = ({ text, size }) => (
  <Typography
    variant="h2"
    component="h2"
    sx={{
      fontSize: { xs: 30, sm: 35, lg: size ? 48 : 48 },
      letterSpacing: 1.5,
      lineHeight: "40px",
      textAlign: "center",
      fontWeight: "600",
    }}
  >
    {text}
  </Typography>
);

const settings = {
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 1100,
  slidesToShow: 5,
  slidesToScroll: 1,
  draggable: true,
  swipe: true,
  responsive: [
    {
      breakpoint: 580,
      settings: {
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },
    {
      breakpoint: 787,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        autoplay: true,
      },
    },
  ],
};

export default function Partners() {
  return (
    <div
      style={{
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "85%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom:"5rem"
      }}
    >
      <style jsx>{`
        .image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 180px;
          height: 140px;
          margin: 0.5rem;
          padding: 0.2rem;
          border-radius: 12px;
          border: 1px solid #f1f1f1;
          box-shadow: rgb(214, 214, 214) 1px 2px 2px 0px;
          background-color: #fff;
        }

        @media (min-width: 576px) {
          .image-wrapper {
            max-width: 180px;
            max-height: 140px;
            margin: 0.5rem;
          }

          .slick-dots {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .image-wrapper {
            max-width: 94px;
            max-height: 87px;
            margin-bottom: 0;
          }

          .slick-dots {
            bottom: 50px;
          }
        }
      `}</style>

      <Heading text={"Our Trusted Partners"} />
      <p
        className="d-none d-sm-flex text-md mt-4 text-gray-500 font-normal leading-5"
        style={{
          color: "rgba(38, 38, 38, 0.60)",
          fontSize: "22px",
          fontFamily: "Helvetica",
        }}
      >
        We work with Countries Top Hospitals, around the world
      </p>
      <p
        className="d-sm-none text-center text-sm mt-4 text-gray-500 font-normal leading-7"
        style={{
          color: "#A1A1A1",
          fontSize: "16px",
          letterSpacing: "0.8px",
          fontWeight: "400",
          fontFamily: "Helvetica",
        }}
      >
        We work with Countries Top Hospitals, around the world
      </p>
      <div
        style={{
          marginTop: "1rem",
          width: "100%",
        }}
      >
        <Slider {...settings}>
          <div className="image-container">
            <div className="image-wrapper">
              <Image
                className="partner-image"
                src={apollotransperant}
                alt="Apollo"
                width={100}
                height={100}
                priority
              />
            </div>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <Image
                className="partner-image"
                src={fortisransperant}
                alt="Fortis"
                width={150}
                height={140}
                priority
              />
            </div>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <Image
                className="partner-image"
                src={lilavathitransperant}
                alt="Lilavati"
                width={150}
                height={140}
                priority
              />
            </div>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <Image
                className="partner-image"
                src={medantatransperant}
                alt="Medanta"
                width={190}
                height={140}
                priority
              />
            </div>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <Image
                className="partner-image"
                src={meenakshitransperant}
                alt="Meenakshi"
                width={190}
                height={140}
                priority
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
