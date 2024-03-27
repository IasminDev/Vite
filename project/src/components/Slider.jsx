import Slider from "react-slick";
import { Card } from "./Card";
import style from "../Carousel.module.css"

export default function SimpleSlider(item) {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <Slider {...settings}>
            <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
        <div>
            <div className={style.selectionsSlider}>
            <Card
                image="../../src/assets/images/tea.png"
            />
            </div>
        </div>
        <div>
            <div className={style.selectionsSlider}>
            <Card
                image="../../src/assets/images/latte.png"
            />
            </div>
        </div>
        <div>
            <div className={style.selectionsSlider}>
            <Card
                image="../../src/assets/images/iced-coffee.png"
            />
            </div>
        </div>
        <div>
            <div className={style.selectionsSlider}>
            <Card
                image="../../src/assets/images/tea.png"
            />
            </div>
        </div>
        <div>
            <div className={style.selectionsSlider}>
            <Card
                image="../../src/assets/images/latte.png"
            />
            </div>
        </div>
        <div>
            <div className={style.selectionsSlider}>
            <Card
                image="../../src/assets/images/iced-coffee.png"
            />
            </div>
        </div>
      </Slider>
    );
  }