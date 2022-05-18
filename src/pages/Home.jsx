
// import components
import NewAutos from '../components/newAutos/NewAutos';
import Hero from '../components/hero/Hero';
import Form from '../components/form/Form';
import Clients from '../components/clients/Clients';
import Map from '../components/map/Map';

const Home = () => {
  return (
    <>
        <Hero/>   
        <NewAutos/>
        <Form/>
        <Clients/>
        <Map/>
    </>
  )
}

export default Home