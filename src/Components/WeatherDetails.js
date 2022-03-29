import React,{useEffect, useState} from 'react';
import {result} from './SearchMain.jsx';
function WeatherDetails({temp,humidity,pressure,weatherType,name,speed,country,sunset}) {

  const [weatherState,setWeatherState] = useState("");
  useEffect(() => {
      if(weatherType){
          switch(weatherType){
              case 'Clouds':
                  setWeatherState('wi-day-cloudy');
                  break;
              case 'Haze':
                      setWeatherState('wi-day-haze');
                      break;
              case 'Clear':
                  setWeatherState('wi-day-sunny');
                  break;
              case 'Mist':
                  setWeatherState('wi-dust')
                  break;
              case 'Rain':
                  setWeatherState('wi-day-rain-mix');
                  break;
              case 'Smoke':
                  setWeatherState('wi-smoke');
                  break;
          }
      }
  })




  //converting the seconds in time
  let sec=sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
    <article className="widget">
      <div className="weatherIcon">
      <i className={`wi ${weatherState}`}></i>
      </div>
      <div className="weatherInfo">
        <div className="temperature">
          <span>{temp}&deg;</span>
        </div>
        <div className="description">
          <div className="weatherCondition">
            {weatherType}
          </div>
          <div className="place">
            {name},{country}
          </div>
        </div>
      </div>
      <div className="date">
        {new Date().toLocaleString()}
      </div>
      <div className="extra-temp">
        <div className="temp-info-minmax">
        <div className="two-sided-section">
          <p>
            <i className={"wi wi-sunset"}></i>
          </p>
          <p className="extra-info-leftside">
            {timeStr}
            sunset
          </p>
        </div>
        <div className="two-sided-section">
          <p>
            <i className={"wi wi-humidity"}></i>
          </p>
          <p className="extra-info-leftside">
            {humidity}
            Humidity
          </p>
        </div>
        <div className="two-sided-section">
          <p>
            <i className={"wi wi-humidity"}></i>
          </p>
          <p className="extra-info-leftside">
            {pressure}
            Pressure
          </p>
        </div>
        <div className="two-sided-section">
          <p>
            <i className={"wi wi-strong-wind"}></i>
          </p>
          <p className="extra-info-leftside">
            {speed}
            <br/>
            Speed
          </p>
        </div>
        </div>
      </div>
    </article>
    </>
  )
}

export default WeatherDetails;