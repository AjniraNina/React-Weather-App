import React, { Component } from 'react';
import { CURRENT_WEATHER, HOURLY_FORECAST } from '../data/mockWeather';
import ComplaintPage from '../pages/ComplaintPage';
import WeatherPage from '../pages/WeatherPage';
import { Route } from 'react-router-dom';

const CITIES = ['London', 'Paris', 'Perth', 'Tokyo', 'Sydney','Venice','Sarajevo'];

// WARNING: Do not store any secrets (such as private API keys) in your React app!
// https://create-react-app.dev/docs/adding-custom-environment-variables/
const API_URL = 'https://api.openweathermap.org/data/2.5';

class AppContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        city: CITIES[3],
        temperature: '',
        forecast: []
      };
  
      this.changeCity = this.changeCity.bind(this);
    }

    fetchApiData() {
      fetch(`${API_URL}/weather?q=${this.state.city}&units=metric&appid=${process.env.REACT_APP_API_KEY}
      `) // Call the fetch function passing the url of the API as a parameter
        .then((response) => {
          // console.log(response);
          return response.json();
        // Your code for handling the data you get from the API
      })
        .then((data) => {
          // console.log(data);
          this.setState({ temperature:data.main.temp })
        })
    .catch(function(err) {
      console.error('error', err);
    // This is where you run code if the server returns any errors
    });
    }

    fetchForecast() {
      fetch(`${API_URL}/forecast?q=${this.state.city}&units=metric&appid=${process.env.REACT_APP_API_KEY}
      `)
      .then(response => response.json())
      .then(data => {
        this.setState({ forecast: data.list });
      })
      .catch(err => {
        console.log(err);
      })
    }
  
    getRandomCity(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  
    changeCity() {
      this.setState({ city: this.getRandomCity(CITIES) }, () => {
      this.fetchApiData();
      this.fetchForecast();
      }
      );
    }

    componentDidMount() {
      this.fetchApiData();
      this.fetchForecast();
    }
  
    render() {
      return (
        <>
          <Route path="/" component={() => {
            return (
            <WeatherPage
              city={this.state.city}
              temperature={`${parseInt(this.state.temperature)}`}
              forecast={this.state.forecast}
              changeCity={this.changeCity}
            />
            );
          }}
          exact
          />
          <Route path="/complain" component={() => {
            return (
            <ComplaintPage
              city={this.state.city}
              temperature={`${parseInt(this.state.temperature)}`}
              changeCity={this.changeCity}
            />
            );
          }}
          exact
          />
        </>
      );
    }
  }


export default AppContainer;