import React from "react";
import Header from '@components/header'


type MyComponentProps = React.PropsWithChildren<{}>;

export default function Layout({children}: MyComponentProps) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  )
}
