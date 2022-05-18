import TooltipSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './form.css';

const Form = () => {
  return (
    <div className='form'>
      <div className="create-from-container">
        <div className="create-form-box">
          <div className="form-header">
            Купить автомобиль
          </div>
          <div className="form-title">Кузов</div>
          <select className='form-select' >
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
                defaultValue={[2300, 7500]}
                tipFormatter={(value) => `${value}!`}
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
              <input type="number" value={2500} />
            </div>
            <div className="form-input-box">
              <span>К</span>
              <input type="number" value={2500} />
            </div>
          </div>
          <div className="form-title">Километраж</div>
          <div className="form-range">
            <TooltipSlider
                range
                min={0}
                max={10000}
                defaultValue={[2300, 7500]}
                tipFormatter={(value) => `${value}!`}
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
              <input type="number" value={2500} />
            </div>
            <div className="form-input-box">
              <span>К</span>
              <input type="number" value={2500} />
            </div>
          </div>
          <div className="form-title">Цена</div>
          <div className="form-range">
            <TooltipSlider
                range
                min={0}
                max={10000}
                defaultValue={[2300, 7500]}
                tipFormatter={(value) => `${value}!`}
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
              <input type="number" value={2500} />
            </div>
            <div className="form-input-box">
              <span>К</span>
              <input type="number" value={2500} />
            </div>
          </div>
        <div className="new-auto-show-more form-btn">Продать автомобиль</div>

      </div>
      <div className="create-form-box">
        <div className="form-header">
            Купить автомобиль
          </div>
          <div className="form-title">Цена</div>
      <div className="new-auto-show-more form-btn">Продать автомобиль</div>
      </div>
    </div>
    </div>
  )
}

export default Form