import styled from 'styled-components';


const StyledContainer = styled.div`
    border-radius: 5px;
    border: 1px #EBEEF5 solid;
    background-color: #fff;
`;

export const StyledWriteBox = styled.div`
    & ${StyledContainer} {   
        position: absolute;
        width: 80%;
        max-width: 500px;
        left: 35%;
        top: 35%;
        z-index: 10;  
    }
    &:before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw; 
        background-color: rgba(0,0,0,.8);
        opacity: 0.7;
        z-index: 5;
    }
`

export default StyledContainer;