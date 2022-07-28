import { Layout } from "@components/layout";

function Application({ Component, pageProps }) {
  return (
    <Layout hideFooter={Component.hideFooter}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Application;
