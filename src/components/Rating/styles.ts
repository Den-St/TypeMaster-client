import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;


export const RatingTable = styled.table`
    width: 100%;
`;

export const RowNames = styled.tr`
    display: flex;
    gap: 75px;
    padding-left: 50%;
`;

export const RowName = styled.th`
    font-size: 20px;
`;

export const UserContainer = styled.tr`
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #807f7f94;
    display: flex;
    height: 50px;
    align-items: center;
`;

export const UserInfo = styled.th`
    display: flex;
    gap: 5px;
    width: 50%;
    align-items: center;
`;


export const Stat = styled.td`
    font-size: 20px;
    width: 120px;
    text-align: start;
    background-color: cadetblue;
`;

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
`;

export const UserName = styled.span`
    font-size: 20px;
`;
