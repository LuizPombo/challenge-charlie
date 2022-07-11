import axios from "axios";
import { useEffect, useState } from "react";
import DisplayFields from "../../components/displayFields";
import GlobalStyle from "../../globalStyle";
const LandingPage = () => {
  const [geolocalized, setGeolocalized] = useState(false);
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [weather, setWeather] = useState();
  const [wind, setWind] = useState();
  const [humi, setHumi] = useState();
  const [press, setPress] = useState();
  const [temp, setTemp] = useState();
  const [temp1Day, setTemp1Day] = useState();
  const [temp2Days, setTemp2Days] = useState();
  const [iconId, setIconId] = useState();
  const [bingBackground, setBingBackground] = useState();
  const message = "Pesquise o nome da cidade";

  useEffect(() => {
    axios
      .get(
        "http://api.allorigins.win/get?url=https%3A%2F%2Fwww.bing.com%2FHPImageArchive.aspx%3Fformat%3Djs%26idx%3D0%26n%3D1%26mkt%3Dpt-BR"
      )
      .then((response) => {
        const imageUrl = JSON.parse(response.data.contents);
        setBingBackground(`https://www.bing.com${imageUrl.images[0].url}`);
      });
  }, []);

  useEffect(() => {
    if (geolocalized === false) {
      navigator.geolocation.getCurrentPosition((localization) => {
        const lat = localization.coords.latitude;
        const lng = localization.coords.longitude;
        consultingWeather(lat, lng);
        setGeolocalized(true);
      });
    }
  });
  const consultingWeather = async (lat, lng) => {
    await axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat},${lng}&key=c63386b4f77e46de817bdf94f552cddf&language=pt-BR`
      )
      .then((response) => {
        const weatherData = response.data.results[0].components;
        setCity(weatherData.municipality);
        setState(weatherData.state);
        weatherCall(weatherData.municipality);
      })
      .catch((err) => console.log(err));
  };

  const consultingNewWeather = async (newPlace) => {
    await axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${newPlace}&key=c63386b4f77e46de817bdf94f552cddf&language=pt-BR`
      )
      .then((response) => {
        const weatherData = response.data.results[0].components;
        setCity(weatherData.city);
        setState(weatherData.state);
        weatherCall(weatherData.city);
      })
      .catch((err) => console.log(err));
  };

  const weatherCall = async (state) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${state}&lang=pt_br&appid=772920597e4ec8f00de8d376dfb3f094&units=metric&cnt=16`
      )
      .then((response) => {
        setWeather(response.data.list[0].weather[0].description.toUpperCase());
        setIconId(response.data.list[0].weather[0].id);
        setWind(response.data.list[0].wind.speed);
        setHumi(response.data.list[0].main.humidity);
        setPress(response.data.list[0].main.pressure);
        setTemp(response.data.list[0].main.temp);
        setTemp1Day(response.data.list[6].main.temp);
        setTemp2Days(response.data.list[12].main.temp);
      })
      .catch((err) => {
        alert("cidade invalida, não encontramos essa cidade");
      });
  };
  return (
    <>
      <GlobalStyle bingBackground={bingBackground} />
      <DisplayFields
        city={city}
        state={state}
        temp={temp}
        wind={wind}
        humi={humi}
        press={press}
        temp1Day={temp1Day}
        temp2Days={temp2Days}
        weather={weather}
        consultingNewWeather={consultingNewWeather}
        message={message}
        iconId={iconId}
      />
    </>
  );
};
export default LandingPage;
