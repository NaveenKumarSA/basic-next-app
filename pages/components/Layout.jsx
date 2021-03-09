import React from 'react'
import Head from "next/head"
import Navbar from './NavBar'
export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>DANAN!</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.5.0/minty/bootstrap.css"/>
            </Head>
            <Navbar/>
            {props.children}
        </div>
    )
}
