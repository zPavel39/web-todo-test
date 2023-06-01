import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">ToDoList</h1>
      <a href="">
        <img className="header__image" src="/logo_gh.png" alt="GH" />
      </a>
    </header>
  );
};

export default React.memo(Header);
