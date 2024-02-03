import Head from 'next/head';
import '../styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Gantari&display=swap' />
            </Head>
            <div>
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
