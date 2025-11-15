import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [City, setCity] = useState("");
  let [Error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "30bed518ae0eed3150d7f9bdd2846bb4";
  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    try {
      let result = {
        city: City,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      }
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  }
  let handleChange = (evt) => {
    setCity(evt.target.value);
  }
  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(City);
      setCity("");
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);
    } catch (err) {
      setError("No such place in our API");
    }
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField id="City" label="City Name" variant="outlined" required value={City} onChange={handleChange} />
        <br /><br />
        <Button variant="contained" type="submit" >Search</Button>
      </form>
        {Error && <Alert severity="error">No such place in our API</Alert>}
    </div>
  );
}