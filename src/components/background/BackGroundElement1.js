import styled from 'styled-components';

export const BackGroundElement1 = styled.div`
    background-image: linear-gradient(90deg, rgba(73,163,65,1) 0%, rgba(95,212,85,1) 29%, rgba(139,219,131,1) 75%);
    border-radius: 82% 18% 39% 61% / 54% 15% 85% 46%;
    margin: 1em;
    width: 300px;
    height: 300px;
    position: absolute;
    z-index: -1;
    margin-top: 200px;
    @media (max-width: 700px) {
        margin: -1em;
        margin-top: 130px;
        width: 250px;
        height: 250px;
    };
`;