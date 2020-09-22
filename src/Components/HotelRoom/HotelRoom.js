import React from 'react';
import { Link, useParams } from 'react-router-dom';
import touristSpot from '../../Fakedata/Fakedata';
import './HotelRoom.css';

const HotelRoom = () => {
    const {locationName} = useParams();
    const bookingSpot = touristSpot.find(city => city.locationName === locationName);
    const hotels = bookingSpot.hotels;

    

         
    return (  
        <div className="background">
            {hotels.map(hotel=>{
            return (
                <div className="gallery1">
                <h3>{hotel.hotelName}</h3>
                <img src ={hotel.roomImage}/>
                <p>{hotel.details}</p>
                <p>Rank : {hotel.rank}</p> 
                <button onClick={handleBookingFinal}>Go</button>                
                </div>)
        })}
        
        
    </div>
    );
};

export default HotelRoom;