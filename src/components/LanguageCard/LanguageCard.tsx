import { Link } from "react-router-dom";

import styles from "./card.module.scss";

import type { LanguageCardType } from "src/types/language-card.type";

export const LanguageCard = ({ name, image, link, projectlength, description }: LanguageCardType) => (
  <div className={styles.card}>
    <div className={styles.card_top}>
      <img src={image} alt={name} />
      <div>
        <h1>{name}</h1>
        <h3>{projectlength} проектов</h3>
      </div>
    </div>
    <p>{description}</p>
    <div className={styles.link_btn}>
      <Link to={link}>Посмотреть</Link>
    </div>
  </div>
);
