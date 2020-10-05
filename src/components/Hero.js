import React from 'react';
import styled from 'styled-components';
import { COLOURS, QUERIES, VALUES } from 'styling';

const Container = styled.section`
    display: grid;
    grid-gap: 1rem;
    color: ${COLOURS.textMain};
    justify-content: start;
    align-content: center;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-bottom: 15vh;
    min-height: calc(100vh - ${VALUES.headerHeight});
    @media (${QUERIES.medium}) {
        padding-top: 5vw;
    }
`;

const Intro = styled.h5`
    font-size: 1.2rem;
    font-weight: 300;
    color: ${COLOURS.textSecondary};
`;

const H1 = styled.h1`
    font-size: clamp(2.5rem, 7vw, 5.5rem);
    &::selection {
        background-color: white;
        color: black;
    }
`;

const Name = styled(H1)`
    font-weight: 500;
`;

const About = styled(H1)`
    font-weight: 500;
    color: ${COLOURS.textSecondary};
`;

const Description = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    max-width: 600px;
    margin-top: 1vh;
    line-height: 2rem;
`;

const ProjectsButton = styled.button`
    justify-self: start;
    margin-top: 2rem;
    padding: 1.2rem;
    background: inherit;
    color: ${COLOURS.textMain};
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    background: hsla(0, 100%, 100%, 0.05);
    border: 3px white solid;
    box-shadow: 10px -10px hsla(0, 100%, 100%, 0.05),
        inset calc(10px - 3px) calc(-10px + 3px) black;
    cursor: pointer;
`;

const Hero = () => {
    return (
        <Container>
            <Intro>Hey there, I'm</Intro>
            <Name>Colin Gillespie.</Name>
            <About>I develop websites.</About>
            <Description>
                Eius laudantium nostrum non qui vero et culpa a. Illum sit ut quis error
                ut adipisci provident est. Consectetur sunt quas qui voluptates sapiente.
                Iste temporibus itaque modi ipsam.
            </Description>
            <ProjectsButton>View Projects</ProjectsButton>
        </Container>
    );
};

export default Hero;
