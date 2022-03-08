import React, {Fragment} from "react";
import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from 'next-i18next';
import {increaseCount} from "../src/actions";
import {connect, useDispatch} from "react-redux";

export async function getStaticProps({locale}: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

function Index(props: any) {
  const {t} = useTranslation();
  const dispatch = useDispatch()
  const increase = () => {
    dispatch(increaseCount(props.count + 1))
  }

  return (
    <Fragment>
      <Head>
        <title>My website</title>
        <meta name="title" content="my website"/>
      </Head>
      <div style={{textAlign: 'center'}}>
        <h1>{t('title')}</h1>
        <a onClick={(e) => increase()}>About</a>
        <p>{props.count}</p>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    count: state.project.count
  }
};

const mapDispatchToProps = {
  increaseCount
};
export default connect(mapStateToProps, mapDispatchToProps)(Index)
