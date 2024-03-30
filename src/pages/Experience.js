import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2022 - May 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          University of Southern California, Los Angeles, CA
          </h3>
          <p> Master of Science, Applied Data Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2021 - May 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Software Engineering Intern - VIIT
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Pune, MH, India
          </h4>
          <p>Constructed a Virtual Try-on API forclothes by 
            leveraging Generative Adversarial Networks (CycleGAN).</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2021 - May 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Software Engineering Intern - Blue Pearl Health Tech
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Pune, MH, India
          </h4>
          <p>Enhanced a Blood Test Report Tracking System by collaborating with 
            cross-functional teams, including software developers, pathologists, 
            and administrative staff, developing new features, and addressing existing 
            issues and bugs.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2020 - Dec 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Research Assistant - VIIT
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Pune, MH, India
          </h4>
          <p>
            Helped the research department for Developing a search engine for Attornies.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2018 - May 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Vishwakarma Institute of Information Technology, Pune, India
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Information Technology</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
