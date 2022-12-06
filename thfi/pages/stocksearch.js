import { Toolbar } from "../components/Toolbar";
import {LineChart,XAxis,CartesianGrid,Line,Tooltip,YAxis,Label} from 'recharts'
import api from './api/api';
import {useState,useEffect,useRef} from 'react';
import fdata from './api/fdcp';
import income from './api/income'
import IncomeStatement_table from "../components/stocks/incomeTable";

 
function StockSearch( )

{
    
    let [responseData, setResponseData] =  useState('');
    let [ticker, setTicker] =  useState('');
    let [message, setMessage] =  useState('');

    let [responsePrice, setResponsePrice] =  useState('');
    let [incomesheet, setIncomeSheet] = useState('');
    
    let [currentprice , setCurrentPrice] = useState([]);
    let [selectedStockData, setSelectedStockData] = useState({})

    // set state setResponseData with data receieved from fdcp api (for chart data)
    const fetchData = (e) => {
        e.preventDefault() 
        setMessage('Loading...')
 
         api.stockTimeSeries(currentTicker.current)
         .then((response)=>{
             setResponseData(response.data)
             setMessage('')
           
         })
         .catch((error) => {
             setMessage('Error')
             console.log(error)
         })
     };

     //Set state setResponsePrice with data recieved from fdcp api (for header tabel with ticker - exchange)
     const f_currentPrice = (e) => {
        e.preventDefault()
        setMessage('Loading....')

        fdata.stockCurrentPrice(currentTicker.current )
        .then((response) => {
            setResponsePrice(response.data)
            setMessage('')

            let currentStockData = {}
            
            const price = response.data.data['stock'][0].price
            const c_p = response.data.data['stock'][0].change_percent
            const p_c = response.data.data['stock'][0].previous_close
            const markets = response.data.data['stock'][0].exchange
            
          
            currentStockData["price"] = price;
            currentStockData["change_percent"] = c_p;
            currentStockData["pc"] = p_c;
            currentStockData["markets"] = markets;
            setSelectedStockData(currentStockData);
        })
        .catch((error) => {
            setMessage('Error')
            console.log(error)
        }); 
        
     };

     //sets state setIncomeSheet as data recieved from income api (for table to the right of the chart with financial details)
    const f_incomeStatement = (e) => {
    e.preventDefault()
    setMessage('')
    

    income.f_incomeQuarterlystatement(currentTicker.current)
    .then((response) => {
    setIncomeSheet(response.data)
    setMessage('')
    
    })
    .catch((error) => {
        setMessage('Error')
        console.log(error)
    }); 
};
 
     let currentTicker = useRef('')
     useEffect(() => {
        console.log(JSON.stringify(selectedStockData)  );
        
     },[selectedStockData])
     
 
return (
        <body> 
            <head>
                <link href="https://getbootstrap.com/docs/5.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
            </head>
            <Toolbar/>
                <div class="light-mode bg-light  bg-size-cover    overflow-hidden py-5 mb-4">
                    <h1 className="display-5 fw-bold p-3 mx-auto bg-light text-black text-center ">Market Data </h1>
                        <p className="lead text-black mx-auto text-center" > Start by searching for a ticker ! </p>
                            <div className="col-lg-6 mx-auto text-center" >
                                <div class="form-outline">
                                    <form onSubmit={(e) => {setTicker(currentTicker.current); fetchData(e); f_currentPrice(e); f_incomeStatement(e)}}>
                                    <fieldset className='searchbox'>
                                    <label  class="icon" htmlFor="ticker"> 
                                        <input   
                                        required
                                        name="ticker"
                                        type='text'
                                        placeholder='SPY'
                                        defaultValue={ticker}
                                        onChange={(e) => currentTicker.current = e.target.value} 
                                        id="formControlLg" 
                                        class="form-control form-control-lg" />        
                                        </label>
                                        </fieldset>
                                        </form>
                                        </div>
                                        <button type="button" onClick={(e) => {setTicker(currentTicker.current); fetchData(e); f_currentPrice(e);f_incomeStatement(e)}} class="btn btn-primary btn-rounded mb-5 mt-3">Search</button>
                                </div>
            <div class="container col-md-sm"> 
                <table class="table table-hover  ">
                    <thead>
                        <tr  >
                            <th>Current Price:</th>
                            <th> Percent Change:</th>
                            <th> Previous Close:</th>
                            <th> Exhange:</th>    
                        </tr>
                    </thead>
                    <tbody>
                        <td> <h1 >{message}</h1> {selectedStockData.price} </td>
                        <td> <h1 >{message}</h1> {selectedStockData.change_percent ? selectedStockData.change_percent + "%" : ''}  </td>
                        <td> <h1 >{message}</h1> {selectedStockData.pc} </td>
                        <td> <h1 >{message}</h1> {selectedStockData.markets}   </td>   
                    </tbody>
                    <div >
                        <p>Last Refresh: {responseData ? responseData.refreshed : ''}</p>
                    </div>
                </table>
            </div>

            <div class="container inline-block pl-4 "stlye={{width:'50%',display:"flex" ,float:"right"}} > 
                <div style={{display:"flex", flexDirection: "row"}} > 
                    <h1> <h2> <h1>{message}</h1>  {responseData ? responseData.symbol  : ''}</h2>  <td class="pr-4"> <h1 >{message}</h1> <small style={{fontSize:"18.5px"}} > Price: </small>{selectedStockData.price  } </td> </h1>
                    <LineChart
                        width={800}
                        height={500}
                        data={responseData.closePrices}
                        margin={{ top: 50, right: 20, left: 10, bottom: 5 }}
                        >
                        <YAxis tickCount={10} type="number" width={80}>
                            <Label value="Close Price" position="insideLeft" angle={270} />
                        </YAxis>
                        <Tooltip />
                        <XAxis padding={{left: 5, right: 5}} tickCount={10} angle={-20} height={90} dataKey="date" />
                        <CartesianGrid strokeDasharray="3 3" stroke="#b3b3b3" />
                        <Line type="monotone" dataKey="close" stroke="#2a9df4" yAxisId={0} />
                    </LineChart> 
                <IncomeStatement_table currentTicker={currentTicker} />
                </div>
            </div>
        </div>
    </body>
    )
};

export default StockSearch;
 