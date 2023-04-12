import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    gap: 20px;
`;

export const Avatar = styled.img`
    width: 150px;
    height: 150px;
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
    font-size: 30px;
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