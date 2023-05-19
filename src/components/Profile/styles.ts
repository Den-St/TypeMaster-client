import styled from 'styled-components';
import { Media } from '../../assets/breakpoints';

export const Container = styled.section`
    width: 100%;
    display: flex;
    gap: 20px;
    padding-top: 20px;
    padding-left: 20px;
    ${Media.down.m}{
        gap: 10px;
    }
`;

export const Avatar = styled.img`
    width: 150px;
    height: 150px;
    ${Media.down.m}{
        width: 50px;
        height: 50px;
    }
`;

export const InformationContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap:8px;
`;

export const NameContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Logout = styled.button`
    font-size: 35px;
    ${Media.down.m}{
        font-size: 25px;
    }
    border: none;
    cursor: pointer;
    border-radius: 100%;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    &:hover{
        background-color: #dfdfdf;
    }
    background-color: transparent;
`;

export const Name = styled.h1`
    font-size: 25px;
    margin: 0;
`;

export const JoinedDate = styled.section`
    font-size: 20px;
`;

export const Stats = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 400px;
    ${Media.down.m}{
        width: unset;
        gap:10px;
    }
`;

export const StatContainer = styled.section`
    display: flex;
    flex-direction: column;
`;

export const StatName = styled.h2`
    margin: 0;
    font-size: 20px;
`;

export const StatValue = styled.h2`
    margin: 0;
    font-size: 20px;
`;