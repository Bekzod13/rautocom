import Slider from 'react-slick';
import { Link } from "react-router-dom";
import './hero.css';

// import images
import img1 from '../../images/slider/img1.png';
import img2 from '../../images/slider/img2.png';
import img3 from '../../images/slider/img3.png';
import img4 from '../../images/slider/img4.png';

const images = [
  img1, img2, img3, img4
]

function Arrow() {
  return (
    <div></div>
  );
}

const Hero = () => {
  
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    nextArrow: <Arrow/>,
    prevArrow: <Arrow/>,
  };


  return (
    <div className="hero">
      <div className="container hero-container">
        <div className="hero-main">
          <div className="hero-header">
            Выгодный автокредит в Узбекистане
          </div>
          <p className="hero-description">
            Поможем <span> купить или продать </span>  автомобиль по выгодной цене!
          </p>
          <Link to="/" className="hero-btn">
            КОНСУЛЬТАЦИЯ
          </Link>
        </div>
        <div className="slider">
          <Slider {...settings}>
              {
                images.map((img, index)=>(
                  <div className='hero-slide' key={index}>
                    <img src={img} alt={index} />
                  </div>
                ))
              }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hero