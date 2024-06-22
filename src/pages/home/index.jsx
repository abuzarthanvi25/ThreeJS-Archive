import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { projectUrls } from "../../App";
import placeholderImage from "../../assets/thumbnails/placeholder.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path = "") => {
    if (typeof path !== "string" || !path) return;
    navigate(path);
  };

  return (
    <div className="container-main color-white">
      <h1 className="p-heading">THREE JS ARCHIVE</h1>
      <div>
        <h2 className="content-heading">Contents</h2>
        <div className="content-wrapper">
          {projectUrls.map((project) => (
            <div
              key={project.url}
              onClick={() => handleNavigation(project.url)}
              className="card"
            >
              <img
                src={project.thumbnail ?? placeholderImage}
                alt={project.title}
                className="thumbnail"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
