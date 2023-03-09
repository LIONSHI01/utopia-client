import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from '../components/Layout';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalStyles';
import { darkTheme, lightTheme } from '../styles/themes';
import { useDarkMode } from '../utils/useDarkMode';

import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/nprogress.css';
import 'react-loading-skeleton/dist/skeleton.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // FOR useQuery
  const queryClient = new QueryClient();

  // FOR DarkMode theme
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={themeMode}>
            <Layout theme={theme} themeToggler={themeToggler}>
              <Component {...pageProps} />
              <ToastContainer
                position="bottom-right"
                progressClassName="toastProgress"
                bodyClassName="toastBody"
              />
              <ReactQueryDevtools initialIsOpen={false} />
            </Layout>
            <GlobalStyles />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
