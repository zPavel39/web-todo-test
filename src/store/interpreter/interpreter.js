import * as languages from "./export-lang";
import { makeAutoObservable } from "mobx";

class Interpreter {
  lang = "russian";
  languages = [...Object.keys(languages)];

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Переключаем язык интерфейса
   * @param {String} language язык на который переключаем
   */
  switchLang = (language) => {
    this.lang = language;
    console.log("123", languages[this.lang].words["Update"]);
  };

  /**
   * Находит слова по ключу
   * @param {string} key ключ на английском языке соответствующий слову
   * @returns {string} Возвращает переведенное слово
   */
  translate = (key) => {
    return languages[this.lang].words[key];
  };
}

export default new Interpreter();
