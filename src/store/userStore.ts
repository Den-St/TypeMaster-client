import {create} from 'zustand';
import { LoginT, RegistrationT } from '../types/SignUp';
import { UserT } from '../types/userT';

interface userState {
    state:UserT | null,
    signUp:(data:UserT) => void,
    logout:() => void
}

export const useUserStore = create<userState>()((set) => ({
    state:null,
    signUp:(data) => set(state => ({...state,state:{...data}})),
    logout:() => set({state:null})
}))