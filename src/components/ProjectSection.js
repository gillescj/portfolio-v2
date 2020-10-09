import React from 'react';
import styled from 'styled-components';
import { COLOURS, QUERIES } from 'styling';
import { ReactComponent as GithubSVG } from 'assets/svgs/github.svg';
import { ReactComponent as ExternalLinkSVG } from 'assets/svgs/external-link.svg';

const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`;

const ImageLink = styled.a`
    grid-column: ${({ placement }) => (placement === 'right' ? '1/8' : '6/-1')};
    grid-row: 1;
    min-height: 300px;
    background-image: url(${({ image }) => image});
    background-size: cover;
    transition: background-position 0.5s ease-in;
    background-position: top;
    z-index: 10;
    background-size: 115%;
    filter: brightness(0.8);
    &:hover {
        background-position: bottom;
        transform: scale(1.03);
        transition: background-position 2s ease-in, transform 0.5s ease-in;
        filter: brightness(1);
    }
    @media (${QUERIES.medium}) {
        grid-column: 1 / -1;
        filter: brightness(0.2);
        &:hover {
            background-position: top;
            transform: scale(1);
            filter: brightness(0.2);
        }
    }
`;

const Details = styled.div`
    display: grid;
    grid-column: ${({ placement }) => (placement === 'right' ? '7/-1' : '1/7')};
    grid-gap: 1rem;
    grid-row: 1;
    align-self: center;
    z-index: 11;
    @media (${QUERIES.large}) {
        grid-column: ${({ placement }) => (placement === 'right' ? '6/-1' : '1/8')};
    }
    @media (${QUERIES.medium}) {
        grid-column: 1 / -1;
        padding: 1rem;
    }
`;

const Title = styled.h2`
    display: flex;
    justify-content: ${({ placement }) => (placement === 'right' ? 'end' : 'start')};
    margin-bottom: 10px;
    text-align: ${({ placement }) => (placement === 'right' ? 'end' : 'start')};
    font-weight: 500;
    font-size: 2rem;
    color: ${COLOURS.textSecondary};
    a {
        &:hover {
            filter: brightness(1.2);
        }
    }
    @media (${QUERIES.medium}) {
        justify-content: start;
        text-align: start;
    }
`;

const Description = styled.p`
    text-align: ${({ placement }) => (placement === 'right' ? 'end' : 'start')};
    background: ${COLOURS.accent};
    border-radius: ${({ placement }) =>
        placement === 'right' ? '0 0 0 20px' : '0 0 20px 0'};
    line-height: 1.5rem;
    padding: 1rem;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028),
        0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042),
        0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
    @media (${QUERIES.medium}) {
        text-align: start;
        border-radius: ${'0 0 20px 0'};
    }
`;

const Skills = styled.ul`
    display: grid;
    grid-template-columns: ${({ placement }) =>
        placement === 'right' ? '1fr 3fr' : '3fr 1fr'};
    ul {
        grid-column: ${({ placement }) => (placement === 'right' ? '2' : '1')};
        padding: 0.5rem 0;
        display: flex;
        justify-content: ${({ placement }) => (placement === 'right' ? 'end' : 'start')};
        grid-gap: 2rem;
        flex-wrap: wrap;
    }
    li {
        list-style: none;
    }
    @media (${QUERIES.medium}) {
        grid-template-columns: ${'1fr'};
        ul {
            grid-column: ${'1'};
            justify-content: ${'start'};
        }
    }
`;

const Links = styled.div`
    display: flex;
    justify-content: ${({ placement }) => (placement === 'right' ? 'end' : 'start')};
    a {
        &:hover {
            filter: brightness(1.2);
        }
        margin: 0 0.5rem;
        &:last-of-type {
            margin-right: 0;
        }
        &:first-of-type {
            margin-left: 0;
        }
    }
    @media (${QUERIES.medium}) {
        justify-content: ${'start'};
    }
`;

const ProjectSection = ({ content, placement }) => {
    const {
        title,
        skills,
        description,
        links: { siteUrl, githubUrl },
        image,
    } = content;

    return (
        <Container>
            <ImageLink
                rel="noopener noreferrer"
                target="_blank"
                href={siteUrl}
                placement={placement}
                image={image}
            />
            <Details placement={placement}>
                <Title placement={placement}>
                    <a rel="noopener noreferrer" target="_blank" href={siteUrl}>
                        {title}
                    </a>
                </Title>
                <Description placement={placement}>{description}</Description>
                <Skills placement={placement}>
                    <ul>
                        {skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </Skills>
                <Links placement={placement}>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={githubUrl}
                        title="Github Repository"
                    >
                        <GithubSVG />
                    </a>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={siteUrl}
                        title="Live Site"
                    >
                        <ExternalLinkSVG />
                    </a>
                </Links>
            </Details>
        </Container>
    );
};

export default ProjectSection;
