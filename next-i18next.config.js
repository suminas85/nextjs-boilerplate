const HttpBackend = require("i18next-http-backend");

module.exports = {
  debug: true,
  reloadOnPrerender: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeDetection: false,
  },
  defaultNS: "swsh",
  react: {
    useSuspense: true,
  },
  backend: {
    loadPath:
      "https://api.tcgdex.net/v2/{{lng}}/series/{{ns}}",
  },
  serializeConfig: false,
  use: [HttpBackend],
};
