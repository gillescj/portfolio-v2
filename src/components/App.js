import React from 'react';
import styled from 'styled-components';
import { COLOURS } from 'styling';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import ProjectsList from './ProjectsList';

const Container = styled.div`
    background: ${COLOURS.bgMain};
    color: ${COLOURS.textMain};
`;

function App() {
    return (
        <Container>
            <Layout>
                <Hero />
                <ProjectsList />
            </Layout>
        </Container>
    );
}

export default App;
