import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './newAutos.css';
import 'aos/dist/aos.css';
import AOS from 'aos';


// import icons
import {FaViber, FaTelegram, FaRegDotCircle, FaBalanceScale} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BiGasPump} from 'react-icons/bi';
import {FiSettings} from 'react-icons/fi';
import {RiArrowRightSLine} from 'react-icons/ri';
import {MdOutlineSpeed} from 'react-icons/md';

// import images
import newCar from '../../images/cards/card.jpg';

const data = [
    {
        id: 1,
        name: "Hyundai Sonata LPI SMART 2016",
        broadcast: "Автомат",
        jogging: "212000",
        fuel: "Газ",
        happening: "Передный",
        price: "9999",
        wight: "336 466.35",
        image: newCar
    },
    {
        id: 2,
        name: "Hyundai Sonata LPI SMART 2016",
        broadcast: "Автомат",
        jogging: "212000",
        fuel: "Газ",
        happening: "Передный",
        price: "9999",
        wight: "336 466.35",
        image: newCar
    },
    {
        id: 3,
        name: "Hyundai Sonata LPI SMART 2016",
        broadcast: "Автомат",
        jogging: "212000",
        fuel: "Газ",
        happening: "Передный",
        price: "9999",
        wight: "336 466.35",
        image: newCar
    },
    {
        id: 4,
        name: "Hyundai Sonata LPI SMART 2016",
        broadcast: "Автомат",
        jogging: "212000",
        fuel: "Газ",
        happening: "Передный",
        price: "9999",
        wight: "336 466.35",
        image: newCar
    },
    {
        id: 5,
        name: "Hyundai Sonata LPI SMART 2016",
        broadcast: "Автомат",
        jogging: "212000",
        fuel: "Газ",
        happening: "Передный",
        price: "9999",
        wight: "336 466.35",
        image: newCar
    },
    {
        id: 6,
        name: "Hyundai Sonata LPI SMART 2016",
        broadcast: "Автомат",
        jogging: "212000",
        fuel: "Газ",
        happening: "Передный",
        price: "9999",
        wight: "336 466.35",
        image: newCar
    },
    {
        id: 7,
        name: "Hyundai Sonata LPI SMART 2016",
        broadcast: "Автомат",
        jogging: "212000",
        fuel: "Газ",
        happening: "Передный",
        price: "9999",
        wight: "336 466.35",
        image: newCar
    },
    {
        id: 8,
        name: "Hyundai Sonata LPI SMART 2016",
        broadcast: "Автомат",
        jogging: "212000",
        fuel: "Газ",
        happening: "Передный",
        price: "9999",
        wight: "336 466.35",
        image: newCar
    },
]

const NewAutos = () => {
    useEffect(() => {
        AOS.init();
      }
    , [])
    
  return (
    <div className="container new-auto">
        <h1>Новые поступления</h1>
        <div className="new-auto-social">
            <div className="new-auto-social-text">
                Подпишитесь на рассылку <span>
                    Узнавайте первыми о новых поступлениях автомобилей
                    </span> 
            </div>
            <div className="new-auto-social-box">
                <a href='https://www.google.com' className="new-auto-social-item">
                    <div className="new-auto-social-item-icon">
                        <FaViber/>
                    </div>
                    <div className="new-auto-social-item-text">
                        Viber
                    </div>
                </a>
                <a href='https://www.google.com' className="new-auto-social-item">
                    <div className="new-auto-social-item-icon">
                        <FaTelegram/>
                    </div>
                    <div className="new-auto-social-item-text">
                        Telegram
                    </div>
                </a>
                <a href='https://www.google.com' className="new-auto-social-item">
                    <div className="new-auto-social-item-icon">
                        <HiOutlineMail/>
                    </div>
                    <div className="new-auto-social-item-text">
                        E-mail
                    </div>
                </a>
            </div>
        </div>
        <div className="new-auto-container">
            {
                data.map(item=>(
                    <div key={item.id} 
                    className="new-auto-card" 
                    data-aos="flip-right"
                    data-aos-duration="1000">
                        <div className="new-auto-img">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="new-auto-name">
                            {item.name}
                        </div>
                        <div className="new-auto-settings">
                        <div className="new-auto-setting-box">
                            <div className="new-auto-setting">
                                <b>
                                    <span className="new-auto-setting-icon">
                                        <BiGasPump/>
                                    </span>
                                    Топливо: 
                                </b>
                                {item.fuel}
                            </div>
                            <div className="new-auto-setting">
                                <b>
                                    <span className="new-auto-setting-icon">
                                        <FaRegDotCircle/>
                                    </span>
                                    Случай: 
                                </b>
                                {item.happening}
                            </div>
                        </div>
                        <div className="new-auto-setting-box">
                            <div className="new-auto-setting">
                                <b>
                                    <span className="new-auto-setting-icon">
                                        <FiSettings/>
                                    </span>
                                    Передача: 
                                </b>
                                {item.broadcast}
                            </div>
                            <div className="new-auto-setting">
                                <b>
                                    <span className="new-auto-setting-icon">
                                        <MdOutlineSpeed/>
                                    </span>
                                    Пробежка: 
                                </b>
                                {item.jogging}
                            </div>
                        </div>
                        </div>
                        <div className="new-auto-price">
                            Ціна з ПДВ: <span>{item.price} </span>  USD {item.wight} грн.
                        </div>
                        <Link to='/' className="new-auto-btn">
                            Подробнее
                        </Link>
                        <div className='new-auto-bottom'>
                            <Link to='/' className='new-auto-bottom-link'>
                                Добавить для сравнения
                            </Link>
                            <span className="new-auto-bottom-icon">
                                <FaBalanceScale/>
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
        <Link to="/" className="new-auto-show-more">
            ПОКАЗАТИ ВСІ АВТОМОБІЛІ <RiArrowRightSLine/><RiArrowRightSLine/><RiArrowRightSLine/>
        </Link>
    </div>
  )
}

export default NewAutos
