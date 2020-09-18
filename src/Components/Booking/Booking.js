import React from 'react';
import { useParams } from 'react-router';
import touristSpot from '../../Fakedata/Fakedata';
import Header from '../Header/Header';
import './Booking.css'

const Booking = () => {
    const {locationName} = useParams();
    const location = touristSpot.find(city => city.locationName === locationName);
    console.log(location);
    return (
    <div className="background">
        <Header></Header>           
        <div className="box">
            <h1>{location.locationName} :</h1>
            <p>{location.description}</p>
        </div>
        <div className="calender">
            <form action="">
                <label htmlFor="">Origin</label>
                <input type="text"/>
                <label htmlFor="">Origin</label>
                <input type="text"/>  
                <button>Start Booking</button>          
            </form>
        </div>
    </div>
    );
};

export default Booking;