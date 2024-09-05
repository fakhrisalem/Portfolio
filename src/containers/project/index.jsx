import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import "./styles.scss";
import ImageOne from "../../images/3ccd4bb3d5276774659e5ad26fe876a1.jpg";
import ImageTwo from "../../images/90b7e1808cec185b9c1ddf5eac088800.jpg";
import ImageThree from "../../images/097c3d300b2cd01ca487c87d66df3be8.jpg";
import ImageFour from "../../images/4706f83a7405b38bf7e2ba29b494dc0b.jpg";
import ImageFive from "../../images/35888df936dc277df000b95c23ad5748.jpg";
import ImageSix from "../../images/369916e7e0060be7fe1a289f18bd58dd.jpg";
import ImageSeven from "../../images/a0df6d573845ba42809e325f9ac323a3.jpg";
import ImageEight from "../../images/b325f024a566f668f2bb4903a2bd5d5c.jpg";
import ImageNine from "../../images/d35e92432cd786726b209256f5ad484c.jpg";
import ImageTen from "../../images/f0cccf44fbe6463dd07db9fe0495e45d.jpg";

const projectData = [
  {
    sectionId: 2,
    projectName: "Plants shop App",
    description: "A site to buy plants from home using a mobile phone.",
    projectLink: "",
    image: ImageOne,
  },
  {
    sectionId: 2,
    projectName: "Ecommerce Website",
    description: "A site for shopping from home using mobile.",
    projectLink: "",
    image: ImageTwo,
  },
  {
    sectionId: 2,
    projectName: "ToDo List",
    description: "",
    projectLink: "",
    image: ImageThree,
  },
  {
    sectionId: 3,
    projectName: "Restaurant App",
    description: "",
    projectLink: "",
    image: ImageFour,
  },
  {
    sectionId: 3,
    projectName: "Portfolio App",
    description: "",
    projectLink: "",
    image: ImageFive,
  },
  {
    sectionId: 2,
    projectName: "Machine Learing project",
    description: "Using python",
    projectLink: "",
    image: ImageSeven,
  },
  {
    sectionId: 3,
    projectName: "Drawing App",
    description: " ",
    projectLink: "",
    image: ImageSix,
  },
  {
    sectionId: 3,
    projectName: "Reading App",
    description: "",
    projectLink: "",
    image: ImageEight,
  },
  {
    sectionId: 3,
    projectName: " Writting App",
    description: "A simple and effective task manager.",
    projectLink: "",
    image: ImageNine,
  },
  {
    sectionId: 3,
    projectName: "Calculator Application",
    description: "",
    projectLink: "",
    image: ImageTen,
  },
];

const filteroptions = [
  { label: "All", id: 1 },
  { label: "WEBSITE", id: 2 },
  { label: "APPLICATION", id: 3 },
];

function Project() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filterValue, setFilterValue] = useState(1);

  const updatedprojectoData =
    filterValue === 1
      ? projectData
      : projectData.filter((item) => item.sectionId === filterValue);

  return (
    <section id="Project" className="Project">
      <PageHeaderContent
        headerText="My Projects"
        icon={<AiFillProject size={40} />}
      />
      <div className="project__content">
        <ul className="project__content__filter">
          {filteroptions.map((option) => (
            <li
              className={option.id === filterValue ? 'active' : ''}
              onClick={() => setFilterValue(option.id)}
              key={option.id}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="project__content__cards">
          {updatedprojectoData.map((item, index) => (
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="project__content__cards__item"
              key={index}
            >
              <div className="project__content__cards__item__img-wrapper">
                <a href={item.projectLink}>
                  <img src={item.image} alt={item.projectName} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredIndex && (
                  <div>
                    <p>{item.projectName}</p>
                    <p>{item.description}</p> {}
                    
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
}

export default Project;