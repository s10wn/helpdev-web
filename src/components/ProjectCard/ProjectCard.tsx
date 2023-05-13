import { Link } from "react-router-dom";

import styles from "./card.module.scss";

import type { ProjectCardType } from "src/types/project-card.type";

export const ProjectCard = ({ name, image, link, stack }: ProjectCardType) => (
  <div className={styles.language_card}>
    <div>
      <img src={image} alt="" />
    </div>
    <h3>{stack.join("")}</h3>
    <h1>{name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet expedita fugit tempora neque quae?</p>
    <Link to={link}>Подробнее</Link>
  </div>
);
