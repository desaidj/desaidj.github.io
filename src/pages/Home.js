import React from "react";
import OneIcon from "@material-ui/icons/DashboardTwoTone";
import CodeIcon from "@material-ui/icons/Code";
import MailIcon from "@material-ui/icons/EmailOutlined";
import Button from "@material-ui/core/Button"; // Import Button component
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, this is Digvijay </h2>
        <div className="prompt">
          <p>From Software Architecture to Data Discovery: Crafting Solutions with 
            Engineering Ingenuity</p>
          <OneIcon />
          <CodeIcon />
          <MailIcon />
          <br/>
          <Button
            className="resume-button"
            variant="contained"
            color="primary"
            size="large"
            href="https://drive.google.com/file/d/1Q2u6lqxv2Lka4VcvQNmxMxjI-b8D7rpM/view?usp=sharing"
          >
            See Resume
          </Button>
        </div>
      </div>
      <div className="professional-section">
        <h1> What do I do?</h1>
        <div className="section full-stack">
          <h1>Full Stack Development</h1>
          <ul>
            <li>Crafting adaptable and  RESTful APIs with Spring Boot Framework.</li>
            <li>Constructing stable and responsive frontend websites using React-Redux and AngularJS.</li>
            <li>Building scalable and high-performance backends in Spring Boot, Flask, and Node.</li>
            <li>Developing mobile applications across Swift, Android, and React Native.</li>
          </ul>
        </div>
        <div className="section data-science">
          <h1>Data Science & AI</h1>
          <ul>
          <li>Expertise in implementing data pipelines and ETL processes, ensuring efficient data flow and transformation for analytics</li>
            <li>Creating highly scalable and production-ready models for various deep learning and statistical applications.</li>
            <li>Proficient in working on projects involving Computer Vision and Generative AI.</li>
          </ul>
        </div>
        <div className="section cloud-infra">
          <h1>Cloud</h1>
          <ul>
            <li>Experienced in working with various cloud platforms.</li>
            <li>Managing and hosting websites on virtual machine instances, including database integration.</li>
            <li>Deploying deep learning models efficiently on cloud infrastructure.</li>
          </ul>
        </div>
      </div>
      <div className="skills">
         <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, Flask, XML
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL,
              MySQL, MongoDB, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
