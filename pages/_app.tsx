
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import profile from './profileSettings';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

//const root = ReactDOM.createRoot(document.getElementById("root"));
