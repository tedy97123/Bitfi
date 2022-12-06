import StockSearch from "../../pages/stocksearch";
import income from '../../pages/api/income'
import { useState } from "react";
 
let GLOBAL_MAP =
{
    "cash":true,
     "":true
}

export default function IncomeStatement_table({currentTicker}){

async function getData()  {
    const ticker = (currentTicker.current.toUpperCase())
    console.log(ticker)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5ce3259baamsh927e932246a4b9bp13b280jsne1e7b7bc0238',
            'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };
    
  
    const res = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=${ticker}&region=US`,options)
    const data = await res.json();
    console.table(data)
 

};
getData()
    
    return(
        <div class=" container w-30 p-3 top-50border border-warning">
            <script src="../../pages/stocksearch"></script>
        <h1 style={{fontSize:"28.5px"}}class="fw-bold bg-light text-black text-center card" > Financial Data   ticker:  {currentTicker.current} </h1>
        <div>
       
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">2022</th>
                    <th  scope="col">Q1</th>
                    <th scope="col">Q2</th>
                    <th scope="col">Q3</th>
                    <th scope="col">Q4</th>
                    </tr>
                </thead>
                
                <tbody>
                 
                    <tr>
                     
                    <th scope="row">Revenue</th>
                    <td>
                        <span class="text-danger">
                        <i class="d-flex justify content-between fas fa-caret-down mr-1"></i><span>-48.8%%</span>
                        </span>
                    </td>
                    <td>
                        <span class="text-success">
                        <i class="d-flex justify content-between fas fa-caret-up me-1"></i><span>14.0%</span>
                        </span>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">Operating Expenses</th>
                    <td>
                        <span class="text-danger">
                        <i class="d-flex justify content-between fas fa-caret-down me-1"></i><span>-48.8%%</span>
                        </span>
                    </td>
                    <td>
                        <span class="text-success">
                        <i class="d-flex justify content-between fas fa-caret-up me-1"></i><span>14.0%</span>
                        </span>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">Net Income </th>
                    <td>
                        <span class="text-danger">
                        <i class="d-flex justify content-between fas fa-caret-down me-1"></i><span>-48.8%%</span>
                        </span>
                    </td>
                    <td>
                        <span class="text-success">
                        <i class="d-flex justify content-between fas fa-caret-up me-1"></i><span>14.0%</span>
                        </span>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">Net Profit Margin </th>
                    <td>
                        <span class="text-success">
                        <i class="d-flex justify content-between fas fa-caret-up me-1"></i><span>$1,092.72</span>
                        </span>
                    </td>
                    <td>
                        <span class="mx-auto text-danger">
                        <i class="d-flex justify content-between fas fa-caret-down me-1"></i><span>$-1.78</span>
                        </span>  
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">Dividens</th>
                    <td>
                        <span class="text-success">
                        <i class="d-flex justify content-between fas fa-caret-up me-1"></i><span>$1,092.72</span>
                        </span>
                    </td>
                    <td>
                        <span class="text-danger">
                        <i class="d-flex justify content-between fas fa-caret-down me-1"></i><span>$-1.78</span>
                        </span>  
                    </td>
                    </tr>
                    </tbody>
                </table>
        </div>
    </div>
    )
}


 