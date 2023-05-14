import { useUserStore } from './../store/userStore';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from '../axios';
import { UserT } from '../types/userT';

export const useAuth = () => {
    const token = Cookies.get('token');
    const [loading,setLoading] = useState(false);
    const setUser = useUserStore().signUp;
    const onAuth = async () => {
        setLoading(true);
        try{
            const res = await axios.get<UserT>('/auth/getMe',{params:{token}});
            setUser(res.data);
        }catch(err){
            console.log(err);
        }
        setLoading(false);
    }
    useEffect(() => { onAuth() },[]);
    return {loading};
}