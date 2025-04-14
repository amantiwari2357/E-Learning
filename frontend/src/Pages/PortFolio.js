import React from 'react'
import "./PortFolio.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faComments, faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJava, faPython } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  return (
    <div className="main-container">
      <Aside />
      <div className="main-content">
        <Home />
        <About />
        <Education />
        <Services />
        <Contact />
      </div>
    </div>
  );
};

const Aside = () => (
  <div className="aside">
    <div className="logo">
      <a href="image/logo.png"><span>A</span>man</a>
    </div>
    <div className="nav-toggler">
      <span></span>
    </div>
    <ul className="nav">
      <li><a href="#home" className="active"><FontAwesomeIcon icon={faHome} /> Home</a></li>
      <li><a href="#about"><FontAwesomeIcon icon={faUser} /> About</a></li>
      <li><a href="#education"><FontAwesomeIcon icon={faGraduationCap} /> Education</a></li>
      <li><a href="#service"><FontAwesomeIcon icon={faLaptopCode} /> Services</a></li>
      <li><a href="#contact"><FontAwesomeIcon icon={faComments} /> Contact</a></li>
    </ul>
  </div>
);

const Home = () => (
  <section className="home section" id="home">
    <div className="container">
      <div className="row">
        <div className="home-info padd-15">
          <h3 className="hello">Hi! My name is <span className="name">Aman Tiwari</span></h3>
          <h3 className="my-profession">I'm a <span className="typing">Full-Stack Developer</span></h3>
          <p>Aman Tiwari | Software Developer | Passionate about software and building impactful solutions.</p>
          <a href="#contact" className="btn hire-me">Contact me</a>
        </div>
        <div className="home-img padd-15">
          <img src="My project.png" alt="Aman Tiwari" />
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="about section" id="about">
    {/* Add content about yourself here */}
  </section>
);

const Education = () => (
  <section className="education section" id="education">
    {/* Add your education details here */}
  </section>
);

const Services = () => (
  <section className="service section" id="service">
    <div className="container">
      <div className="row">
        <div className="section-title padd-15">
          <h2>Services</h2>
        </div>
      </div>
      <div className="row">
        {serviceData.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

const ServiceItem = ({ icon, title, description }) => (
  <div className="service-item padd-15">
    <div className="service-item-inner">
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const Contact = () => (
  <section className="contact section" id="contact">
    {/* Add contact details here */}
  </section>
);

const serviceData = [
  {
    icon: faReact,
    title: "MERN Stack Development",
    description: "Building dynamic web applications using MongoDB, Express.js, React, and Node.js."
  },
  {
    icon: faJava,
    title: "Java Development",
    description: "Basic knowledge of Java for developing desktop, web, and mobile applications."
  },
  {
    icon: faPython,
    title: "Python Development",
    description: "Basic proficiency in Python for scripting and web development."
  },
  {
    icon: faReact, // Replace with a database-related icon if available
    title: "Database Management",
    description: "Proficient in managing and querying databases such as MySQL and MongoDB."
  }
];

export default App;
