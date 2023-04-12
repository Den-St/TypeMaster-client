import { Route, Routes } from "react-router-dom"
import { routes } from "./constants/routes"
import { Home } from "./containers/Home"
import { Login } from "./containers/Login"
import { Profile } from "./containers/Profile"
import { Rating } from "./containers/Rating"
import { Registration } from "./containers/Registration"

const PublicRoutes = [
    <Route key={routes.home} path={routes.home} element={<Home/>}/>,
    <Route key={routes.rating} path={routes.rating} element={<Rating/>}/>,
    <Route key={routes.profile} path={routes.profile} element={<Profile/>}/>,
    <Route key={routes.registration} path={routes.registration} element={<Registration/>} />,
    <Route key={routes.login} path={routes.login} element={<Login/>} />
]

export const RoutesSwitch = () => {
    return <Routes>{PublicRoutes}</Routes>
}