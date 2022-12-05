// Next.js API route support: https://nextjs.org/docs/api-routes/introductio
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://real-time-finance-data.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '5ce3259baamsh927e932246a4b9bp13b280jsne1e7b7bc0238',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
    },
});

export default {
    stockCurrentPrice: (symbol) =>
    instance({
        'method':'GET',
        'url':'/search',
        'params': {
            'query': symbol.toUpperCase(),
        },
    })
    
}

