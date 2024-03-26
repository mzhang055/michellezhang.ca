import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const projects = {
      " ": {
        desc:
          "",
        techStack: "",
        link: "https://github.com/samanthavmac/nightlight",
        image: "/assets/wid-nightlight.png"
      },
      "  ": {
        desc:
          "",
        techStack: "",
        link: "https://github.com/mzhang055/Stocked",
        image: "/assets/wid-stocked.png"
      },
      "   ": {
        desc:
          "",
        techStack: "",
 
        open: "https://uwaterloo.ca/environment/news/shad-students-reimagine-living-spaces-people-canada",
        image: "/assets/wid-shad.png"
      },
      "    ": {
        desc:
          "",
        techStack: "",
        link: "https://github.com/mzhang055/UniVerse",
        image: "/assets/wid-universe.png"
      },
      "     ": {
        desc:
          "",
        techStack: "",
        link: "https://github.com/mzhang055/Super-Mario",
        image: "/assets/wid-mario.png"
      },
      "      ": {
        desc:
          "",
        techStack: "",
      
        /*open: "https://firstroboticscanada.org/stemathon/", */
        image: "/assets/wid-momentum.png"
      }
      
    };

    return (
      <div id="projects">
        <div className="section-header">
          <span className="section-title">/ projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li 
                  className="projects-card" 
                  style={{ backgroundImage: `url(${projects[key]["image"]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="card-content">
                    <div className="card-header">
                      <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                      <ExternalLinks
                        githubLink={projects[key]["link"]}
                        openLink={projects[key]["open"]}
                      />
                    </div>
                    <div className="card-title">{key}</div>
                    <div className="card-desc">{projects[key]["desc"]}</div>
                    <div className="card-tech">{projects[key]["techStack"]}</div>
                  </div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;