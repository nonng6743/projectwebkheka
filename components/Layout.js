import React from 'react';
import Head from 'next/head'
import Navbar from "./AppBar";

const layout=({children})=>{
    return(
        <div>
           <Head>
               <title>Kheha</title>
            </Head> 
        <Navbar />
        
        {children}
        </div>
         
    )
}


export default layout