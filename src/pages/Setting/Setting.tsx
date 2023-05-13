import { useState } from "react";
import { Field, Form, Formik } from "formik";

import { BsGithub, BsTelegram } from "react-icons/bs";
import { BiHide, BiShowAlt } from "react-icons/bi";

import { SideBar } from "src/components/SideBar/SideBar";

import { logger } from "src/utils/logger.util";

import styles from "./setting.module.scss";

export const Setting = () => {
  const [showpass, setShowpass] = useState(false);

  return (
    <section>
      <SideBar />
      <div className="main">
        <div className={styles.setting_title}>
          <h1>Настройки</h1>
        </div>

        <Formik
          initialValues={{
            nickname: "s10wn",
            own: "htpps://parviz.dev",
            email: "hello@parviz.dev",
            password: "hello123",
          }}
          onSubmit={async (values) => {
            logger.info(values);
          }}
        >
          <Form className={styles.setting_form}>
            <div className={styles.setting_card}>
              <h4>NickName</h4>
              <Field id="nickname" name="nickname" placeholder="NickName" autoComplete="false" />
            </div>

            <div className={styles.setting_card}>
              <h4>Own Website</h4>
              <Field id="own" name="own" placeholder="Own" autoComplete="false" />
            </div>

            <div className={styles.setting_card}>
              <h4>Email</h4>
              <Field id="email" name="email" placeholder="email" autoComplete="false" type="email" />
            </div>

            <div className={styles.setting_card}>
              <h4>
                Password
                <button onClick={() => setShowpass(!showpass)}>{showpass ? <BiHide /> : <BiShowAlt />}</button>
              </h4>
              <Field
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="false"
                type={showpass ? "password" : "text"}
              />
            </div>
            <div className={styles.setting_link}>
              <h1>Add Social Links</h1>
              <div className={`${styles.setting_card} ${styles.linked}`}>
                <BsGithub /> Github
              </div>
              <div className={styles.setting_card}>
                <BsTelegram />
                Telegram
              </div>
            </div>
            <div className={styles.setting_form_btn}>
              <button type="submit">Edit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};
