import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { DiApple, DiAndroid, DiGoogleAnalytics } from "react-icons/di";
import { FaDev, FaDatabase, FaLaptop } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import aboutImage from "../../images/about.gif"; 

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="developerContent">Front end developer</h3>
            <p>
              My name is Mona Fakhri. I am a student in the computer science program at Cairo University, interested in analyzing biological data for bioinformatics. I use the R programming language and Linux operating system for next-generation data analysis. I am also interested in building machine learning models using Python and TensorFlow. I have a great interest in front-end development and have implemented many projects. Now I am studying and focusing on my studies. 📜
            </p>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div className="circle">
                <DiGoogleAnalytics size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div className="circle">
                <FaLaptop size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div className="circle">
                <DiAndroid size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div className="circle">
                <FaDatabase size={60} color="var(--selected-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>

      <div className="about__image" style={{ backgroundImage: `url(${aboutImage})` }} />

    </section>
  );
};

export default About;