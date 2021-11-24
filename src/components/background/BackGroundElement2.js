import styled from 'styled-components';

export const BackGroundElement2 = styled.div`
    background-image: linear-gradient(90deg, rgba(73,163,65,1) 0%, rgba(95,212,85,1) 29%, rgba(139,219,131,1) 75%);
    border-radius: 80% 20% 37% 63% / 70% 44% 56% 30%;
    width: 450px;
    height: 450px;
    margin: 1em;
    position: absolute;
    z-index: -1;
    margin-top: 250px;
    right: 0px;
    @media (max-width: 1300px) {
        margin-top: 450px;
        width: 250px;
        height: 250px;
    };
    @media (max-width: 700px) {
        margin: -1em;
        margin-top: 750px;
        width: 250px;
        height: 250px;
    };
`