import { AppProps } from 'next/app'
import { Provider } from 'next-auth/react'

import { Header } from '../components/Header';

import '../styles/global.scss'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>  
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
