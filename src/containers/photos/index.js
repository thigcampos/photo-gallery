import React, { useState, useEffect } from "react";
import "../../style/global.scss";
import { Icon } from "@iconify/react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Photos = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [globalTheme, setGlobalTheme] = useState("light-theme");
  const [btnName, setBtnName] = useState("Modo Escuro");
  const [iconName, setIconName] = useState("Modo Escuro");

  function handleTheme() {
    return setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (darkMode) {
      setGlobalTheme("dark-theme");
      setBtnName("Modo Claro");
      setIconName("bx:bxs-sun");
    } else {
      setGlobalTheme("light-theme");
      setBtnName("Modo Escuro");
      setIconName("bx:bxs-moon");
    }
  }, [darkMode]);

  return (
    <div id={globalTheme}>
      <div id={"body"}>
        <header>
          <nav>
            <Logo />
            <ul>
              <li>
                <a href="/">photos</a>
              </li>
              <li>
                <a href="about">sobre</a>
              </li>
              <button onClick={handleTheme}>
                <Icon icon={iconName} height="20" /> <span>{btnName}</span>
              </button>
            </ul>
          </nav>
        </header>
        <main>
          <h2>Galeria Principal</h2>
          <div>
            <img alt="ola" />
            <img alt="ola" />
            <img alt="ola" />
            <img alt="ola" />
            <img alt="ola" />
            <img alt="ola" />
            <img alt="ola" />
            <img alt="ola" />
            <img alt="ola" />
            <img alt="ola" />
            <img alt="ola" />
            <img alt="ola" />
          </div>
        </main>
        <footer>
          <nav>
            <Logo />
            <ul>
              <li>
                <a href="/">photos</a>
              </li>
              <li>
                <a href="about">sobre</a>
              </li>
              <button onClick={handleTheme}>
                <Icon icon={iconName} height="20" />
              </button>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
};
export default Photos;
