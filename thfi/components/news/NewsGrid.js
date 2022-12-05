import NewsItem from "./NewsItem";
import styles from './news.module.css';

 function NewsGrid({items}) {
    return(
        <div className={styles.newsgrid}>
            {items.map((item , i) =>(
                <NewsItem key={i} item={item}/>
            ))}
        </div>
    )
}

export default NewsGrid;