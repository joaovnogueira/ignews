import type { AppProps } from 'next/app'
import '../styles/global.scss'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Header /></Header>
    <Component {...pageProps} />
  );
}
