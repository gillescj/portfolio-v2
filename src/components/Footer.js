import React from 'react';
import { COLOURS } from 'styling';
import styled from 'styled-components';
import { ReactComponent as GithubSVG } from 'assets/svgs/github.svg';

const Container = styled.footer`
    padding: 2rem;
    background: ${COLOURS.bgMain};
    color: ${COLOURS.textMain};
    margin: auto;
`;

const GithubButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    svg {
        stroke: ${COLOURS.textMain};
        width: 32px;
        height: 32px;
        transition: stroke 300ms;
    }
    &:hover {
        svg {
            stroke: ${COLOURS.accent};
        }
    }
`;

const Footer = () => {
    return (
        <Container>
            <GithubButton aria-label="Github Link Button">
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/gillescj/"
                    title="Github Account"
                >
                    <GithubSVG />
                </a>
            </GithubButton>
        </Container>
    );
};

export default Footer;
