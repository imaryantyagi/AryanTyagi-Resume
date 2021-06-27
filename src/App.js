import React from "react";
import "./styles.css";

import InfoCard from "./InfoCard";
import experience from "./experience";
import CVComponent from "./CVComponent";
import education from "./education";
import SkillsList from "./SkillsList";

const info = {
  imgSrc: "./FotoPL.png",
  name: "Aryan Tyagi",
  profession: "Full Stack Developer",
  address: "Delhi, India",
  phone: 7087733361,
  email: "imaryantyagi@gmail.com",
  about:
    "I am a Full Stack Developer with holistic knowledge of front-end and back-end development. Equipped with Computer Science & Engineering, I have developed an effective skillset for this IT world"
};

export default function App() {
  const experienceComponent = experience.map(item => (
    <CVComponent item={item} />
  ));
  const educationComponent = education.map(item => <CVComponent item={item} />);

  return (
    <div>
      <main>
        <section className="container">
          <section className="info">
            <InfoCard info={info} />
            <h2>
              <i className="fa fa-cogs" /> Technical Skills
            </h2>
            <SkillsList />
          </section>

          <section className="work">
            <h1>
              <i className="fa fa-briefcase fa" /> Work Experience{" "}
            </h1>
            {experienceComponent}
          </section>
          <hr />
          <section className="education">
            <h1>
              {" "}
              <i className="fa fa-university" /> Education{" "}
            </h1>
            {educationComponent}
          </section>

          <section className="other">
            <h1>
              {" "}
              <i className="fa fa-desktop" /> Projects{" "}
            </h1>
            <h4> EdTech website using HTML AND CSS (JUNE 2021)</h4>
            <h4>E-commerce website using HTML AND CSS (Mar 2017 – Apr 2017)</h4>
            <h4> Ice - Cream Parlor Management System using C (Sep 2016 – Nov 2016)</h4>
            <h4> Hospital Management System using C++ (Mar 2017 – Apr 2017)</h4>
            <h4>BYJUS K-12 and BYJUS K-3 (July 2020- October 2020)</h4>
            <h4> Build my CV using React (June 2021)</h4>
          </section>
        </section>
      </main>
      <footer className="footer">
        <p>Aryan Tyagi</p>
        <i className="fa fa-linkedin-square" /> https://www.linkedin.com/in/aryan-tyagi/
      </footer>
    </div>
  );
}
