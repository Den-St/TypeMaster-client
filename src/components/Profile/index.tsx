import { useUserStore } from "../../store/userStore"
import { UserT } from "../../types/userT"
import { Avatar, Container, InformationContainer, JoinedDate, Logout, Name, NameContainer, StatContainer, StatName, Stats, StatValue } from "./styles"
import {LogoutOutlined} from "@ant-design/icons";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
type Props = {
    profile?:UserT,
    loading:boolean,
    err:any
}

export const ProfileComponent:React.FC<Props> = ({profile,loading,err}) => {
    // const user = useUserStore(state => state.state);
    const navigate = useNavigate();
    const {logout} = useUserStore();
    
    const user = {
        name:'agsdgasdgs',
        id:2,
        avatarUrl:'fsdafasd',
        createdAt:'22.05.2022',
        bestRecord:{
            cpm:150,
            time:30,
            accuracy:65
        }
    }
    useEffect(() => {
        
    }, [])
    
    const onLogout = () => {
        Cookies.remove('token');
        logout();
        navigate('/');
    }

    return <Container>
        <Avatar src={user?.avatarUrl}/>
        <InformationContainer>
            <NameContainer><Name>{user?.name}</Name> {user?.id === user.id && <Logout onClick={onLogout}><LogoutOutlined /></Logout>} </NameContainer>
            <JoinedDate>{user?.createdAt}</JoinedDate>
            <Stats>
                <StatContainer>
                    <StatName>CPM:</StatName>
                    <StatValue>{user?.bestRecord?.cpm}</StatValue>
                </StatContainer>
                <StatContainer>
                    <StatName>Accuracy:</StatName>
                    <StatValue>{user?.bestRecord?.accuracy}</StatValue>
                </StatContainer>
                <StatContainer>
                    <StatName>Time:</StatName>
                    <StatValue>{user?.bestRecord?.time}</StatValue>
                </StatContainer>
            </Stats>
        </InformationContainer>
    </Container>
}