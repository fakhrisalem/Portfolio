import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import "./styles.scss";
import ImageOne from "../../images/photo1.jpg";
import ImageTwo from "../../images/photo2.png";
import ImageThree from "../../images/photo3.jpg";
import ImageFour from "../../images/photo4.jpg";
import ImageFive from "../../images/photo5.jpg";
import ImageSix from "../../images/photo6.jpg";
import ImageSeven from "../../images/photo8.jpg";
import ImageEight from "../../images/photo9.jpg";
import ImageNine from "../../images/photo7.jpg";


const DreamsData = [
  {
    sectionId: 2,
    projectName: "Building mosques",
    description: "",
    projectLink: "",
    image: ImageOne,
  },
  {
    sectionId: 2,
    projectName: "I work at Google",
    description: "",
    projectLink: "",
    image: ImageTwo,
  },
  {
    sectionId: 2,
    projectName: "mountaineering",
    description: "",
    projectLink: "",
    image: ImageThree,
  },
  {
    sectionId: 3,
    projectName: "Hajj Kaaba",
    description: "",
    projectLink: "",
    image: ImageFour,
  },
  {
    sectionId: 3,
    projectName: "Animal shelter",
    description: "",
    projectLink: "",
    image: ImageFive,
  },
  {
    sectionId: 2,
    projectName: "Doctor from Oxford",
    description: "",
    projectLink: "",
    image: ImageSeven,
  },
  {
    sectionId: 3,
    projectName: "african children help",
    description: "",
    projectLink: "",
    image: ImageSix,
  },
  {
    sectionId: 3,
    projectName: "",
    description: "Big library in my house",
    projectLink: "",
    image: ImageEight,
  },
  {
    sectionId: 3,
    projectName: "",
    description: "House of roses",
    projectLink: "",
    image: ImageNine,
  },
 
];

const Dreams = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="Dreams" className="Dreams">
    <PageHeaderContent
      headerText="My Dreams"
      icon={<AiFillProject size={40} />}
    />
      <div className="Dreams__content">
        <div className="Dreams__content__cards">
          {DreamsData.map((item, index) => (
            <div
              key={index}
              className="Dreams__content__cards__item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="Dreams__content__cards__item__img-wrapper">
                <a href={item.projectLink}>
                  <img src={item.image} alt={item.projectName} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredIndex && (
                  <div>
                    <p>{item.projectName}</p>
                    <p>{item.description}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dreams;