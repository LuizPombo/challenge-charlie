import styled from "styled-components";

export const Main = styled.main`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  font-size: 20px;
`;
export const LocalizationContainer = styled.div`
  width: 40%;
  background-color: rgba(242, 241, 242, 0.6);
  display: flex;
  color: #7e7a79;

  img {
    width: 40px;
    padding: 5px;
    fill: #7e7a79;
  }
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const TemperatureContainer = styled.div`
  width: 40%;
  color: #ffffff;
  display: flex;
  img {
    width: 55%;
  }
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const Temperature1DayContainer = styled.div`
  width: 40%;
  color: #ffffff;
  h3 {
    font-weight: 500;
    padding-left: 55%;
    margin-bottom: 0px;
  }
  p {
    padding-left: 55%;
    margin-top: 5px;
    margin-bottom: 30px;
  }
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const Temperature2DaysContainer = styled.div`
  width: 40%;
  color: #ffffff;
  border-radius: 0px 0px 5px 5px;
  h3 {
    font-weight: 500;
    padding-left: 55%;
    margin-bottom: 0px;
  }
  p {
    padding-left: 55%;
    margin-top: 5px;
    margin-bottom: 30px;
  }
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const TodayTemperature = styled.div`
  margin-bottom: 20px;
  h3 {
    font-weight: 500;
    margin-bottom: 0px;
  }
  p {
    margin-top: 5px;
    margin-bottom: 30px;
    cursor: pointer;
  }
`;

export const Weather = styled.h3`
  font-weight: 500;
`;

export const WeatherElements = styled.div`
  p {
    margin-bottom: 0px;
    margin-top: 5px;
  }
`;
