import styled from 'styled-components';

export const HeaderContainer = styled.header`
`;

export const AppName = styled.p`
    text-decoration: underline;
    text-align: center;
`

export const Icon = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    & > *{
        transform: rotate(180deg);
    }
`