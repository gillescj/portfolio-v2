import React from 'react';
import styled from 'styled-components';
import ProjectSection from './ProjectSection';

const Container = styled.section`
    display: grid;
    grid-gap: 3rem;
    margin: 2rem 0;
`;

const ProjectsHeader = styled.h1`
    font-size: 2.5rem;
`;

const ProjectsList = () => {
    return (
        <Container>
            <ProjectsHeader>Projects</ProjectsHeader>

            <ProjectSection
                content={{
                    title: `Gatsby's Pizzeria`,
                    skills: ['React', 'Gatsby', 'SCSS', 'Styled-Components'],
                    description: `A fake family pizzeria restaurant website built on GatsbyJS.`,
                    links: {
                        siteUrl: 'https://pizzeria.colingillespie.dev/',
                        githubUrl: 'https://github.com/gillescj/pizzeria',
                    },
                    image:
                        'https://github.com/gillescj/files/blob/master/pizzeria-scroll.jpg?raw=true',
                }}
                placement="right"
            />
            <ProjectSection
                content={{
                    title: `Reddit Clone`,
                    skills: ['React', 'SCSS'],
                    description: `This reddit clone application displays posts and
                        subreddit communities within a theme that is
                        inspired by elements from both new and old reddit
                        websites.`,
                    links: {
                        siteUrl: 'https://reddit-clone.colingillespie.dev/',
                        githubUrl: 'https://github.com/gillescj/reddit-clone',
                    },
                    image:
                        'https://github.com/gillescj/files/blob/master/reddit-clone-scroll.jpg?raw=true',
                }}
                placement="left"
            />
        </Container>
    );
};

export default ProjectsList;
