import React from "react";
import "./style.css";
import InfoIcon from "@mui/icons-material/Info";
import {GoPrimitiveDot} from "react-icons/go";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <GoPrimitiveDot fontSize="small" className="widgets__icon" />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn Actualités</h2>
        <InfoIcon />
      </div>
      {newsArticle("Ramadan: les droits et devoirs des salariés", "Il y a 2h  - 3768 lecteurs")}
      {newsArticle("Pourquoi vous êtes malheureux au travail ?", "Il y a 1j  - 9294 lecteurs")}
      {newsArticle("Le business du fromage en chiffres", "Il y a 2j  - 3340 lecteurs")}
      {newsArticle("CV: les centres d'intérêt comptent", "Il y a 2j  - 452 lecteurs")}
     
    </div>
  );
}

export default Widgets;
