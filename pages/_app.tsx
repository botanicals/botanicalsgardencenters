import Head from 'next/head';
import { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* Global site metadata */}
      <DefaultSeo
        // titleTemplate={`%s | ${global.siteTitle}`}
        defaultTitle="Botanicals Garden Centers"
        description="Botanicals Garden Centers and Catalog"
        openGraph={{
          type: 'website',
          site_name: 'Botanicals Garden Centers',
        }}
        twitter={{
          cardType: '',
          handle: 'summary',
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
