import React from "react";
import App from "next/app";
import {wrapper} from '../src/store';
import {AppContext} from "next/dist/pages/_app";

class MyApp extends App {

  static async getInitialProps({Component, ctx}: AppContext) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;
    return <React.StrictMode> <Component {...pageProps} /> </React.StrictMode>
  }
}

export default wrapper.withRedux(MyApp);
