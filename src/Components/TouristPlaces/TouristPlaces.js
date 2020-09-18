
import React from 'react';
import { Link } from 'react-router-dom';
import './TouristPlaces.css'

const TouristPlaces = (props) => {
  const {locationName, picture} = props.city;  
  
  return (
  <div className="gallery" >
    <p>{locationName}</p>     
    <img src={picture} alt=""/>        
    <Link to={"/booking/" + locationName}>     
        <button>Booking</button>
    </Link>     
   </div>     
  );
};

export default TouristPlaces;
