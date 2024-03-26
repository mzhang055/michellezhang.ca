import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        Hey! I am currently a <b>highschool student </b> from Markham, Ontario and an incoming
        Computer Science student @ 
        <a href="https://www.artsci.utoronto.ca/future/ready-apply/admission-categories/computer-science"> UofT. 
        I'm passionate about software development, robotics, and product design!</a>
      </p>
    );
    const two = (
      <p>
        Outside of school, I'm interested in exploring AI development, listening to 
        podcasts, and I looove watching kdramas.
      </p>
    );

    const tech_stack = [
      "Java",
      "Python",
      "React.js",
      "HTML",
      "CSS",
      "JavaScript"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Michelle Zhang" src={"/assets/me.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
