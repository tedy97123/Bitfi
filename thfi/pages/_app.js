
import Script from "next/script";
import Head from 'next/head'
 

export default function myApp({ Component, pageProps}) 
{   
    return(
    <>
    
      <Component{...pageProps}/>
    
        
    </>      
  )
}