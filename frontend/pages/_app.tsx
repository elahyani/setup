import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layouts/Layout";
import "../node_modules/react-resizable/css/styles.css";
import "../node_modules/react-grid-layout/css/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("--> ", Component.name);
  if (Component.name === "Home" || Component.name === "Error")
    return <Component {...pageProps} />;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
