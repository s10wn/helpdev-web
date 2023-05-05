import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "src/components/Navbar/Navbar";
import { LanguageCard } from "src/components/LanguageCard/LanguageCard";
import { SideBar } from "src/components/SideBar/SideBar";

import { checkTokenValidity } from "src/utils/check-token.util";

import { language_card } from "src/constant/language-card";

import styles from "./home.module.scss";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkTokenValidity()) {
      navigate("/auth/login");
    }
  });

  return (
    <section>
      <SideBar />
      <div className={styles.main}>
        <Navbar />
        <div className={styles.main_page}>
          {language_card.map((card) => (
            <LanguageCard
              key={card.id}
              name={card.name}
              image={card.image}
              link={card.link}
              description={card.description}
              projectlength={card.projectlength}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
