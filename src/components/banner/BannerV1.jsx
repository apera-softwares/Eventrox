import React, { useState, useEffect } from "react";
import BannerV1Data from "../../jsonData/banner/BannerV1Data.json";
import SingleBannerV1 from "./SingleBannerV1";
import Slider from "react-slick";
import {API_URL} from '../../apiConfig'

const BannerV1 = () => {


   const [eventData, setData] = useState({
        "id": 1,
        "thumb": "1.jpg",
        "subTitle": "January 20, 2024",
        "title1": "World Digital",
        "title2": "Conference 2023",
        "list1": "5000 Seats",
        "list2": "12 SPEAKERS",
        "list3": "Paulo, California",
        "btnLink": "buy-ticket",
        "btnText": "Book Now"
    },);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`${API_URL}/globals/eventDetails`);
  //       console.log(response, "response")
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const result = await response.json();
  //       setData(result);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array ensures this runs only once on component mount

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;



  const NextArrow = (props) => {
    return (
      <button className="slick-next" onClick={props.onClick}>
        <i className="fa fa-angle-right" />
      </button>
    );
  };

  const PrevArrow = (props) => {
    return (
      <button className="slick-prev" onClick={props.onClick}>
        <i className="fa fa-angle-left" />
      </button>
    );
  };

  const settings = {
    infinite: false,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    fade: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <section className="banner-section">
        <div className="banner-carousel">
          <Slider {...settings}>
            {BannerV1Data.map((banner) => (
              <SingleBannerV1 banner={banner} key={banner.id} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default BannerV1;
