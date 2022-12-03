import styles from '../styles/Cards.module.css'
 

export default function Cards() {
    return(
    
 <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <h2> 📰 </h2>
                        <h3>News 📰</h3>
                        <p> Catch up on your daily Financial News! </p>
                        <a href='/_news'>Read More</a>
                </div>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <h2> 👨🏼‍💻 </h2>
                        <h3>  Login </h3>
                        <p> Get authenticated and buy and sell securities at you leasure! </p>
                        <a href='/_stocksearch'>Login </a>
                </div>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <h2>  📈  </h2>
                        <h3>Financial Market Data  </h3>
                        <p> Look ua Security arices and More  </p>
                        <a href='/_stocksearch'> Financial Data </a>
                </div>
            </div>
        </div>
    </div> 
    )   
}
 