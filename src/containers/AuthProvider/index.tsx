import { useAuth } from "../../hooks/auth"

type Props = {
    children:React.ReactNode
}

export const AuthProvider:React.FC<Props> = ({children}) => {
    const {loading} = useAuth();

    if(loading) return <>Loading</>;

    return <>{children}</>
}