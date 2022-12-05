import styles from './news.module.css';
import Image from 'next/image';
function NewsItem({item}){
    //The split function will split the url string after it finds the part of the string you insert inside it. It will create two array wit hthe two aprts of the string we split.
    //The pop function then takes the lst item in the arry. and once we split it again after the next slash and select the first item in the arrayt with '[0]', 
    //we will get a string with the base website link. This is important becuase its going to be use to snatch a icon from google favicon snatcher.
    // another change to the data recieve is going to be the data recieve from the pushieshed time of the article.
    const websiteUrl = item.url
    const website = websiteUrl.split('https://').pop().split('/')[0]

    const date = item.publishedAt
    const formatDate = date.replace('T', '')
    const formatTime = formatDate.replace('Z','')

    return(
        <a href={item.url} className={styles.article}>
            <div className={styles.articleimage}>
                <img  src={item.urlToImage} alt={item.title}/>
            </div>
            <div className={styles.articlecontent}>
                <div className={styles.articlesource}>
                    <img   src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${website}&size=16`} alt={item.source.id}/>
                    <span>{item.source.name}</span>
                </div>
                <div className={styles.articletitle}>
                    <h2>{item.title}</h2>
                </div>
                <p className={styles.articledescription}>
                    {item.description}
                </p>
                <div className={styles.articledetails}>
                    <small><b>Published At: </b>{formatTime}</small>
                </div>
            </div>
        </a>
    )
}

export default NewsItem;