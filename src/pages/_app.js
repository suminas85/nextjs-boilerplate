import { appWithTranslation } from "next-i18next";
import NextI18nextConfig from "../../next-i18next.config";

const App = function ({ Component, pageProps }) {
  return <Component {...pageProps} />;
};

export default appWithTranslation(App, NextI18nextConfig);
