import { getProfileRoute, routes } from "../../constants/routes"
import { useUserStore } from "../../store/userStore"
import { Container, Login, Logo, ProfileContainer, Rating, Registration, SingUpController, UserAvatar, UserName, Wrapper } from "./styled"

export const HeaderComponent = () => {
    const user = useUserStore(state => state.state);
    // const user = {
    //     name:'fasd',
    //     avatarUrl:'fsdf',
    //     id:1,

    // }
    return <Container>
        <Wrapper>
            <div>
                <Logo to={routes.home}>TypeMaster</Logo> 
                <Rating to={routes.rating}>Rating</Rating>
            </div>
           
           {!user ? <SingUpController>
                <Registration to={routes.registration}>Registration</Registration>
                /
                <Login to={routes.login}>Login</Login>
           </SingUpController> : <ProfileContainer to={getProfileRoute(user.id)}>
                <UserAvatar src={user?.avatarUrl}/>
                <UserName>{user?.name}</UserName>
           </ProfileContainer>}
        </Wrapper>
    </Container>
}