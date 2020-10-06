import React from 'react';
import styled from 'styled-components';
import { COLOURS } from 'styling';

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
    z-index: 300;
    background-size: 112%;
    &:hover {
        background-position: bottom;
        transform: scale(1.03);
        transition: background-position 2s ease-in, transform 0.5s ease-in;
        filter: brightness(1);
    }
`;

const Details = styled.div`
    display: grid;
    grid-column: 7 / -1;
    grid-column: ${({ placement }) => (placement === 'right' ? '7/-1' : '1/7')};
    grid-gap: 1rem;
    grid-row: 1;
    z-index: 301;
    align-self: center;
`;

const ProjectTitle = styled.h2`
    margin-bottom: 10px;
    text-align: ${({ placement }) => (placement === 'right' ? 'end' : 'start')};
    font-weight: 500;
    color: ${COLOURS.textSecondary};
    &:hover {
        filter: brightness(1.2);
    }
`;

const Description = styled.p`
    text-align: ${({ placement }) => (placement === 'right' ? 'end' : 'start')};
    background: black;
    border: white solid 3px;
    border-right: none;
    border-left: none;
    padding: 1rem;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028),
        0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042),
        0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
`;

const Skills = styled.ul`
    display: grid;
    grid-auto-flow: column;
    justify-content: ${({ placement }) => (placement === 'right' ? 'end' : 'start')};
    grid-gap: 2rem;
    li {
        list-style: none;
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
                <ProjectTitle placement={placement}>
                    <a rel="noopener noreferrer" target="_blank" href={siteUrl}>
                        {title}
                    </a>
                </ProjectTitle>
                <Description placement={placement}>{description}</Description>
                <Skills placement={placement}>
                    {skills.map((skill) => (
                        <li>{skill}</li>
                    ))}
                </Skills>
            </Details>
        </Container>
    );
};

export default ProjectSection;