import React,{useEffect, useState} from 'react'
import './Style.css';
import WeatherDetails from './WeatherDetails';

function SearchMain() {

    const [searchTerm,setSearchTerm] = useState('mumbai');
    const [tempInfo,setTempInfo] = useState();
    const getWeatherInfo = async () =>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=22cd44618ee739dfef42e0f06bf140f0`;
            let res = await fetch(url);
            let data = await res.json();

            const {temp,humidity,pressure} = data.main;
            console.log(data);
            const {main:weatherType} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country,sunset} =data.sys;
            const myNewWeatherInfo = {temp,humidity,pressure,weatherType,name,speed,country,sunset};

            setTempInfo(myNewWeatherInfo);
        }
        catch(error){
            console.log(error);
        }
        
    };
    
    useEffect( () =>{
        getWeatherInfo();
    },[]);
  return (
      <>
    <div className="wrap">
        <div className="search">
            <input type="search" name="" id="search" placeholder="type city" onChange={(e) =>{
                setSearchTerm(e.target.value);
            }}/>
        </div>
        <button className="searchButton" onClick={getWeatherInfo}>search city</button>
    </div>
    <WeatherDetails {...tempInfo}/>
    </>
  )
}

export default SearchMain;
