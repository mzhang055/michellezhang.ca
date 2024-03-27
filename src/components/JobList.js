import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    DECA: {
      jobTitle: "President @",
      duration: "JUNE 2023 - PRESENT",
      desc: [
        "Organized monthly mock case studies, mentoring 90+ students for regional and provincial competitions.",
        "Amplified platform engagement by 110% through partnerships with local businesses for fundraisers",
        "Recognized as Top 10 overall Provincial Finalist and Top 15 Provincial Exam Score in the Hospitality & Tourism Professional Selling event."
      ]
    },
    "Hand In Hand": {
      jobTitle: "Technology Chair @",
      duration: "MAY 2022 - PRESENT",
      desc: [
        "Coordinated social events with 150+ participants and exceeded donations target by 100%.",
        "Led promotion by implementing a motion graphic video approach, reaching 2,800+ accounts.",
        "Analyzed target audience to implement opportunities for youth to gain leadership experience and increased platform engagement by 30%."
      ]
    },
    "Shad UWaterloo": {
      jobTitle: "Participant @",
      duration: "JULY 2023",
      desc: [
        "Ideated and researched in teams of 5 to enhance accessibility and sustainability within living spaces.",
        "Interviewed wheelchair users to refine project’s focus and deepen team empathy towards accessibility issues.",
        "Engineered an innovative wheelchair lock with Arduino featured on UWaterloo’s website.",
        "Explored quantum mechanics through UWaterloo’s Institute for Quantum Computing workshops."
      ]
    },
    "FRC 9113": {
      jobTitle: "Co-Founder & Team Captain @",
      duration: "MAY 2022 - JUNE 2023",
      desc: [
        "Spearheaded and executed workshops for 100+ students in Java, WPILib, Git, and subsystems.",
        "Created strategic outreach campaigns that raised $9000+ in FIRST grants and community sponsorships.",
        "Led the team to secure the prestigious Rookie All-Star and Inspiration Awards for innovation and impact."
      ]
    },
    "UofT Engineering Enrichment Program (DEEP)": {
      jobTitle: "Participant @",
      duration: "JULY 2022",
      desc: [
        "Trained a neural network model with 97.4% accuracy to identify handwritten digits using PyTorch.",
        "Engaged in advanced workshops conducted by UofT professors focused on computer vision, data analytics, and machine learning.",
        "Developed a linear regression model for machine learning in Python to predict prices of diamonds using pandas, matplotlib, seaborn, and sklearn libraries."
      ]
    },
   
    "CICS": {
      jobTitle: "Technology Mentor @",
      duration: "JULY 2021 - AUGUST 2021",
      desc: [
        "Strategized ideas to increase engagement of 20+ seniors through ice breaker activities before lessons.",
        "Prepared 8 engaging lesson plans throughout the program to accommodate various learning styles.",
        "Conducted weekly lessons for seniors to learn about fundamental technology skills and strengthen English communication skills, both verbally and written."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
