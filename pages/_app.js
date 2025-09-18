import '../styles/globals.css'
import React, { useEffect, useState } from "react";
function MyApp({ Component, pageProps }) {
  return (
    <main className="parent-body">
      <Component {...pageProps} />
     </main>);
}

export default MyApp
