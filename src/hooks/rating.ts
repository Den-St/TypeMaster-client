import { useEffect, useState } from 'react';
import axios from '../axios';
import { UserT } from '../types/userT';
export const useRating = () => {
    const [users,setUsers] = useState<UserT[] | null>(null);
    const [loading,setLoading] = useState(false);

    const fecth = async () => {
        setLoading(true);
        try{
            const res = await axios.get<UserT[]>("rating");
            setUsers(res?.data);
        }catch(err){
            console.log(err);
        }
        setLoading(false);
    }

    useEffect(() => {
        fecth();
    }, [])
    
    return {loading, users};
}