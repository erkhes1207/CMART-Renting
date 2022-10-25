import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { store } from "../store";
import CheckMetamask from "../checks/CheckMetamask";
import CheckNetwork from "../checks/CheckNetwork";
import CheckUser from "../checks/CheckUser";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CheckMetamask>
        <CheckNetwork>
          <CheckUser>
            <Layout>
              <Component {...pageProps} />;
            </Layout>
          </CheckUser>
        </CheckNetwork>
      </CheckMetamask>
    </Provider>
  );
}

export default MyApp;
