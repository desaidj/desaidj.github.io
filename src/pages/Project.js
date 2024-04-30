// Projects.js

import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  // Sample projects data
  const projects = [
    { id: 1, name: 'Attorney Assistant', description: 
    'POC (using Flask, Python) of Search Engine and  Text Summarizer for court judgments regarding criminal law'+
    'This Project was a part of the research I did during my undergraduate degree in colloboration with the research department. The final deployed system was made with HTML, CSS, Java, Spring Boot, MySQL.', 
      techStack: ['Java','python', 'Flask', 'MySQL', 'Spring Boot'], githubLink: 'https://github.com/desaidj/Attorney-text-summarizer/tree/main/Attorney-Assistant-master', 
      skills: ['Full Stack', 'Machine Learning', 'Cloud'] 
    },
    { id: 2, name: 'Service App', description: 
    '• Developed a highly scalable service app enabling users to book services including electricians, plumbers, vehicle repair, and more'+
    '• Added FireBase-auth mobile verification used for signup and firestore to perform CRUD operations'+
    '• Implemented concepts - Toast messages, Layout design (XML), Data Access Objects (DAO), Fragments',
      techStack: ['Java', 'XML', 'Firebase'], githubLink: 'https://github.com/your-username/project2', 
      skills: ['Android'] 
    },
    { id: 3, name: 'Heailth', description: 
    '• Conducted an in-depth analysis of a substantial chest X-ray dataset comprising over 100,000 images using OpenCV and created a' +
    'thorax disease classifier using CNNs achieving 96% accuracy across 14 distinct conditions' +
    '• Implemented feature engineering techniques to extract relevant features to enhance model’s ability to distinguish different diseases' +
    '• Built a full-stack medical care website, seamlessly integrating the developed CNN-based thorax disease classifier in it' +
    '• Implemented a ChatBot for the website using LLMs to get humanlike interaction on the customer queries', 
      techStack: ['HTML', 'JavaScript', 'SQL', 'OpenCV', 'Tensorflow'], githubLink: 'https://github.com/desaidj/AI-diseases-prediction', 
      skills: ['Full Stack', 'Data Visualization', 'Data Science', 'Machine Learning'] 
    },
    { id: 4, name: 'NoMoreCyberBullying', description: 
    'a comprehensive platform designed to combat cyberbullying and promote a safer online environment.'+ 
    'Built with Flask and Python, this project aims to identify and report inappropriate content across various '+
    'social media platforms, empowering users and authorities to take action against cyberbullying.',
      techStack: ['Python', 'Flask'], githubLink: 'https://github.com/desaidj/NoMoreCyberBullying/', 
      skills: ['API', 'Front End', 'Data Science'] 
    },
    { id: 5, name: 'Sales Forecasting', description: 
    '• Delivered comprehensive sales forecasts and demand plans to stakeholders, offering strategic insights to help in decision-making, optimize resource allocation, and enhance inventory management practices' +
    '• Analyzed the effects of commercial advertisements, and first time buyers of a particular product', 
      techStack: ['Python', 'Power BI'], githubLink: 'https://github.com/desaidj/SalesForecasting', 
      skills: ['Data Engineering', 'Data Visualization', 'Data Science'] 
    },
    { id: 6, name: 'Tasker', description: 
    '• Crafted a dynamic task dashboard boasting intuitive drag-and-drop functionality, collaborative tools facilitating task assignment,'+
    'MongoDB database to store user information and task details, and an efficient notification system for upcoming deadlines'+
    '• Utilized Redux for seamless state management, Jest/Enzyme for testing, and Material Design principles'+
    '• Deployed on AWS, showcasing proficiency in frontend interactivity and backend data management', 
      techStack: ['React.js', 'Redux', 'React Router', 'Node.js', 'Express.js', 'MongoDB'], githubLink: 'https://github.com/desaidj/tasker', 
      skills: ['Full Stack', 'Cloud'] 
    },
    { id: 6, name: 'This website', description: 
    '• built this portfolio ',
      techStack: ['React.js', 'html', 'CSS'], githubLink: 'desaidj.github.io', 
      skills: ['FrontEnd'] 
    },
    // Add more projects with techStack, githubLink, and skills
  ];

  const [selectedTechStack, setSelectedTechStack] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  // Filter projects based on selected tech stack and skills
  const filteredProjects = projects.filter(project =>
    (selectedTechStack.length === 0 || project.techStack.some(tech => selectedTechStack.includes(tech))) &&
    (selectedSkills.length === 0 || project.skills.some(skill => selectedSkills.includes(skill)))
  );

  const handleTechStackChange = (tech) => {
    if (selectedTechStack.includes(tech)) {
      setSelectedTechStack(selectedTechStack.filter(t => t !== tech));
    } else {
      setSelectedTechStack([...selectedTechStack, tech]);
    }
  };

  const handleSkillsChange = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const uniqueTechStacks = [...new Set(projects.flatMap(project => project.techStack))];
  const uniqueSkills = [...new Set(projects.flatMap(project => project.skills))];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="tech-stack-filter">
        <h3>Filter by Tech Stack:</h3>
        {uniqueTechStacks.map(tech => (
          <button
            key={tech}
            onClick={() => handleTechStackChange(tech)}
            className={selectedTechStack.includes(tech) ? 'active' : ''}
          >
            {tech}
          </button>
        ))}
      </div>
      <div className="skills-filter">
        <h3>Filter by Skills:</h3>
        {uniqueSkills.map(skill => (
          <button
            key={skill}
            onClick={() => handleSkillsChange(skill)}
            className={selectedSkills.includes(skill) ? 'active' : ''}
          >
            {skill}
          </button>
        ))}
      </div>
      <div className="projects-container">
        {filteredProjects.map(project => (
          <a key={project.id} href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project">
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                <h4>Tech Stack:</h4>
                <ul>
                  {project.techStack.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
