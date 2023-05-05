import { Link } from "react-router-dom";

import type { LanguageCardType } from "src/types/language-card.type";

export const LanguageCard = ({ name, image, link, description, projectlength }: LanguageCardType) => (
  <div>
    <img src={image} alt="" />
    <h3>{projectlength} проектов</h3>
    <h2>{name}</h2>
    <p>{description}</p>
    <Link to={link}>Подробнее</Link>
  </div>
);
