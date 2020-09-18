import React, { useState } from 'react';
import touristSpot from '../../Fakedata/Fakedata';
import Header from '../Header/Header';
import Test from '../Test/Test';
import TouristPlaces from '../TouristPlaces/TouristPlaces';
import './Home.css';

const Home = () => {
  const allData = touristSpot;  
  const [spots, setSpots] = useState(allData);
  
  return (
    <div className="background">
    <Header></Header>    
    {spots.map(touristPlaces => 
        <TouristPlaces 
          city={touristPlaces}>
        </TouristPlaces>)}           
    </div>
  );
};

export default Home;