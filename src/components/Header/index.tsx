import styles from "./Header.module.scss";
import { WiDayHail as IconCloud } from "react-icons/wi"

export const Header = () => {
  return (
    <div>
      <header className={styles.main__header}>
        <h1 className={styles.h1__header}>Weather</h1>
        <IconCloud size={40} className={styles.icon__header} />
      </header>
    </div>
  );
};
