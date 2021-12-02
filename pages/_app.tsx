import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import '../styles/nprogress.css';
import { Router } from 'next/router';
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
