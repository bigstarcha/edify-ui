import '../styles/globals.css';
import React from 'react';
import Head from 'next/head';

// Ignore the implicit any type
function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                {/* You can add other head elements here */}
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App;