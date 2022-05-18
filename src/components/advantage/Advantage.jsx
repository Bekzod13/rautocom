import './advantage.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

// import images
import anvantageImg1 from '../../images/clients/client1.webp';
import anvantageImg2 from '../../images/clients/client2.webp';
import anvantageImg3 from '../../images/clients/client3.webp';
import anvantageImg4 from '../../images/clients/client4.webp';

import icon1 from '../../images/icons/ico1.png'
import icon2 from '../../images/icons/ico2.png'
import icon3 from '../../images/icons/ico3.png'

const icons = [
    {
        id: 1,
        name: "Минимум документов",
        description:"Вам понадобятся всего один документ - паспорт",
        image: icon1
    },
    {
        id: 2,
        name: "Привлекательные условия",
        description:"У нас действуют специальные партнерские программы с выгодными условиями по кредиту и гибкий график",
        image: icon2
    },
    {
        id: 3,
        name: "Досрочное погашение",
        description:"Возможность погасить кредит полностью или частично в любую дату без комиссий",
        image: icon3
    },
]

const advantageImages = [
    {
        id: 1,
        name: "Александр, г. Мариуполь",
        image: anvantageImg1
    },
    {
        id: 2,
        name: "Николай, г. Киев",
        image: anvantageImg2
    },
    {
        id: 3,
        name: "Александр, г. Мариуполь",
        image: anvantageImg3
    },
    {
        id: 4,
        name: "Сергей, г. Чернигов",
        image: anvantageImg4
    },
]


const Advantage = () => {

    AOS.init();

  return (
    <div className='advantage'>
        <div className="advantage-header">
            НАШИ ПРЕИМУЩЕСТВА
        </div>
        <div className="advantage-header-line"></div>
        <div className="container advantage-box">
            {
                icons.map(item=>(
                    <div className="advantage-element" key={item.id}  data-aos={item.id === 2 ? "fade-down" : "fade-up"} data-aos-duration="1000">
                        <div className="advantage-element-img">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="advantage-element-name">{item.name}</div>
                        <div className="advantage-element-description">{item.description}</div>
                    </div>
                ))
            }
        </div>
        <div className="advantage-header">
            НАШИ ПРЕИМУЩЕСТВА
        </div>
        <div className="advantage-header-line"></div>
        <div className="container advantage-examples">
            {
                advantageImages.map(item=>(
                    <div className="advantage-example" key={item.id}>
                        <div className="advantage-example-img">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="advantage-example-name">
                            {item.name}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Advantage