import { useState } from 'react';
import TooltipSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './form.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import icons
import {BiUser} from 'react-icons/bi';
import {BsPhone} from 'react-icons/bs';
import {MdOutlineMailOutline} from 'react-icons/md';

const Form = () => {

  const [carYears, setCarYears] = useState([2500, 7500]);
  const [kilometrs, setKilometrs] = useState([2500, 7500]);
  const [prices, setPrices] = useState([2500, 7500]);

  AOS.init();
  return (
    <div className='form'>
      <div className="create-from-container">
        <div className="create-form-box"   data-aos="zoom-in">
          <div className="form-header">
            Купить автомобиль
          </div>
          <div className="form-title">Кузов</div>
          <select className='form-select'>
            <option value="Хетчбек">Хетчбек</option>
            <option value="Кроссовер">Кроссовер</option>
            <option value="Седан">Седан</option>
            <option value="Хетчбек" selected >Универсал</option>
          </select>
          <div className="form-title">Год выпуска</div>
          <div className="form-range">
            <TooltipSlider
                range
                min={0}
                max={10000}
                defaultValue={[carYears[0], carYears[1]]}
                onAfterChange={(value)=>setCarYears(value)}
                railStyle={{ 
                  backgroundColor: '#fff', 
                  height: 10, 
                  border: "1px solid var(--gray)",
                  borderRadius: "2px"
                }}
                trackStyle={{ 
                  backgroundColor: '#ccc', 
                  height: 10 ,
                  border: "1px solid var(--gray)",
                }}
                handleStyle={{
                  borderColor: 'var(--gray)',
                  height: "15px",
                  width: "15px",
                  marginTop: -3,
                  backgroundColor: '#999',
                  opacity: 1,
                  borderRadius: 3
                }}
              />
          </div>
          <div className="form-inputs">
            <div className="form-input-box">
              <span>От</span>
              <input type="number" value={carYears[0] } />
            </div>
            <div className="form-input-box">
              <span>К</span>
              <input type="number" value={carYears[1]} />
            </div>
          </div>
          <div className="form-title">Километраж</div>
          <div className="form-range">
            <TooltipSlider
                range
                min={0}
                max={10000}
                defaultValue={[kilometrs[0], kilometrs[1]]}
                onAfterChange={(value)=>setKilometrs(value)}
                railStyle={{ 
                  backgroundColor: '#fff', 
                  height: 10, 
                  border: "1px solid var(--gray)",
                  borderRadius: "2px"
                }}
                trackStyle={{ 
                  backgroundColor: '#ccc', 
                  height: 10 ,
                  border: "1px solid var(--gray)",
                }}
                handleStyle={{
                  borderColor: 'var(--gray)',
                  height: "15px",
                  width: "15px",
                  marginTop: -3,
                  backgroundColor: '#999',
                  opacity: 1,
                  borderRadius: 3
                }}
              />
          </div>
          <div className="form-inputs">
            <div className="form-input-box">
              <span>От</span>
              <input type="number" value={kilometrs[0]} />
            </div>
            <div className="form-input-box">
              <span>К</span>
              <input type="number" value={kilometrs[1]} />
            </div>
          </div>
          <div className="form-title">Цена</div>
          <div className="form-range">
            <TooltipSlider
                range
                min={0}
                max={10000}
                defaultValue={[prices[0], prices[1]]}
                onAfterChange={(value)=>setPrices(value)}
                railStyle={{ 
                  backgroundColor: '#fff', 
                  height: 10, 
                  border: "1px solid var(--gray)",
                  borderRadius: "2px"
                }}
                trackStyle={{ 
                  backgroundColor: '#ccc', 
                  height: 10 ,
                  border: "1px solid var(--gray)",
                }}
                handleStyle={{
                  borderColor: 'var(--gray)',
                  height: "15px",
                  width: "15px",
                  marginTop: -3,
                  backgroundColor: '#999',
                  opacity: 1,
                  borderRadius: 3
                }}
              />
          </div>
          <div className="form-inputs">
            <div className="form-input-box">
              <span>От</span>
              <input type="number" value={prices[0]} />
            </div>
            <div className="form-input-box">
              <span>К</span>
              <input type="number" value={prices[1]} />
            </div>
          </div>
        <div className="new-auto-show-more form-btn">Продать автомобиль</div>

      </div>
      <div className="create-form-box"  data-aos="zoom-in">
        <div className="form-header">
            Купить автомобиль
          </div>
          <div className="form-title">Марка</div>
          <input type="text" className="form-text-input" placeholder='Марка вашего автомобиля' />
          <div className="form-title">Модель</div>
          <input type="text" className="form-text-input" placeholder='Марка вашего автомобиля' />
          <div className="form-title">Год выпуска</div>
          <input type="text" className="form-text-input" placeholder='Год выпуска вашего автомобиля (цифрами). Например: 2007' />
          <div className="form-title">Пробег</div>
          <input type="text" className="form-text-input" placeholder='Пробег в км. вашего автомобиля (цифрами). Например: 25000' />
          <div className="form-title form-title-end">Контактные данные</div>
          <div className="form-end-inputs">
            <div className="form-end-input">
              <input id='imya' type="text" placeholder='Ваше Имя' />
              <label htmlFor='imya'>
                <BiUser/>
              </label>
            </div>
            <div className="form-end-input">
              <input id='telefon' type="text" placeholder='Ваш Телефон' />
              <label htmlFor="telefon">
                <BsPhone/>
              </label>
            </div>
            <div className="form-end-input">
              <input id='emayl' type="text" placeholder='Ваш Email' />
              <label htmlFor="emayl">
                <MdOutlineMailOutline/>
              </label>
            </div>
          </div>
      <div className="new-auto-show-more form-btn">Продать автомобиль</div>
      </div>
    </div>
    </div>
  )
}

export default Form