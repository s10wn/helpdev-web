import cx from "classnames";
import { Link, useLocation } from "react-router-dom";

import styles from "./item.side.module.scss";

import type { LiskListType } from "src/types/lisk-list-type";

export const ItemSide = ({ title, icon, link }: LiskListType) => {
  const location = useLocation();
  const Icons = icon;

  return (
    <Link to={link} className={cx(styles.menu_item, location.pathname === link && "menu-item-active")}>
      <div className={styles.icon}>
        <Icons />
      </div>

      <p>{title}</p>
    </Link>
  );
};
