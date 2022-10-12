import "../styles/globals.css";
import store from "../store/index";
import { Provider } from "react-redux";
import PageWrapper from "../components/PageWrapper";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>audiophile</title>
        <link rel="icon" type="image/png" href="/img/headphones.png"></link>
      </Head>
      <Provider store={store}>
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </Provider>
    </>
  );
}

export default MyApp;
