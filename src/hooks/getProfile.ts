import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { UserT } from '../types/userT';
export const useGetProfile = () => {
    const [profile,setProfile] = useState<UserT>();
    const {urlParams} = useParams();
    const [err,setErr] = useState<any>();
    const [loading,setLoading] = useState(true);

    const fetch = async () => {
        try{
            const res = await axios.get<UserT>('/user',{params:{urlParams}});
            setProfile(res.data);
        }catch(err){
            setErr(err);
            console.log(err);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetch();
    },[])

    return {loading,err,profile};
}