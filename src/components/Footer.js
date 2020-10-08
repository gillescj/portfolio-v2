import React from 'react';
import { COLOURS } from 'styling';
import styled from 'styled-components';
import { ReactComponent as ChevronUpSVG } from 'assets/svgs/chevron-up.svg';

const Container = styled.footer`
    padding: 2rem;
    background: ${COLOURS.bgMain};
    color: ${COLOURS.textMain};
    margin: auto;
`;

const ArrowButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    svg {
        stroke: ${COLOURS.textMain};
        width: 64px;
        height: 64px;
        transition: stroke 300ms;
    }
    &:hover {
        svg {
            stroke: ${COLOURS.accent};
        }
    }
`;

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behaviour: 'smooth' });
    };

    return (
        <Container>
            <ArrowButton onClick={() => scrollToTop()}>
                <ChevronUpSVG />
            </ArrowButton>
        </Container>
    );
};

export default Footer;
