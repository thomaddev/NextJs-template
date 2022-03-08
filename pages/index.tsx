import React, {Component, Fragment} from "react";
import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from 'next-i18next';

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default function Index(props: any) {
  const {t} = useTranslation();
  return (
    <Fragment>
      <Head>
        <title>My website</title>
        <meta name="title" content="my website"/>
        {/*<meta description="Here is the description" />*/}
      </Head>
      {/*<About />*/}
      <h3>{t('title')}</h3>
    </Fragment>
  );
}
// class Index extends Component {
//   render() {
//     // const {t} = useTranslation();
//     console.log('-=-=-=-=', this.props)
//
//   }
// }

// export default (Index);
