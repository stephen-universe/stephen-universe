import Head from "next/head";
import appData from "@content/data/setting.json";
import '../styles/scss/style.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";


function MyApp({ Component, pageProps }) {

  return (
    <>



      <Head>
          {/* seo begin */}
          <title>{appData.siteSettings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* seo end */}        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;



