import React, { useState, useEffect } from "react";
import "./ProductSlider.css"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
function CustomSlider({ children }) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDone, setSlideDone] = useState(true);
    const [timeID, setTimeID] = useState(null);
  
    useEffect(() => {
      if (slideDone) {
        setSlideDone(false);
        setTimeID(
          setTimeout(() => {
            slideNext();
            setSlideDone(true);
          }, 3000)
        );
      }
    }, [slideDone]);
  
    const slideNext = () => {
      setActiveIndex((val) => {
        if (val >= children.length - 1) {
          return 0;
        } else {
          return val + 1;
        }
      });
    };
  
    const slidePrev = () => {
      setActiveIndex((val) => {
        if (val <= 0) {
          return children.length - 1;
        } else {
          return val - 1;
        }
      });
    };
  
    const AutoPlayStop = () => {
      if (timeID > 0) {
        clearTimeout(timeID);
        setSlideDone(false);
      }
    };
  
    const AutoPlayStart = () => {
      if (!slideDone) {
        setSlideDone(true);
      }
    };

  return (
    <div className='product-slider-main-continer'>
          <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => {
        return (
          <div
            className={"slider__item slider__item-active-" + (activeIndex + 1)}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="container__slider__links">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "container__slider__links-small container__slider__links-small-active"
                  : "container__slider__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>

      <button
        className="slider__btn-next left-button"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        <ChevronRightIcon style={{backgroundColor:"#fff", fontSize:"40px", color:"#AAA"}} />
      </button>
      <button
        className="slider__btn-prev right-button"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        <KeyboardArrowLeftIcon style={{backgroundColor:"#fff", fontSize:"40px", color:"#AAA"}} />
      </button>
    </div>
    </div>
  )
}



const images = [
    {
      imgURL:
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b2132b52f8b2c7dd.jpg?q=20",
      imgAlt: "img-1"
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/97c710b1b8b764df.png?q=20",
      imgAlt: "img-2"
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/440bf37588e0418e.png?q=20",
      imgAlt: "img-3"
    },
    {
      imgURL:
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d3a2f1f5dfa35719.png?q=20",
      imgAlt: "img-4"
    },
    {
        imgURL:
          "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/26a151c733bd1852.png?q=20",
        imgAlt: "img-5"
      },
      {
          imgURL:
            "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/26a151c733bd1852.png?q=20",
          imgAlt: "img-6"
        }
  ];

export default function Appmain() {
    return (
      <div className="App">
        <CustomSlider>
          {images.map((image, index) => {
            return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
          })}
        </CustomSlider>
      </div>
    );
  }




//export default ProductSlider