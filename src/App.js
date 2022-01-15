import logo from './logo.svg';
import man from './images/ring_background.png';
import location from './images/map-pin.svg';
import cart from './images/shopping-cart.svg';
import './App.css';
import Navbar from './const/Navbar/Navbar';

function App() {
  return (
    <div className="body-container">
      <Navbar/>
      <div className='center-container'>
        <div className="text-col-one">
            <h1 className="header-text">OUR FAST FOOD </h1>
            <div className='delivery_div'>
              <span className='delivery_text'>
                Delivery 
              </span>
              <h1 className='service_text'>Service</h1>
            </div>
            <p className='bottom-text'>
              Enter your location to get your nearest restaurants or get delivered foods and enjoy. Happy foodie life
            </p>
            <div className='location_div'>
              <span className='location-icon'>
                <img src={location} className='' alt="location picture"/>
              </span>
              <input type="text" className='text_input' placeholder='Portharcourt, Nigeria'/>
              <button className='find_food_btn'>Find Food</button>
            </div>
        </div>
        <div className="text-col-two">
            <img src={man} className='image_item' alt="picture of man"/>
        </div>
      </div>
    </div>
  );
}

export default App;
