import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "nav.admin": "To admin view",
      "nav.shops": "Shops",
      "nav.about": "About us",
      "nav.cart": "Cart",
      "toast.cart-successful": "🦄 Successfully",
      "toast.to-cart": "to cart",
    }
  },
  ee: {
    translation: {
      "nav.admin": "Adminitraatori vaatesse",
      "nav.shops": "Poed",
      "nav.about": "Meist",
      "nav.cart": "Ostukorv",
      "toast.cart-successful": "🦄 Edukalt",
      "toast.to-cart": "ostukorvi lisatud",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;