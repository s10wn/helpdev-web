import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "src/components/Navbar/Navbar";
import { SideBar } from "src/components/SideBar/SideBar";

import { checkTokenValidity } from "src/utils/check-token.util";

import { language_card } from "src/constant/language-card";
import { LanguageCard } from "src/components/LanguageCard/LanguageCard";

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
          <div className={styles.project_list}>
            {language_card.map((card) => (
              <LanguageCard
                key={card.id}
                name={card.name}
                image={card.image}
                link={card.link}
                projectlength={card.projectlength}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
