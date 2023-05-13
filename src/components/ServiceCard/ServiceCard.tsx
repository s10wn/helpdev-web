import styles from "./service.module.scss";

type ServiceCardProps = {
  image: string;
  title: string;
};
export const ServiceCard = ({ image, title }: ServiceCardProps) => (
  <div className={styles.service_card}>
    <img src={image} alt="" />
    <h3>{title}</h3>
  </div>
);
