import styled from 'styled-components';

export const SideDrawerDiv = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: #fff;
    padding: 32px 16px;
    transition: transform 0.3s ease-out;

    @media (min-width: 500px) {
        display: none;
    }

`;
