import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 34px;
    font-family: 'Roboto';
    
    padding: 0 0 .8rem;

    input {
        width: 100%;
        height: 75px;
        background-color: #F380B9;
        border: 0;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        font-size: 34px;
        font-family: 'Roboto';
        color: #FFFFFF;
        box-shadow: inset 0 0 1em rgba(0,0,0,0.100) ;
    }
`