import { Link } from "react-router-dom";
import styles from "./Buttons.module.scss";

export const ButtonBrazil = () => {
  return (
    <div className={styles.main__button}>
      <Link to={"/brazil"} className={styles.button__component}>
        {" "}
        Cidades - Brasil{" "}
      </Link>
    </div>
  );
};

export const ButtonCountrys = () => {
  return (
    <div className={styles.main__button}>
      <Link to={"/country"} className={styles.button__component}>
        Outros Países
      </Link>
    </div>
  );
};
