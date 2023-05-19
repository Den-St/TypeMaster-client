import { Link } from "react-router-dom";
import styled from "styled-components";
import { Media } from "../../assets/breakpoints";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    ${Media.down.m}{
        height: unset;
    }
    font-size: 20px;
`;

export const Wrapper = styled.header`
    width: 100%;
    height: 80px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    background-color: #2fa5f8;
    border-radius: 20px;
    ${Media.down.m}{
        border-radius: 0;
    }
`;

export const ProfileContainer = styled(Link)`
    display: flex;
    text-decoration: none;
    gap: 5px;
    align-items: center;

`;

export const UserName = styled.h1`
    font-size: 20px;
    color:white;
`;

export const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
`;

export const Logo = styled(Link)`
    color:white;
    font-weight: bolder;
    text-decoration: none;
    margin-right: 50px;
`;

export const Rating = styled(Link)`
    color:white;

    text-decoration: none;
`;

export const SingUpController = styled.div`
    display: flex;
    align-items: center;
    color:white;

`;

export const Registration = styled(Link)`
    text-decoration: none;
    color:white;
`;

export const Login = styled(Link)`
    text-decoration: none;
    color:white;
`;
