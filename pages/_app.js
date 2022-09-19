import "../styles/globals.css";
import store from "../store/index";
import { Provider } from "react-redux";
import PageWrapper from "../components/PageWrapper";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </Provider>
  );
}

export default MyApp;
