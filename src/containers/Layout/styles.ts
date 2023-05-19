import styled from "styled-components";
import { Media } from "../../assets/breakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: green;
    min-height: 100vh;
    font-family: Helvetica;
`;

export const Main = styled.main`
    width: 80%;
    ${Media.down.m}{
        width: 100%;
    }
    display: flex;
`;