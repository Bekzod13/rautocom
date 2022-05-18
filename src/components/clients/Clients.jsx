import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './clients.css';


// import icons
import {RiArrowRightSLine} from 'react-icons/ri';

// import images
import newCar from '../../images/cards/card.jpg';


// for fake data
const data = [
    {
        id: 1,
        name: "Hyundai Sonata LPI SMART 2016",
        price: "9999",
        description: "В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект летней резины...",
        image: newCar
    },
    {
        id: 2,
        name: "Hyundai Sonata LPI SMART 2016",
        price: "9999",
        description: "В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект летней резины...",
        image: newCar
    },
    {
        id: 3,
        name: "Hyundai Sonata LPI SMART 2016",
        price: "9999",
        description: "В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект летней резины...",
        image: newCar
    },
    {
        id: 4,
        name: "Hyundai Sonata LPI SMART 2016",
        price: "9999",
        description: "В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект летней резины...",
        image: newCar
    },
    {
        id: 5,
        name: "Hyundai Sonata LPI SMART 2016",
        price: "9999",
        description: "В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект летней резины...",
        image: newCar
    },
    {
        id: 6,
        name: "Hyundai Sonata LPI SMART 2016",
        price: "9999",
        description: "В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект летней резины...",
        image: newCar
    },
    {
        id: 7,
        name: "Hyundai Sonata LPI SMART 2016",
        price: "9999",
        description: "В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект летней резины...",
        image: newCar
    },
    {
        id: 8,
        name: "Hyundai Sonata LPI SMART 2016",
        price: "9999",
        description: "В НАЛИЧИИ! ОФИЦИАЛЬНЫЙ автомобиль! Сборка Япония. ЗИМНЯЯ рези на НОВАЯ! В ПОДАРОК комплект летней резины...",
        image: newCar
    },
]


const Clients = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        beforeChange: (current, next)=>setSlideIndex(next),
        appendDots: (dots) => (
            <div>
              <ul style={{ marginTop: "20px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (current, next) => (
            <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
            </div>
          ),
          responsive: [
            {
              breakpoint: 880,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
      };

  return (
    <>
        <div className="client-header">
            НАШИ КЛИЕНТЫ
        </div> 
        <div className="client-header-line"></div>  
        <div className="container">
            <div className="client-slider">
                <Slider {...settings}>
                    {
                        data.map(item=>(
                            <div key={item.id} className="client-slide">
                                <div className="client-slide-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="client-slide-name">{item.name}</div>
                                <div className="client-slide-description">{item.description}</div>
                                <div className="client-slide-price">{item.price} <span>USD</span></div>
                                <div className="client-slide-links">
                                    <Link to="/" className="client-slide-link">Подробнее</Link>
                                    <Link to="/" className="client-slide-link">Подробнее</Link>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
        <Link to="/" className="new-auto-show-more client-bottom-btn ">
            ВСЕ ПРЕДЛОЖЕНИЯ  <RiArrowRightSLine/><RiArrowRightSLine/><RiArrowRightSLine/>
        </Link>
    </>
  )
}

export default Clients