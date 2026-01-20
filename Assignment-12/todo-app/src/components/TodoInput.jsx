// import React, { useState } from 'react';

// const TodoInput = React.memo(function TodoInput({ addTodo }) {
//   const [text, setText] = useState('');

//   const submit = () => {
//     if (!text.trim()) return;
//     addTodo(text);
//     setText('');
//   };

//   return (
//     <div className="input-wrapper">
//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="ახალი დავალება..."
//       />
//       <button onClick={submit}>დამატება</button>
//     </div>
//   );
// });

// export default TodoInput;
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function TodoInput({ addTodo }) {
  const [text, setText] = useState("");
  const { t } = useLanguage();

  const submit = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="input-wrapper">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t("placeholder")}
      />
      <button onClick={submit}>{t("add")}</button>
    </div>
  );
}
