import styles from '../components/news/news.module.css';
import React, {useEffect, useState,} from'react';
import {useRouter} from 'next/router';
import NewsGrid from '../components/news/NewsGrid';
import NewsMenu from '../components/news/NewsMenu';
import { Toolbar } from '../components/Toolbar';
function News( ){

     
    // first usestate , contains API data in the form of an object that will fetch out out data.
    let [items,setItems] =  useState([]);
    //Contain the ID of the Menu button that we click. Use in the NewsMenu component.
    let [active, setActive] =  useState(0);
    //Contain the category of the news we display on the page. Initally its preset to "general".
    let [category, setCategory] =  useState('general');
 
//Using the fetch we will get API data. Add the category state in using template literals.
    useEffect(() => {
        //convert data fetched from the NewsAPI from JSON Format to a regular object using the JSON method. Add the data into out items state
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=881512304d47438db8dd2642869fe6da`)
        .then(res=>res.json())
        .then(data=>setItems(data.articles))
    },[category])

    return(
    <body> 
        <head>
        <link href="https://getbootstrap.com/docs/5.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
        </head>
        <div>
         <Toolbar/>
            <h1 className={styles.title} > Blue Chip News </h1>
             <NewsMenu active={active} setActive={setActive} setCategory={setCategory}/>
            <NewsGrid items={items}/>
         </div>
    </body>
    )
}

  
export default News;