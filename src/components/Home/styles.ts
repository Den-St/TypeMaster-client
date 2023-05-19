import styled from "styled-components";
import { Media } from "../../assets/breakpoints";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:15px;
    width: 100%;
    justify-content: center;
    padding-top: 50px;
`;

export const MainContainer = styled.div`
    display: flex;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    gap:40px;
    ${Media.down.m}{
        flex-direction: column-reverse;
        gap: 10px;
    }
`;

export const TextContainer = styled.div`
    width: 400px;
    height: 270px;
    font-size: 30px;

    ${Media.down.m}{
        width: 100%;
        font-size: 28px;
    }
`;

export const TypedText = styled.span`
    color:lightblue;
    word-break: break-all;
`;

export const NotTypedText = styled.span`
    word-break: break-all;
`;

export const Input = styled.input`
    width: 25px;
    background-color: rgb(15,207,15);
    padding: 0;
    border: none;
    text-align: center;
    caret-color: transparent;
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 30px;
    ${Media.down.m}{
        font-size: 20px;
        gap: 5px;
        flex-direction: row;
        flex-wrap: wrap;
    }
    width: 330px;
`;
export const StatItemContainer = styled.div`
    display: flex;
    gap: 15px;
    ${Media.down.m}{
        gap:5px;
        width: 48%;
    }
    align-items: center;
`;

export const Stat = styled.p`
    margin: 0;
`;
export const BestStat = styled.p`
    margin: 0;
    color:green;
`;

export const RestartButton = styled.button`
    width: 70%;
    height: 35px;
    font-size: 25px;
    ${Media.down.m}{
        width: 100px;
        font-size: 17px;
    }
    color:white;
    background-color: #2fa5f8;
    border-radius: 5px;
    outline: none;
    border: none;
`;