import { ButtonBrazil, ButtonCountrys } from "./Buttons";
import styles from "./MainComponent.module.scss";

export const MainComponent = () => {
  return (
    <div className={styles.div__main}>
      <div className={styles.text__component}>
        <h1 className={styles.texts}>Qual função deseja usar?</h1>
      </div>
      <div className={styles.buttons}>
        <ButtonBrazil />
        <ButtonCountrys />
      </div>
    </div>
  );
};
