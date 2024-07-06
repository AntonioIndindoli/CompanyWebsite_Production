import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import logo from "./images/HomeLogo.png";
import Footer from "./components/Footer";
import backrooms from "./images/backroomsGameImage.png";
import copyright from "./images/copyright.png";
import soon from "./images/Comingsoon.png";
import album from "./images/nutpack.jpg";

const LandingPage = () => {
  return (
    <div
      className="LandingPage01"
      style={{
        width: "100%",
        background: "white",
      }}
    >
      <Header />

      <div className="background-gradient-color"></div>
      <div className="background-gradient"></div>

      <div className="box-center-image">
        <div className="center-image">
          <img src={logo} alt="Main Image" className="main-image" />
        </div>
      </div>

      <div className="Home-Message">Crafted with love.</div>
      <div className="Home-Message-Subtext">
        We do not produce or sell mayonnaise*
      </div>
      <div className="box-center-image"></div>
      

      <div className="home-projects-and-cards">
        <div className="Home-Projects-Div">
          
          <div className="Home-Projects">Our Projects</div>
          <div className="center-divider"></div>
          <div className="Home-Projects-Subtext">
            Including completed and in progress games
          </div>
        </div>
        <div className="home-cards">
          <Card imageSrc={backrooms} caption="Available on Steam now" link="https://store.steampowered.com/app/2816710/The_Backrooms_Unseen_Tapes/"/>
          <Card imageSrc={copyright} caption="Play now in your browser" link="https://victorious-rock-0e8ecde10.3.azurestaticapps.net/" />
          <Card imageSrc={album} caption="The NutPack Album" link="/Album"/>
          <Card imageSrc={soon} caption="Release TBD" link="/"/>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
