import React from "react";
import "../../style/global.scss";
import { Icon } from "@iconify/react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Photos = () => (
  <div id={"light-theme"}>
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
            <button>
              <Icon icon="bx:bxs-moon" height="20" /> <span>Modo Escuro</span>
            </button>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Galeria Principal</h2>
        <div id={"image-row"}>
          <img alt="ola" />
          <img alt="ola" />
          <img alt="ola" />
          <img alt="ola" />
          <img alt="ola" />
        </div>
        <div id={"image-row"}>
          <img alt="ola" />
          <img alt="ola" />
          <img alt="ola" />
          <img alt="ola" />
          <img alt="ola" />
        </div>
        <div id={"image-row"}>
          <img alt="ola" />
          <img alt="ola" />
          <img alt="ola" />
          <img alt="ola" />
          <img alt="ola" />
        </div>
        <div id={"image-row"}>
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
            <button>
              <Icon icon="bx:bxs-moon" height="20" />
            </button>
          </ul>
        </nav>
      </footer>
    </div>
  </div>
);

export default Photos;
