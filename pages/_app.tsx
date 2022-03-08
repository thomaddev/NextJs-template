import React from "react";
import App from "next/app";
import {wrapper} from '../src/store';
import {AppContext} from "next/dist/pages/_app";
import Layout from "../src/components/layout/layout";
import '../styles/globals.scss'
import {appWithTranslation} from 'next-i18next'

class MyApp extends App {
  static async getInitialProps({Component, ctx}: AppContext) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {
      pageProps
    };
  }

  render() {
    const {Component, pageProps} = this.props;
    return <React.StrictMode>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.StrictMode>
  }
}

export default wrapper.withRedux(appWithTranslation(MyApp));
