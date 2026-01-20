import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  ka: {
    titleTodo: "To Do",
    titleProgress: "მიმდინარე",
    titleDone: "შესრულებული",
    add: "დამატება",
    placeholder: "ახალი დავალება...",
    toProgress: "მიმდინარე",
    back: "უკან",
    done: "დასრულება",
    delete: "წაშლა",
    header: "დავალებების მენეჯერი",
  },
  en: {
    titleTodo: "To Do",
    titleProgress: "In Progress",
    titleDone: "Done",
    add: "Add",
    placeholder: "New task...",
    toProgress: "In Progress",
    back: "Back",
    done: "Done",
    delete: "Delete",
    header: "Task Manager",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ka");

  const t = (key) => translations[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
