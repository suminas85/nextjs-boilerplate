import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import TCGdex from "~/components/TCGdex";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Nextjs boilerplate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <TCGdex />
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      foo: "bar",
      ...(await serverSideTranslations(locale, ["swsh"])),
    },
  };
}
