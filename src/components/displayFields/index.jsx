import { useEffect, useState } from "react";
import {
  Main,
  TemperatureContainer,
  Temperature1DayContainer,
  Temperature2DaysContainer,
  LocalizationContainer,
  TodayTemperature,
  Weather,
  WeatherElements,
} from "./styles";
import Searcher from "../searcher";
import locationIcon from "../../assets/44.svg";
import sunIcon from "../../assets/2.svg";
import cloudsIcon from "../../assets/14.svg";
import thunderIcon from "../../assets/16.svg";
import rainIcon from "../../assets/18.svg";
import drizzleIcon from "../../assets/17.svg";
import snowIcon from "../../assets/23.svg";
import mistIcon from "../../assets/13.svg";

const DisplayFields = ({
  city,
  state,
  temp,
  wind,
  weather,
  press,
  humi,
  temp1Day,
  temp2Days,
  consultingNewWeather,
  message,
  iconId,
}) => {
  const [wichTemperature, setWichTemperature] = useState("c");
  const [tempChange, setTempChange] = useState({});

  useEffect(() => {
    if (wichTemperature === "c") {
      setTempChange({
        temp: Math.round(temp) + " Cº",
        temp1Day: Math.round(temp1Day) + " Cº",
        temp2Days: Math.round(temp2Days) + " Cº",
      });
    } else {
      setTempChange({
        temp: ((temp * 9) / 5 + 32).toFixed() + " Fº",
        temp1Day: ((temp1Day * 9) / 5 + 32).toFixed() + " Fº",
        temp2Days: ((temp2Days * 9) / 5 + 32).toFixed() + " Fº",
      });
    }
  }, [temp, temp1Day, temp2Days, wichTemperature]);

  const FormatChange = () => {
    if (wichTemperature === "c") {
      setWichTemperature("k");
    } else {
      setWichTemperature("c");
    }
  };

  const colorChanger = (opacity) => {
    if (temp <= 15) {
      return `rgb(84, 119, 247, ${opacity})`;
    } else if (temp >= 35) {
      return `rgb(232, 95, 95, ${opacity})`;
    } else {
      return `rgb(250, 202, 7, ${opacity})`;
    }
  };

  const iconChanger = () => {
    if (iconId < 300) {
      return thunderIcon;
    } else if (iconId < 500) {
      return drizzleIcon;
    } else if (iconId < 600) {
      return rainIcon;
    } else if (iconId < 700) {
      return snowIcon;
    } else if (iconId < 800) {
      return mistIcon;
    } else if (iconId === 800) {
      return sunIcon;
    } else {
      return cloudsIcon;
    }
  };

  return (
    <>
      <Main>
        <Searcher
          state={state}
          consultingNewWeather={consultingNewWeather}
          message={message}
        />
        <LocalizationContainer>
          <img src={locationIcon} alt="compass" />
          <h1>
            {city}, {state}
          </h1>
        </LocalizationContainer>
        <TemperatureContainer style={{ background: `${colorChanger(0.8)}` }}>
          <img src={iconChanger()} alt="sun" />
          <div>
            <TodayTemperature>
              <h3>HOJE</h3>
              <p onClick={FormatChange}>{tempChange.temp}</p>
            </TodayTemperature>
            <Weather>{weather}</Weather>
            <WeatherElements>
              <p>Vento: NO {wind}Km/h</p>
              <p>Humidade: {humi}%</p>
              <p>Pressão: {press}hPA</p>
            </WeatherElements>
          </div>
        </TemperatureContainer>
        <Temperature1DayContainer
          style={{ background: `${colorChanger(0.95)}` }}
        >
          <h3>AMANHÃ</h3>
          <p>{tempChange.temp1Day}</p>
        </Temperature1DayContainer>
        <Temperature2DaysContainer
          style={{ background: `${colorChanger(0.9)}` }}
        >
          <h3>DEPOIS DE AMANHÃ</h3>
          <p>{tempChange.temp2Days}</p>
        </Temperature2DaysContainer>
      </Main>
    </>
  );
};

export default DisplayFields;
