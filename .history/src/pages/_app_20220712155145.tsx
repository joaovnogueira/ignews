import { AppProps } from 'next/app'
import { Provider as NextAuthProvider} from 'next-auth/providers'

import { Header } from '../components/Header';

import '../styles/global.scss'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider>  
      <Header />
      <Component {...pageProps} />
    <NextAuthProvider/>
  );
}

export default MyApp
