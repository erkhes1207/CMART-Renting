import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { store } from "../store";
import CheckMetamask from "../checks/CheckMetamask";
import CheckNetwork from "../checks/CheckNetwork";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CheckMetamask>
        <CheckNetwork>
          <Layout>
            <Component {...pageProps} />;
          </Layout>
        </CheckNetwork>
      </CheckMetamask>
    </Provider>
  );
}

export default MyApp;
