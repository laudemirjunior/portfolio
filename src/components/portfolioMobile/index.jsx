import React, { useState } from "react";
import { ContainerMobile } from "./styles";
import Slider from "react-slick";
import { databaseMobile } from "../../services/databaseMobile";
import Button from "../button";
import Pagination from "../pagination";

export default function PortfolioMobile() {
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(1);
  const [newImage, setImage] = useState({});
  const [show, setShow] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <ContainerMobile>
      <div className="mobile__slider">
        {databaseMobile.slice(start, finish).map((item, index) => (
          <div key={index}>
            <h1>{item.name} Mobile</h1>;
            <p>
              {item.description
                ? item.description
                : "Esta aplicação ainda não possui uma descrição."}
            </p>
            <div className="mobile__button">
              <Button children="GitHub" />
            </div>
            <Slider {...settings}>
              {item.img.map((image, index) => (
                <img
                  src={image.default}
                  alt=""
                  key={index}
                  onClick={() => {
                    setImage(image.default);
                    setShow(!show);
                  }}
                />
              ))}
            </Slider>
          </div>
        ))}
      </div>
      <Pagination
        database={databaseMobile}
        start={start}
        setStart={setStart}
        finish={finish}
        setFinish={setFinish}
        perPage={1}
      />
      {show && (
        <div className="image" onClick={() => setShow(!show)}>
          <img className="show" src={newImage} alt="" />
        </div>
      )}
    </ContainerMobile>
  );
}
