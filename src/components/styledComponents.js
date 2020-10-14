import styled from 'styled-components';
import { COLOURS } from 'styling';

export const Button = styled.button`
    justify-self: start;
    background: inherit;
    color: ${COLOURS.textMain};
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 300ms;
    border: 3px ${COLOURS.textMain} solid;
    border-bottom-right-radius: 1.5rem;
    &:hover {
        border: 3px ${COLOURS.accent} solid;
    }
`;
