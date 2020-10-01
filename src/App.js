import React from "react";
import Row from "./components/Row";
import requests from "./request";
import "./styles/app.scss";
import Banner from "./components/banner";
import Nav from "./components/navbar";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner fetchUrl={requests.fetchTrending} />
      <Row title="trending now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Popular tv series" fetchUrl={requests.fetchpopularTv} />
      <Row title="top tv series" fetchUrl={requests.fetchtopTv} />
      <Row title="comedy" fetchUrl={requests.comedyTV} />
      <Row title="horror" fetchUrl={requests.horrorTv} />
      <Row title="romantic" fetchUrl={requests.romanticTv} />
    </div>
  );
}

export default App;
