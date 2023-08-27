import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    gap: 2rem;
    justify-content: center;
`

export const Button = styled.button`
    border: none;
    padding: 1rem 2rem;
    cursor: pointer;
    color: #fff;
    &:first-child{
        background-color: red;
    }
    &:last-child{
        background-color: blue;
    }
`