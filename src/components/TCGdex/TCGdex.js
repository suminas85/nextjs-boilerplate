import React from "react";
import { useTranslation } from "next-i18next";

const TCGdex = () => {
  const { t } = useTranslation("swsh");

  return <h1>{t("name")}</h1>;
};

export default TCGdex;
