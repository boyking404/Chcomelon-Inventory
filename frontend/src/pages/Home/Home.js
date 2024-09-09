import React from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import BharatSeImg from "../../assets/BharatSe.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
        <img width={300} src={BharatSeImg} alt="Inventory" />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn btn2">
                <Link style={{ color: 'white' }} to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
        <h1 style={{ color: '#ff6601' }}>Welcome to Bharat<span style={{ color: 'green' }}>Se</span></h1>
          <h2> Transportation {"&"} Logistics Management system</h2>
          <p>
          A Transport & Logistics System is designed to control and manage the movement of goods across warehouses, distribution centers, and delivery routes in real-time, integrated to make it easier to scale and grow your business.
          </p>
          <div className="hero-buttons">
            <button className="btn">
              <Link to="/dashboard">Get Started</Link>
            </button>
          </div>
          <div className="--flex-start numText">
            <NumberText num="4K" text="Brand Owners" />
            <NumberText num="230K" text="Active Users" />
            <NumberText num="500+" text="Partners" />
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-black">{num}</h3>
      <p className="--color-black">{text}</p>
    </div>
  );
};

export default Home;
