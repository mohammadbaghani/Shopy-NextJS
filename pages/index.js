import MainHeader from "./main-header";
import Firstpage from "./firstpage";
import React from "react";
import Head from 'next/head'
import NoSSR from 'react-no-ssr';
function Home() {
  const isServer = typeof window === 'undefined'
  const WOW = !isServer ? require('wowjs') : null
  return (
    <div>
      <Head>
        <title>
          Shikpooshan
        </title>
      </Head>
      <MainHeader />
      <NoSSR />
      <Firstpage />
    </div >
  )
}
export default Home;