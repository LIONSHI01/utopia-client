import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Layout from '../components/Layout';
import { ToastContainer } from 'react-toastify';

import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const queryClient = new QueryClient();
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer
              position="bottom-right"
              progressClassName="toastProgress"
              bodyClassName="toastBody"
            />
            <ReactQueryDevtools initialIsOpen={false} />
          </Layout>
        </QueryClientProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
