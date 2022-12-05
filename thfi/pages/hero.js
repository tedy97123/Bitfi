import Head from 'next/head'
import Image from 'next/image'
import Stock_Search from './stocksearch';
import dynamic from 'next/dynamic';
import { Toolbar } from '../components/Toolbar';
import Cards from '../components/Cards';

export default function Home() {
  return (
<body>
    <Head>
    <link href="https://getbootstrap.com/docs/5.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
    </Head>
    <main>
    <Toolbar/>
      <div class="dark-mode bg-dark bg-size-cover bg-repeat-0 bg-position-center position-relative overflow-hidden py-5 mb-4">
        <h1 className="display-5 fw-bold p-3 mx-auto bg-dark text-white text-center "> Blue Chip</h1>
        <p className="lead text-white mx-auto text-center" > Quickly access to Financial data. Read all the news you can by clicking the news tab. </p>
         
        <Cards/>
        <div className="col-lg-6 mx-auto">
        </div>
      </div>
    
      
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">Financial data right at your fingertips</h1>
            <p className="lead">Quickly search and find data about your favorite securities. Simply go to the Financial tab and search! If that is not your thing then read some news and find out what is going on in the world around you.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden  ">
              <Image className="rounded-lg-3" src="/stocks.gif" alt="climbing_chart" height="400" width="400"/>
          </div>
        </div>
      </div>
      <div className="b-example-divider"></div>
      <div className="bg-dark text-secondary px-3 py-4 text-center">
        <div className="py-5">
          <h1 className="display-4 fw-bold text-white">Thanks for visiting !</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">   This appliation is powered by Nextjs and Sanity.io </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" href="/stocksearch">Financal Data Page</button>
              <button type="button" className="btn btn-outline-light btn-lg px-4" href = "/News">News Page</button>
            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider mb-0"></div>
    </main>
    </body>
  )
}
