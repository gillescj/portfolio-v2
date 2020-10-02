import React from 'react';
import styled from 'styled-components';
import { QUERIES } from 'styling';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Container = styled.div`
    display: grid;
    align-items: start;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
`;

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(1rem, ${({ maxWidth }) => maxWidth});
    justify-content: center;
    main {
        padding: ${({ padding }) => padding};
        margin-bottom: 5rem;
    }
`;

const Layout = ({
    children,
    maxWidth = QUERIES.maxContentWidth,
    padding = '2rem 1rem',
}) => {
    return (
        <Container>
            <Header />
            <MainWrapper maxWidth={QUERIES.maxContentWidth} padding={padding}>
                <main>{children}</main>
            </MainWrapper>
            <Footer />
        </Container>
    );
};

export default Layout;
