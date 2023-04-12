import { Header } from "../Header"
import { Container, Main } from "./styles"

type Props = {
    children:React.ReactNode
}

export const Layout:React.FC<Props> = ({children}) => {
    return <Container>
        <Header/>
        <Main>
            {children}
        </Main>
    </Container>
}