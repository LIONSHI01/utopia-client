import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';

import { store } from '../store/store';
import Layout from '../components/Layout';
import { ToastContainer } from 'react-toastify';

import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps: { session, pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer
            position="bottom-right"
            progressClassName="toastProgress"
            bodyClassName="toastBody"
          />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
