import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import Head from "next/head";

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>My website</title>
          <meta name="title" content="my website"/>
          {/*<meta description="Here is the description" />*/}
        </Head>
        {/*<About />*/}
      </Fragment>
    );
  }
}

export default Index;
