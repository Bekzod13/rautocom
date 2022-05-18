import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

// import icons
import {GrLocation, GrMailOption} from 'react-icons/gr';
import {FaBalanceScale, FaBars, FaHandshake, FaAngleLeft, FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import {HiOutlineDeviceMobile} from 'react-icons/hi';
import {MdOutlineStoreMallDirectory, MdOutlinePhoneEnabled, MdPhoneInTalk} from 'react-icons/md';
import {BiCar, BiSearch} from 'react-icons/bi';
import {AiOutlineInfoCircle, AiOutlineMail} from 'react-icons/ai';
import {HiOutlineUser, HiLocationMarker} from 'react-icons/hi';
import {IoMdClose} from 'react-icons/io';
import logo from '../../images/logo.png';

const Navbar = () => {

    const [navToggle, setnavToggle] = useState(false)

  return (
    <>
        <nav>
            <div className="nav-info-bg">
            <div className="nav-info container">
                <a href="tel:+998951690988" className="nav-info-link nav-info-link-number1">
                    <span className="nav-info-icon nav-info-icon-search">
                        <BiSearch/>
                    </span>
                </a>
                <a href="/#contact" className="nav-info-link">
                    <span className="nav-info-icon">
                        <GrLocation/>
                    </span>
                    <span>
                        г.Ташкент, ул. Усмона Носира 113
                    </span>
                </a>
                <div className='nav-info-center'>

                <a href="tel:+998951690988" className="nav-info-link nav-info-link-number">
                    <span className="nav-info-icon">
                        <HiOutlineDeviceMobile/>
                    </span>
                    <span>
                        +99895 169 09 88
                    </span>
                </a>
                <a href="info@rauto.uz" className="nav-info-link">
                    <span className="nav-info-icon">
                        <GrMailOption/>
                    </span>
                    <span>
                        info@rauto.uz
                    </span>
                </a>
                </div>
                <div className="nav-info-actions">
                    <Link to="/" className="nav-info-action">
                        <BiSearch/>
                    </Link>
                    <Link to="/" className="nav-info-action">
                        <FaBalanceScale/>
                    </Link>
                    <Link to="/" className="nav-info-action">
                        $ 33.70
                    </Link>
                </div>
                <div className="bar" onClick={()=>setnavToggle(true)}>
                    <FaBars/>
                </div>
            </div>
            </div>
            
            <div className="container nav-main">
                <Link to="/" className='logo'>
                    <img src={logo} alt="logo" />
                </Link>
                <div className="nav-main-items">
                    <Link to="/" className="nav-item">
                        <span className="nav-item-icon">
                            <MdOutlineStoreMallDirectory/>
                        </span>
                        <span>Главная</span>
                    </Link>
                    <Link to="/" className="nav-item">
                        <span className="nav-item-icon">
                            <BiCar/>
                        </span>
                        <span>Автомобили</span>
                    </Link>
                    <Link to="/" className="nav-item">
                        <span className="nav-item-icon">
                            <FaHandshake/>
                        </span>
                        <span>Поуслуги</span>
                    </Link>
                    <Link to="/" className="nav-item">
                        <span className="nav-item-icon">
                            <AiOutlineInfoCircle/>
                        </span>
                        <span>Компания</span>
                    </Link>
                    <Link to="/" className="nav-item">
                        <span className="nav-item-icon">
                            <MdOutlinePhoneEnabled/>
                        </span>
                        <span>Контакты</span>
                    </Link>
                    <Link to="/" className="nav-item">
                        <span className="nav-item-icon">
                            <HiOutlineUser/>
                        </span>
                        <span>Вход</span>
                    </Link>
                </div>
            </div>
        </nav> 
        <div className="nav-free"></div>
        <div className="nav-animate">
            <div className="nav-anime">
                Выгодный автокредит в Узбекистане
            </div>
        </div>
        <div className={navToggle ? "nav-side active": "nav-side"}>
            <div className='nav-side-close'  onClick={()=>setnavToggle(false)}><IoMdClose/></div>
            <h2 className='nav-side-header'>Меню</h2>
            <div className="nav-side-links">
            <Link to="/" className="nav-side-link">
                <span>
                    Главная
                </span>
                <span className="nav-side-angle">
                    <FaAngleLeft/>
                </span>
            </Link>
            <Link to="/" className="nav-side-link">
                <span>
                Автомобили
                </span>
                <span className="nav-side-angle">
                    <FaAngleLeft/>
                </span>
            </Link>
            <Link to="/" className="nav-side-link">
                <span>
                Услуги
                </span>
                <span className="nav-side-angle">
                    <FaAngleLeft/>
                </span>
            </Link>
            <Link to="/" className="nav-side-link">
                <span>
                Компания
                </span>
                <span className="nav-side-angle">
                    <FaAngleLeft/>
                </span>
            </Link>
            <Link to="/" className="nav-side-link">
                <span>
                Контакты
                </span>
                <span className="nav-side-angle">
                    <FaAngleLeft/>
                </span>
            </Link>
            <Link to="/" className="nav-side-link">
                <span>
                Вход
                </span>
            </Link>
            <Link to="/" className="nav-side-link">
                <span>
                Сравнения
                </span>
            </Link>
            </div>
            <div className="nav-side-info">
                <a href="tel:+998951690988" className="nav-side-info-link">
                    <span className="nav-info-icon">
                        <MdPhoneInTalk/>
                    </span>
                    <span>
                        +99895 169 09 88
                    </span>
                </a>
                <a href="info@rauto.uz" className="nav-side-info-link">
                    <span className="nav-info-icon">
                        <AiOutlineMail/>
                    </span>
                    <span>
                        info@rauto.uz
                    </span>
                </a>
            </div>
            <div className="nav-side-social-media">
                <a href="https://translate.google.com" >
                    <FaFacebook/>
                </a>
                <a href="https://translate.google.com" >
                    <FaInstagram/>
                </a>
                <a href="https://translate.google.com" >
                    <FaYoutube/>
                </a>
            </div>
            <div className="nav-side-location">
                <HiLocationMarker/> г.Ташкент, ул. Усмона Носира 113
            </div>
        </div>
        <div className={navToggle ? "nav-side-bg active": "nav-side-bg"} onClick={()=>setnavToggle(false)}></div>
    </>
  )
}

export default Navbar






