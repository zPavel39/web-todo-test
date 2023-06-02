import React, { useState } from "react";
import langStore from "./../../store/interpreter/interpreter";
import "./dropdown.scss";
import { observer } from "mobx-react-lite";

const Dropdown = observer(() => {
    
  const { languages, switchLang } = langStore;
  const [selected, setSelected] = useState("ru");
  const [isActive, setIsActive] = useState(false);
  
  const callbacks = {
    switchLang: (language: string) => {
        setSelected(language);
        setIsActive(false);
        switchLang(language)
    }
  }
  return (
    <div className="dropdown">
      {isActive && (
        <ul className="dropdown__content">
          {languages.map((language: string) => (
            <li
              className="dropdown__item"
              key={language}
              onClick={() => callbacks.switchLang(language)}>
              <span>{language.substring(0, 2)}</span>
            </li>
          ))}
        </ul>
      )}
      <button className="dropdown__btn" onClick={(e) => setIsActive(!isActive)}>
        <span className="dropdown__btn_value">{selected.substring(0, 2)}</span>
      </button>
    </div>
  );
});

export default React.memo(Dropdown);
