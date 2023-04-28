import { UserT } from './../types/userT';
import { useState, useEffect } from 'react';
import axios from '../axios';
import { useUserStore } from '../store/userStore';
import { RecordT } from '../types/recordT';

export const useFinishTyping = (onFinish:(isBest:boolean) => void) => {
    const [userStats,setUsersStats] = useState<UserT>();
    const userId = useUserStore(state => state.state?.id);

    const isBestStats = (stats:{cpm:number,wrongChars:number}) => {
        //return (stats.cpm - 3*stats.wrongChars) > Number(userStats?.bestRecord?.rate);
        return true;
    }

    const finish = (record:{cpm:number,wrongChars:number,time:number,accuracy:number}) => {
        if(isBestStats({cpm:record.cpm,wrongChars:record.wrongChars})){
            try{
                //const res = axios.post('',userId);//set best record
            }catch(err){
                console.log(err);
            }
            onFinish(true);
            return;
        }
        onFinish(false);
    }
    
    const fetch = async () => {
        if(!userId) return;

        try{
            //const res = await axios.get<UserT>('',{params:{userId}});
            //setUsersStats(res.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {fetch()},[]);

    return {finish};
}