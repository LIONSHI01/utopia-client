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
              <script>
                {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-PN668BW');
`}
              </script>

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
