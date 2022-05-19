import './footer.css';
import { Link } from 'react-router-dom';

// import icons
import { FaFacebook, FaInstagram, FaYoutube, FaTelegram} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <div className="container footer">
            <div className="footer-box">
                <div className="footer-header">О нас:</div>
                <Link to='/' className="foot-link">О НАС</Link>
                <Link to='/' className="foot-link">НАШИ КЛИЕНТЫ</Link>
                <Link to='/' className="foot-link">НАША КОМАНДА</Link>
                <Link to='/' className="foot-link">ПОЛИТИКА КАЧЕСТВА</Link>
                <Link to='/' className="foot-link">ВАКАНСИИ</Link>
                <div className="foot-social-box">
                    <a className='foot-social-icon' href="https://rauto-com.netlify.app">
                        <FaFacebook/>
                    </a>
                    <a className='foot-social-icon' href="https://rauto-com.netlify.app">
                        <FaInstagram/>
                    </a>
                    <a className='foot-social-icon' href="https://rauto-com.netlify.app">
                        <FaYoutube/>
                    </a>
                    <a className='foot-social-icon' href="https://rauto-com.netlify.app">
                        <FaTelegram/>
                    </a>
                </div>
            </div>
            <div className="footer-box">
                <div className="footer-header">Акции:</div>
                <Link to='/' className="foot-link">ПОКУПАЙ КАСКО И ПОЛУЧАЙ РАСШИРЕНИЕ НА 100 000 ГРН В ПОДАРОК!</Link>
                <Link to='/' className="foot-link">УСЛУГА ТРЕЙД-ИН = НОВОЕ АВТО + ПОДАРОК!!!</Link>
            </div>
            <div className="footer-box">
                <div className="footer-header">Эксклюзивно:</div>
                <Link to='/' className="foot-link">СОБСТВЕННЫЙ ИМПОРТ АВТО ИЗ КОРЕИ</Link>
                <Link to='/' className="foot-link">СОБСТВЕННЫЙ ИМПОРТ АВТО ИЗ ЕВРОПЫ</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer


