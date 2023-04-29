import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:15px;
    width: 100%;
    justify-content: center;
`;

export const MainContainer = styled.div`
    display: flex;
    width: 80%;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    gap:40px;
`;

export const TextContainer = styled.div`
`;

export const TypedText = styled.span`
    color:lightblue;
    font-size: 30px;
    word-break: break-all;
`;

export const NotTypedText = styled.span`
    font-size: 30px;
    word-break: break-all;

`;

export const Input = styled.input`
    font-size: 30px;
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
`;
export const StatItemContainer = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`;

export const Stat = styled.p`
    font-size: 30px;
    margin: 0;
`;
export const BestStat = styled.p`
    font-size: 30px;
    margin: 0;
    color:green;
`;

export const RestartButton = styled.button`
    width: 70%;
    height: 35px;
    font-size: 25px;
    color:white;
    background-color: #2fa5f8;
    border-radius: 5px;
    outline: none;
    border: none;
`;