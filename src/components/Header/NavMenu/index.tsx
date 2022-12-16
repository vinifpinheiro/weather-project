import { Link } from "react-router-dom";
import {
  MdOutlineHome as IconHome,
  MdOutlineLocationOn as IconPin,
  MdOutlineFlag as IconFlag,
  MdPersonOutline as IconPerson,
  MdMenu as IconMenu,
  MdOutlineClose as IconClose,
} from "react-icons/md";
import { useRef, useState } from "react";
import styles from "./NavMenu.module.scss";
import classNames from "classnames";

export const NavMenu = () => {
  
  const [sidebar, setSideBar] = useState(false)
  
  const showSidebar = () => setSideBar(!sidebar)

  return (
    <header>
      <nav className={classNames(sidebar ? styles.nav__active : styles.nav__menu)} onClick={showSidebar}>
        <Link to={"/"}>
          <IconHome />
          Início
        </Link>
        <Link to={"/brazil"}>
          <IconPin /> Brasil
        </Link>
        <Link to={"/country"}>
          <IconFlag /> Países
        </Link>
        <Link to={"/about"}>
          <IconPerson /> Sobre
        </Link>
        <button className={classNames(styles.nav__button , styles.nav__close)} onClick={showSidebar}>
          <IconClose />
        </button>
      </nav>
      <button className={styles.nav__button} onClick={showSidebar}>
        <IconMenu size={30} />
      </button>
    </header>
  );
};
