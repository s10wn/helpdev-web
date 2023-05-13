import Cookies from "js-cookie";
import { Formik, Form } from "formik";
import adapter from "webrtc-adapter";
import { useNavigate, Link } from "react-router-dom";

import { user, lock, google, github, apple } from "src/assets/";

import { Input } from "src/components/Input/Input";

import { logger } from "src/utils/logger.util";

import { ServiceCard } from "src/components/ServiceCard/ServiceCard";

import styles from "./auth.module.scss";

export const Register = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.auth_main}>
      <div className={styles.auth}>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values) => {
            logger.info(values);
            Cookies.set("token", "1234567890", { secure: true, sameSite: "strict" });
            navigate("/");
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.left}>
                <Input image={user} label="Username" type="username" />
                <Input image={lock} label="Password" type="password" />
              </div>
              <div className={styles.right}>
                <ServiceCard image={github} title="Sign up with Github" />
                <ServiceCard image={google} title="Sign up with Google" />
                {adapter.browserDetails.browser === "safari" && (
                  <ServiceCard image={apple} title="Sign up with Apple" />
                )}
                <button type="submit" disabled={isSubmitting}>
                  Sign Up
                </button>
                <h5>
                  Already have an account? <Link to="/auth/login">Login</Link>
                </h5>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
