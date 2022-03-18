import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DataProvider } from '../context/DataContext';

// font awesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ThemeProvider enableSystem={true} attribute="class">
         <DataProvider>
            <Component {...pageProps} />
         </DataProvider>
      </ThemeProvider>
   );
}

export default MyApp;
