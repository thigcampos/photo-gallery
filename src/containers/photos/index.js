import React, { useState, useEffect } from "react";
import "../../style/global.scss";
import { Icon } from "@iconify/react";
import { Logo } from "../../assets";
import { getImages, darkTheme, lightTheme, nextPage, prevPage } from "./utils";
import Pagination from "../../components/pagination";

const Photos = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState(lightTheme);
  const [pageIndex, setIndex] = useState(1);

  function handleTheme() {
    return setDarkMode(!darkMode);
  }

  useEffect(() => {
    darkMode ? setTheme(darkTheme) : setTheme(lightTheme);
  }, [darkMode]);

  useEffect(() => {
    getImages(pageIndex, setData);
  }, [pageIndex]);

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
            {data?.photos?.map((photo) => (
              <img
                alt="lot of Pexels"
                src={photo.src.large}
                loading="lazy"
                tabIndex="0"
                key={photo.id}
              />
            ))}
          </div>
          <Pagination
            prev={data?.prev_page}
            next={data?.next_page}
            index={pageIndex}
            nextFunction={() => {
              nextPage(setIndex, pageIndex);
            }}
            prevFunction={() => {
              prevPage(setIndex, pageIndex);
            }}
          />
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
