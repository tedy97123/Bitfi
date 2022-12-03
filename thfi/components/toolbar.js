import {useRouter} from 'next/router';
import styles from '../styles/toolbar.module.css'
import Image from 'next/image';
export const Toolbar = () => {
    const router = useRouter();

    return (

        <div className={styles.main}>
           <Image styles={{height:"50%",width:"50%",marginTop:"180px" , position:"absolute",left:"0", top:"0" }} alt="blue-pig" height={50} width={50} src="/chip1.gif"/>
            <div onClick={() => router.push('/#')}>Home</div>
            <div onClick={() => router.push('/_news')}>News</div>
            <div onClick={() => router.push('/_stocksearch')}>Financial Data</div>
            <div onClick={() => router.push('/#')}>Login</div>
        </div>

    )
}