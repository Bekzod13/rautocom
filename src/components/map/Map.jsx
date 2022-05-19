import './map.css';

const Map = () => {

  return (
    <div id='contact' className='map'>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.150151276485!2d69.22639781506818!3d41.26206651171833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a79dc1f2c67%3A0xd1bf027623674052!2z0JDQstGC0L7RgdCw0LvQvtC9ICJBVVRPIExFQURFUiI!5e0!3m2!1suz!2s!4v1652933915299!5m2!1suz!2s" 
        width="100%" 
        height="300" 
        style={{border:0}} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade" 
        title='map' />
    </div>
  )
}

export default Map
