import styles from "./header.module.css";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header >
      <div className={styles.container}>
        <Link to="/">
          <h1 className={styles.logo}>
            <span>Sua</span>Cripto
          </h1>
        </Link>
      </div>
    </header>
  );
};
