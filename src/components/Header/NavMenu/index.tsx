import { Link } from "react-router-dom";
import {
  MdOutlineHome as IconHome,
  MdOutlineLocationOn as IconPin,
  MdOutlineFlag as IconFlag,
  MdPersonOutline as IconPerson,
  MdMenu as IconMenu,
  MdOutlineClose as IconClose
} from "react-icons/md";
import { useRef } from "react";
import styles from "./NavMenu.module.scss"
import classNames from "classnames";

export const NavMenu = () => {
  const navRef = useRef<HTMLInputElement>(null)

  const ShowMenu = () => {
    navRef.current?.classList.toggle("menu__nav")
  }

 

  return (
    <div>
      <nav ref={navRef}>
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
        <button className={classNames("nav__button", "nav__close")}><IconClose/></button>
      </nav>
      <button className={styles.nav__button}><IconMenu/></button>
    </div>
  );
};
