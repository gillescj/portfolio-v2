import React, { useEffect } from 'react';
import styled from 'styled-components';
import { COLOURS } from 'styling';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import ProjectsList from './ProjectsList';
import Contact from './Contact';
import ReactGA from 'react-ga';

const Container = styled.div`
    background: ${COLOURS.bgMain};
    color: ${COLOURS.textMain};
`;

ReactGA.initialize('UA-179273123-2');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
    return (
        <Container>
            <Layout>
                <Hero />
                <ProjectsList />
                <Contact />
            </Layout>
        </Container>
    );
}

export default App;
