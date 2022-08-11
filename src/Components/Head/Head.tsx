import Head from "next/head"
import React from "react"


const NextHead: React.FC =  ({ children }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <link rel="icon" id="icon" key="icon" href="/favicon.svg" />
      {children}
    </Head>
  );
}

export default NextHead;
