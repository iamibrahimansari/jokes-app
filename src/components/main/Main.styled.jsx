import styled from 'styled-components';

export const MainContainer = styled.main`
    background-color: #f7f7f7;
    margin: 2rem 0;
    padding: 1rem;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
    text-align: center;
`

export const Joke = styled.p`
    font-size: 2.5rem;
`

export const Type = styled.p`
    margin-bottom: 1rem;
`

export const Rating = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 0.3rem;
    font-size: 2.5rem;
    justify-content: center;
    & span{
        cursor: pointer;
    }
`