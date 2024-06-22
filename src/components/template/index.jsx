import React from "react";
import "./index.css";

const Template = ({
  title = "three.js archive",
  subTitle = "Test",
  posted = "2015.11.24",
  updated = "2016.1.8",
  desc = "lorem ipsum lorem ipsum lorem ipsum",
  onTitleClick = () => {},
  onBack = () => {},
  children = <></>,
}) => {
  return (
    <div className="l-page l-page--white">
      <div className="p-website-outline">
        <h1 className="p-website-outline__title">
          <a href="#" onClick={onTitleClick}>
            <span>{title}</span>
          </a>
        </h1>
      </div>
      <div className="p-sketch-outline">
        <h2 className="p-sketch-outline__title">{subTitle}</h2>
        <p className="p-sketch-outline__date">
          Posted: {posted} / Updated: {updated}
        </p>
        <p className="p-sketch-outline__description">{desc}</p>
      </div>
      {children}
      <div className="p-utility-menu">
        <a href="#" onClick={onBack} className="c-button c-button--white">
          <span className="c-button__icon c-button__icon--back c-button__icon--white"></span>
          <span className="c-button__label">
            <span className="js-split-str">Back</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Template;
