import React from 'react';
import styled from 'styled-components';
import ProjectSection from './ProjectSection';
import { projectDataList } from 'data/projectData';

const Container = styled.section`
    display: grid;
    grid-gap: 5rem;
    margin: 2rem 0;
`;

const ProjectsHeader = styled.h1`
    font-size: 3rem;
`;

const ProjectsList = () => {
    return (
        <Container id="projects">
            <ProjectsHeader>Projects</ProjectsHeader>
            {projectDataList.map((project, index) => (
                <ProjectSection
                    key={project.title}
                    content={project}
                    placement={index % 2 ? 'left' : 'right'}
                />
            ))}
        </Container>
    );
};

export default ProjectsList;
