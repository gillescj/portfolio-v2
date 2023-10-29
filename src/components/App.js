import React, { useEffect } from 'react';
import styled from 'styled-components';
import { COLOURS } from 'styling';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import Contact from './Contact';
import ReactGA from 'react-ga';
import BackToTop from './BackToTop';

const Container = styled.div`
    background: ${COLOURS.bgMain};
    color: ${COLOURS.textMain};
`;

function App() {
    useEffect(() => {
        ReactGA.initialize('UA-179273123-2');
        ReactGA.pageview('/');
    }, []);

    return (
        <Container>
            <Layout>
                <Hero />
                <Contact />
                <BackToTop />
            </Layout>
        </Container>
    );
}

export default App;
