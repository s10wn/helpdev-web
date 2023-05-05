import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Navbar } from "src/components/Navbar/Navbar";

import { SideBar } from "src/components/SideBar/SideBar";

import { checkTokenValidity } from "src/utils/check-token.util";

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
      </div>
    </section>
  );
};
