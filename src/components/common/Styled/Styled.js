import styled from 'styled-components';


export const Container = styled.div`
    border-radius: 5px;
    border: 1px #EBEEF5 solid;
    background-color: #fff;
`;

export const Button = styled.button`
    & {
        display: block;
        line-height: 20px;
        padding: ${({ padding }) => padding || '2px 10px'};
        text-align: center;
        border: none;
        outline: none;
        border-radius: 5px;
        color: #DDEAF7;
        background-color: ${({ backgroundColor }) => backgroundColor || '#2193FA'};
        cursor: pointer;
    }

    &:active {
        transform: scale(0.95);
    }
`;