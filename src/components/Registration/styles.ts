import { Link } from "react-router-dom";
import styled from "styled-components";
import { Media } from "../../assets/breakpoints";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 30px;
    ${Media.down.m}{
        padding-top: 20px;
    }
    width: 100%;
`;

export const Main = styled.section`
    display: flex;
    gap: 20px;
`;



export const RightForm = styled.article`
    height: 100%;
    padding-top: 64px;
`;

export const OrWith = styled.span`
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    .anticon{
        font-size: 30px;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    color: #1d7ec1;
    font-weight: 200;
    margin: 0;
    ${Media.down.m}{
        font-size: 30px;
    }
`;

export const SubTitle = styled.h3`
    font-size: 15px;
    font-weight: 100;
`;

export const LoginLink = styled(Link)`
    color:#2fa5f8;
    text-decoration: none;
`;
