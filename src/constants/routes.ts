import { icon } from "../assets/type";

type LinkT = {
    route:string,
    label?:string,
    svgName?:icon,
};

export const routes = {
    home:'/',
    profile:'/profile/:id',
    rating:'/rating',
    registration:'/registration',
    login:'/login'
} as const;

export const getProfileRoute = (id:number) =>{
    return `/profile/${id}`
}

export type routesT = typeof routes;

export const links:LinkT[] = [
    {
        label:'TypeMaster',
        route:routes.home,
        svgName:'logo',
    },
    {
        label:'Profile',
        route:routes.profile,
        svgName:'logo',
    },
    {
        label:'Rating',
        route:routes.rating,
        svgName:'rating',
    },
    {
        label:'Registration',
        route:routes.registration,
    },
    {
        label:'Login',
        route:routes.login,
    }
]
