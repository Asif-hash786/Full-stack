import { useState } from "react";
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
export default function WeatherApp() {
  const [WeatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 18.05,
    tempMin: 18.05,
    tempMax: 18.05,
    humidity: 55,
    feelsLike: 17.35,
    weather: "haze",
  });
  let updateInfo=(newinfo)=>{
    setWeatherInfo(newinfo);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={WeatherInfo}/>
    </div>
  );
}