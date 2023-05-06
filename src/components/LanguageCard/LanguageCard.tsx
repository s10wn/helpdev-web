import { Link } from "react-router-dom";

import styles from "./card.module.scss";

import type { LanguageCardType } from "src/types/language-card.type";

export const LanguageCard = ({ name, image, link, projectlength }: LanguageCardType) => (
  <div className={styles.language_card}>
    <div>
      <img src={image} alt="" />
    </div>
    <h3>{projectlength} проектов</h3>
    <h1>{name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet expedita fugit tempora neque quae?</p>
    <Link to={link}>Подробнее</Link>
  </div>
);
