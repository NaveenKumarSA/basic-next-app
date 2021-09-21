import React from "react";
import Head from "next/head";
//import MyNavbar from "./MyNavBar";
export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>DANAN!</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.5.0/minty/bootstrap.css"
        />
        <script src="../_vendor/jquery/dist/jquery.min.js"></script>
        <script src="../_vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        <script src="../_assets/js/custom.js"></script>
      </Head>
    {/*  <MyNavbar /> */}
      {props.children}
    </div>
  );
}
