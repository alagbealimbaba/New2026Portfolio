import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            {" "}
            <span>I'm Alim Alagbe. </span>Software Engineer
          </h1>
          <p className="home__description">
            Software Engineer with 3+ years of experience building modern and responsive web applications, with a
strong focus on frontend development. Comfortable building
end-to-end features, solving problems, and using AI tools effectively to improve development workflows.

          </p>

          <Link to="./about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
