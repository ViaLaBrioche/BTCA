import React from "react";
import "./header.scss";
import { ReactComponent as Logo } from "./Icons/logo.svg";
import { ReactComponent as World } from "./Icons/world.svg";
import { ReactComponent as Dollar } from "./Icons/dollar.svg";

export const Header = () => {
  const menu = ["Функции", "Кошельки", "Участие", "Ресурсы", "Новости"];

  return (
    <header>
      <div className="container">
        <div className="__left">
          <div className="_logo">
            <Logo />
          </div>
          <div className="_menu">
            {menu.map((el) => (
              <span key={el}>{el}</span>
            ))}
            <span className="_bold">O BTCA</span>
          </div>
        </div>
        <div className="__right">
          <button>
            <World /> 
            <span>RUS</span>
          </button>
          <button>
            <Dollar /> 
            <span>10.765</span>
          </button>
        </div>
      </div>
    </header>
  );
};
