import '../styles/globals.css';
import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher: (url) => fetch(url).then((r) => r.json()) }}>
      <div className="h-screen bg-gray-50 flex flex-col">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
