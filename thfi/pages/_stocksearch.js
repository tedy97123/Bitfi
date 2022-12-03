 import style from '../styles/searchbar.module.css';
 import dynamic from 'next/dynamic';
 import styled from 'styled-components';
 import SearchBG from '../components/SearchBG';
 
 const BgImage= dynamic(() => import("../components/SearchBG"), {
   ssr:false
 });
 
 const Wrapper = styled.div`
   z-index: 1 
   width: 100%;
   height:100;
   position:fixed;
   justify-content:center;
   align-items;
   overflow:hidden;
 
 `;
 
function Stocksearch()
{
  return (
  <div className={style.body} > 
    <Wrapper> 
      <body >
        <div className={style.box}>
          <input type="text" placeholder='Tickers baby ....'/>
          <label className={style.icon}>
            <i class="fas fa-search" ></i>
          </label>
        </div>
      </body>
    </Wrapper>  
    <SearchBG stylt={{height:'1850px' , width:'1850px'}}alt="water"/>
  </div>
  )
}

export default Stocksearch;