import type { AppProps } from 'next/app'
import Head from 'next/head';
import Script from 'next/script';
import '@/styles/main.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        {/* Gtag - Script */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YSD2Q72W1H" strategy="afterInteractive"/>
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-YSD2Q72W1H');
            `}
        </Script>
        <Component {...pageProps} />
    </>
)}