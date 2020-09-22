import React from 'react';
import { useParams } from 'react-router';
import touristSpot from '../../Fakedata/Fakedata';
import Header from '../Header/Header';
import './Booking.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 170,
  },
}));

const Booking = () => {
    const classes = useStyles();
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
        <form className={classes.container} noValidate>
        <TextField
          id="standard-full-width"
          label="Orgin"
          style={{ margin: 8 }}
          fullWidth
          placeholder="Placeholder"          
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Destination"
          style={{ margin: 8 }}
          fullWidth
          placeholder="Placeholder"          
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <br/>
                
      <TextField
        id="date"
        label="From"
        type="date"
        
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="To"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />      
    </form>
    <br/>
    <Link to={"/hotelRoom/" + locationName}><button className="btn">Start Booking</button></Link>   
        </div>
    </div>
    );
};

export default Booking;