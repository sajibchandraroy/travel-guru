import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home';
import HotelRoom from './Components/HotelRoom/HotelRoom';



const App = () => {
  return (
    <div>    
    <Router>
      
      <Switch>
                <Route path="/home"><Home /></Route>
                <Route path="/booking/:locationName"><Booking/></Route>
                {/* <Route path="/signin"><SignIn/></Route> */}
                <Route path="/hotelRoom/:locationName">
                <HotelRoom /></Route>
                
               
                
                <Route exact path="/"><Home /></Route>
      </Switch>
    </Router>
      
    </div>
  );
};

export default App;