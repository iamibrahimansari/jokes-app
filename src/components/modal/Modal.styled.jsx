import styled from 'styled-components';

import {Button} from '../footer/Footer.styled';

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const CloseBtn = styled(Button)`
    backgroundColor: red;
    margin: auto;
    display: block
`

export const JokeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    &:not(:last-of-type){
        border-bottom: 1px solid;
        padding-bottom: 2rem;
    }
`

export const Joke = styled.p`
    grid-column: 1/-1;
    text-align: justify;
`

export const Rating = styled.div``