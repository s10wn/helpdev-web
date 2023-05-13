import { BsSearch } from "react-icons/bs";

import { MdOutlineNotificationsNone } from "react-icons/md";

import styles from "./navbar.module.scss";

export const Navbar = () => (
  <div className={styles.navbar}>
    <div className={styles.input}>
      <button>
        <BsSearch />
      </button>
      <input type="text" placeholder="Search" />
    </div>
    <div className={styles.navbar_right}>
      <div className={styles.notify}>
        <MdOutlineNotificationsNone />
      </div>
      <div className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/u/54907004?v=4" alt="profile" />
      </div>
    </div>
  </div>
);
