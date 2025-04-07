import React from "react";
import { FilePenLine, ImageDown, Share2 } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderOne from "../../images/sliderOne.svg";
import sliderTwo from "../../images/sliderTwo.svg";

function BusinessCardSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1.5,
    initialSlide: 0,
  };
  return (
    <>
      <div className="business-card-title">
        <h3>Business Card</h3>
        <button className="btn btn-edit-slider">
          <FilePenLine size={16} strokeWidth={1} /> Edit
        </button>
      </div>
      <div className="slider-container py-100 pt-0">
        <Slider {...settings}>
          <div className="slider-image">
            <img src={sliderOne} className="img-fluid" alt="" />
          </div>
          <div className="slider-image">
            <img src={sliderTwo} className="img-fluid" alt="" />
          </div>
          <div className="slider-image">
            <img src={sliderOne} className="img-fluid" alt="" />
          </div>
          <div className="slider-image">
            <img src={sliderTwo} className="img-fluid" alt="" />
          </div>
        </Slider>
      </div>
      <div>
        <div className="business-card-flex">
          <button className="btn-download">
            <ImageDown size={16} strokeWidth={1} /> Download
          </button>
          <button className="btn-share">
            <Share2 size={16} strokeWidth={1} /> Share
          </button>
        </div>
      </div>
    </>
  );
}

export default BusinessCardSlider;
