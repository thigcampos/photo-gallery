import React, { useState, useEffect } from "react";
import "../../style/global.scss";
import { Icon } from "@iconify/react";
import { Logo } from "../../assets";

const Photos = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [globalTheme, setGlobalTheme] = useState("light-theme");
  const [btnName, setBtnName] = useState("Modo Escuro");
  const [iconName, setIconName] = useState("Modo Escuro");
  const [logoColor, setLogoColor] = useState("#1C1C1E");

  function handleTheme() {
    return setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (darkMode) {
      setGlobalTheme("dark-theme");
      setBtnName("Modo Claro");
      setIconName("bx:bxs-sun");
      setLogoColor("#f1fafc");
    } else {
      setGlobalTheme("light-theme");
      setBtnName("Modo Escuro");
      setIconName("bx:bxs-moon");
      setLogoColor("#1c1c1e");
    }
  }, [darkMode]);

  return (
    <div id={globalTheme}>
      <div id={"body"}>
        <header>
          <nav>
            <Logo theme={logoColor} />
            <ul>
              <li>
                <a href="/" tabIndex="0">
                  photos
                </a>
              </li>
              <li>
                <a href="about" tabIndex="0">
                  sobre
                </a>
              </li>
              <button onClick={handleTheme} tabIndex="0">
                <Icon icon={iconName} height="20" /> <span>{btnName}</span>
              </button>
            </ul>
          </nav>
        </header>
        <main>
          <h2>Galeria Principal</h2>
          <div>
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
            <img alt="ola" tabIndex="0" />
          </div>
        </main>
        <footer>
          <nav>
            <Logo theme={logoColor} />
            <ul>
              <li>
                <a href="/" tabIndex="0">
                  photos
                </a>
              </li>
              <li>
                <a href="about" tabIndex="0">
                  sobre
                </a>
              </li>
              <button onClick={handleTheme} tabIndex="0">
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
