import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import React, { useEffect } from 'react';
import Script from 'next/script';
interface MyNextData {
  page: {
    pathname: string;
    // other properties here
  };
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  
  render() {
    const page = this.props.__NEXT_DATA__.page;
    const pathname = typeof page === 'string' ? page : '/';
    const pageTitle = pathname.charAt(1).toUpperCase() + pathname.slice(2) || "Home";
    const title = `Lynnux.xyz | ${pageTitle}`;
    const is404Page = pathname === '/404';
    const isHomePage = pathname === '/';
    const canonical = `https://lynnux.xyz${title}`
  
    return (
        <Html>
            <Head>
                {/* Dev Credit */}
                <meta name="author" content="LynnuxDev"/>

                {/* Browser walking */}
                <meta name="description" content="Hi there i'm lynn and i am a passionate Discord bot developer and website developer with experience in various programming languages such as Python, JavaScript, and HTML/CSS and in addition to that im also an artist who loves to make emotes for discord/twitch. I love creating new projects and bringing ideas to life through code or art. I'm constantly learning and exploring new technologies to improve my skills and provide better solutions for my users. I believe that good communication and attention to detail are essential in creating successful projects. Let's work together to create something amazing!"/>
                <meta name="language" content="en"/>
                <link rel="canonical" href={canonical}/>

                {/* Embeding */}
                <meta name="theme-color" content="#ff47ff"/>
                <meta property="og:site_name" content="https://lynnux.xyz/" />
                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="./assets/images/favicon.png"/>
                <meta property="og:image:secure_url" content="https://lynnux.xyz/assets/images/favicon.png"/>
                <meta property="og:description" content="Hi there i'm lynn and i am a passionate Discord bot developer and website developer with experience in various programming languages such as Python, JavaScript, and HTML/CSS and in addition to that im also an artist who loves to make emotes for discord/twitch. I love creating new projects and bringing ideas to life through code or art. I'm constantly learning and exploring new technologies to improve my skills and provide better solutions for my users. I believe that good communication and attention to detail are essential in creating successful projects. Let's work together to create something amazing!" />

                {/* Favicon */}
                <link rel="shortcut icon" href="/assets/images/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

                {/* google font link */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" as="style"/>

                {/* 404.tsx Only */}
                {is404Page && (
                    <meta name="robots" content="noindex"/>
                    
                )}
                {isHomePage && (
                    <meta name="robots" content="index, follow"/>
                )}
            </Head>
            <body>
                {/* Google Tag Manager - Noscript Fallback */}
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=G-YSD2Q72W1H" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
                </noscript>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
    
  }
}

export default MyDocument;