import { Field } from "formik";

import styles from "./input.module.scss";

import type { InputType } from "src/types/FieldType";

export const Input = ({ type, image, label }: InputType) => (
  <div className={styles.groups}>
    <Field name={type} type={type} required />
    <span />
    <label htmlFor="type">{label}</label>
    <img src={image} alt="" />
  </div>
);
