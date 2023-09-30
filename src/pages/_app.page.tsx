import type { AppProps } from 'next/app';
import { globalStyles } from "../style/global";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {

    return (

        <Component {...pageProps} />

    );
}