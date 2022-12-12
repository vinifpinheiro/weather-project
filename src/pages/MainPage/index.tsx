import { MainComponent } from "../../components/MainComponent";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.main__div}>
      <div className={styles.texts}>
        <h1 className={styles.h1__title}>Bem vindo!</h1>
        <h1 className={styles.h1__texts}>
          Esse é um site para descobrir clima de países e cidades
        </h1>
      </div>
      <MainComponent />
    </div>
  );
};
