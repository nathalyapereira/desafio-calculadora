import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    display: inline-table;
    background-color: #FFFFFF;
    width: 30%;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: inset 0 0 1em rgba(0,0,0,0.47522759103641454), 0 0 1em rgba(255,156,0,0.6208858543417367) ;
    
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

