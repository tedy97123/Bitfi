import styles from '../styles/_news.module.css'
import { Toolbar } from '../components/toolbar';
import React, {useEffect, useState,} from'react';
import axios from 'axios';
import Image from 'next/image';

function News({articles}){

     let data =  articles.data
 
    let [items,setItems] = React.useState('');
    let [active, setActive] = React.useState('');
    let [category, setCategory] = React.useState('');

    //fetches news data based on parameters entered
  
    return(
        <div className='page-container' > 
        <Toolbar/>
            <div className={styles.main}>
                <h1 className={styles.title}>Your one stop shop for everything financial news! </h1>
            </div>
        <div className={styles.main} href={articles.url}> 
            {data.map((article, index) => (
            <div key={index} className={styles.card}>
              <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
              <p className={styles.card}>{article.description} <p>{article.snippet}</p> </p>
              {!!article.urlToImage && <Image alt="article_image"classname={styles.post}src={article.image_url} />}
            </div>
          ))}
        </div>
    </div>
    )
}

 export async function getStaticProps() {

    const apiResponse = await fetch(`https://api.marketaux.com/v1/news/all?exchanges=NYSE&filter_entities=true&limit=10&published_after=2022-12-01T22:22&api_token=UybdIKLWukys4qmlwgnTD83IH3oYuUqMTN3QWunU`)
    
    const articles = await apiResponse.json();

    return{
        props: {
            articles
        }
           
    }
};
export default News;