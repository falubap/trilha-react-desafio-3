import styled, {css}  from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 80%;
    
    ${({variant}) => variant === "secondary" && css`
        min-width: 167px;
        height: 33px;
        
        background: #E4105D;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}

    ${({variant}) => variant === "fazerlogin" && css`
        background: #1E192C;
        position: relative;
    
        min-width: 167px;
        height: 33px;
        color: #23DD7A;
        min-width: 120px;
        width: 50%; 

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 19x;
    `}    
`