import styled from 'styled-components';

export const LoaderContainer = styled.div`
    width: 5rem;
    height: 5rem;
    border: 3px dotted blue;
    border-radius: 50%;
    margin: auto;
    border-top-color: transparent;
    animation: loader 0.5s infinite linear;
    @keyframes loader{
        0%{
            transform: rotate(0);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`