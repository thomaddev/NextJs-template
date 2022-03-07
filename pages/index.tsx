import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Head from "next/head";
import About from "./about";


class Index extends Component {
  // static async getInitialProps({ ctx }) {
  //   const { store, isServer } = ctx;
  //
  //   // store.dispatch(ActionCreator.translationRequest("es"));
  //
  //   return { isServer };
  // }

  componentDidMount() {
    // const { dispatch, isServer, translate } = this.props;
    //
    // if (isServer && !translate) {
    //   dispatch(ActionCreator.translationRequest("es"));
    // }
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>My website</title>
          <meta name="title" content="my website" />
          {/*<meta description="Here is the description" />*/}
        </Head>
        {/*<About />*/}
      </Fragment>
    );
  }
}

export default connect()(Index);
