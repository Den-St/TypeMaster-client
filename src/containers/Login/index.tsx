import { LoginComponent } from "../../components/Login"
import { useLogin } from "../../hooks/login";

export const Login = () => {
    const {onLogin,success,err} = useLogin();
    return <LoginComponent success={success} err={err} onSubmit={onLogin}/>
}