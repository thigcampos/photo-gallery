import React, { useState, useEffect } from "react";
import "../../style/global.scss";
import { Icon } from "@iconify/react";
import { Logo } from "../../assets";
import { getImages, darkTheme, lightTheme } from "./utils";

const Photos = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [imgArray, setImgArray] = useState([]);
  const [theme, setTheme] = useState(lightTheme);

  function handleTheme() {
    return setDarkMode(!darkMode);
  }

  useEffect(() => {
    darkMode ? setTheme(darkTheme) : setTheme(lightTheme);
  }, [darkMode]);

  useEffect(() => {
    getImages(1, 20, setImgArray);
  }, []);

  return (
    <div id={theme.state}>
      <div id={"body"}>
        <header>
          <nav>
            <Logo theme={theme.logoColor} />
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
                <Icon icon={theme.iconName} height="20" />{" "}
                <span>{theme.btnName}</span>
              </button>
            </ul>
          </nav>
        </header>
        <main>
          <h2>Galeria Principal</h2>
          <div>
            {imgArray.map((image) => (
              <img
                alt="lot of Pexels"
                src={image.src.large}
                loading="lazy"
                tabIndex="0"
                key={image.id}
              />
            ))}
          </div>
        </main>
        <footer>
          <nav>
            <Logo theme={theme.logoColor} />
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
                <Icon icon={theme.iconName} height="20" />
              </button>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
};
export default Photos;
