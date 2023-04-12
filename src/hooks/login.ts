import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import axios from '../axios';
import { LoginT } from './../types/SignUp';

export const useLogin = () => {
    const [success,setSuccess] = useState(false);
    const [err,setErr] = useState<any>();

    const onLogin = async (dto:LoginT) => {
        try{
            const res = await axios.get<{token:string}>(`/auth/login`,{params:dto});
            if(res.status != 201) return;
            Cookies.set('token',res.data.token);
            setSuccess(true);
        }catch(err) {
            setErr(err);
            console.log(err);
        }
    }

    return {onLogin,success,err};
}