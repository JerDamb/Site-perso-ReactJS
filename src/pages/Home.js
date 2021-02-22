import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <span className="text-bg">
        {/* <div class="marquee"> */}
        {/* <div class="marquee__inner" aria-hidden="true"> */}
        <span>Accueil</span>
        {/* <span>Accueil</span>
            <span>Accueil</span>
            <span>Accueil</span> */}
        {/* </div>
        </div> */}
      </span>
      <div className="homeContent">
        <div className="first-name">Dambreville</div>
        <div className="last-name">Jérémy</div>
        <div className="separation">
          <div></div>
          <div></div>
        </div>
        <h1>Développeur front-end</h1>
        <div className="socialNetwork">
          <ul>
            <li>
              <a href="/#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-codepen"></i>
              </a>
            </li>
            <li>
              <a href="/#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="/#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
