import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Stock_Search from './_stocksearch';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Cards from '../components/Cards';

const BgImage= dynamic(() => import("../components/BGImage"), {
  ssr:false
});

const Wrapper = styled.div`
  z-index: 1 
  width: 100%;
  height:100;
  position:fixed;
  justify-content:center;
  align-items;

`;

export default function Home() {
  

  return (
    <div>
    <Wrapper>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="http://localhost:3000/_stocksearch">Blue Chip<Image styles={{height:"50%",width:"50%",marginTop:"180px"}} alt="blue-pig" height={50} width={50} src="/chip1.gif"/></a>
          </h1>
          <Cards/>
        </main>
         
    </div>
   
    </Wrapper>
    <BgImage alt="water"/>
    </div>
  )
}
