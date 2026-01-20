import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <h1>{t("header")}</h1>

      <div>
        <button onClick={() => setLang("ka")} disabled={lang === "ka"}>
          KA
        </button>
        <button onClick={() => setLang("en")} disabled={lang === "en"}>
          EN
        </button>
      </div>
    </header>
  );
}
