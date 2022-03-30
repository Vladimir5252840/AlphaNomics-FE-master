// import "./App.css";
import Router from "./router";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import Loader from "./components/Loader";

import { DarkThemeProvider } from "./themestore/themeprovider";

i18n.use(initReactI18next).init({
  resources: {
    en,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {

  return (
    <DarkThemeProvider>
      <Router />
    </DarkThemeProvider>
  );
}

export default App;
