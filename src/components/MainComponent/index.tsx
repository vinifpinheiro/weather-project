import { ButtonBrazil, ButtonCountrys } from "./Buttons";
import styles from "./MainComponent.module.scss";

export const MainComponent = () => {
  return (
    <div>
      <div className={styles.text__component}>
        <h1>Qual função deseja usar?</h1>
      </div>
      <div className={styles.buttons}>
        <ButtonBrazil />
        <ButtonCountrys />
      </div>
    </div>
  );
};
