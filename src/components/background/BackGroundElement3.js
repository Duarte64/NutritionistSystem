import styled from 'styled-components';

export const BackGroundElement3 = styled.div`
    background-image: linear-gradient(90deg, rgba(73,163,65,1) 0%, rgba(95,212,85,1) 29%, rgba(139,219,131,1) 75%);
    border-radius: 81% 19% 73% 27% / 19% 12% 88% 81%;
    width: 350px;
    height: 350px;
    margin: 1em;
    position: absolute;
    z-index: -1;
    bottom: 25px;
    left: 550px;
    @media (max-width: 1400px) {
        width: 250px;
        height: 250px;
        left: 0;
    };
    @media (max-width: 700px) {
        bottom: 0px;
        left: 75px;
    };
`