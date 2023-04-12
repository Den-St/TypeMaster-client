import axios from 'axios';
import { useState, useEffect } from 'react';
export const useGetText = () => {
    const [text,setText] = useState();
    const [loading,setLoading] = useState(true);

    const fetch = async () => {
        try{
            const res = await axios.get('https://montanaflynn-lorem-text-generator.p.rapidapi.com/paragraph', {params: {count: '1', length: '3'},headers: {
                'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
                'X-RapidAPI-Host': 'montanaflynn-lorem-text-generator.p.rapidapi.com'
              }});
            console.log(res)
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetch();
    },[]);
}