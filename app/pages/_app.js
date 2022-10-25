import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { store } from "../store";
import CheckMetamask from "../components/checks/CheckMetamask";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CheckMetamask>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </CheckMetamask>
    </Provider>
  );
}

export default MyApp;
