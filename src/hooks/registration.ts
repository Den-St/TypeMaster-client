import Cookies from 'js-cookie';
import { useState } from 'react';
import axios from '../axios';
import { RegistrationT } from './../types/SignUp';

export const useRegistration = () => {
    const [success,setSuccess] = useState(false);
    const [err,setErr] = useState<any>();

    const onSubmit = async (dto:RegistrationT) => {
        try{
            console.log('fdsfds')
            const res = await axios.get<{token:string}>(`/auth/registration`,{params:dto});
            if(res.status != 201) return;
            Cookies.set('token',res.data.token);
            setSuccess(true);
        }catch(err) {
            setErr(err);
            console.log(err);
        }
    }

    return {onSubmit,success,err};
}