// Next.js API route support: https://nextjs.org/docs/api-routes/introductio
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://real-time-finance-data.p.rapidapi.com',
    headers: {
        'x-rapidapi-host':'real-time-finance-data.p.rapidapi.com',
        'x-rapidapi-key': '5ce3259baamsh927e932246a4b9bp13b280jsne1e7b7bc038'
    },
});

export default {
    f_incomeQuarterlystatement: (symbol) =>
    instance({
        'method':'GET',
        'url':'/company-income-statement',
        'params': {
            'period':'QUARTERLY',
            'symbol': symbol.toUpperCase()+":NASDAQ",
        },
    }), 
};

