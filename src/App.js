import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home';


const App = () => {
  return (
    <div>    
    <Router>
      
      <Switch>
                <Route path="/home"><Home /></Route>
                <Route path="/booking/:locationName"><Booking/></Route>
                {/* <Route path="/signin"><SignIn/></Route> */}
                {/* <PrivateRoute path="/hotelroom/:locationName">
                <HotelRoom /> */}
                {/* </PrivateRoute> */}
                
                <Route exact path="/"><Home /></Route>
      </Switch>
    </Router>
      
    </div>
  );
};

export default App;