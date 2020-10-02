import React from 'react';
import styled from 'styled-components';
import { QUERIES, COLOURS } from 'styling';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

const WidthWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(1rem, ${({ maxHeaderWidth }) => maxHeaderWidth});
    justify-content: center;
    background: ${COLOURS.bgMain};
    box-shadow: 0 0.5px 1.9px rgba(0, 0, 0, 0.021), 0 4px 15px rgba(0, 0, 0, 0.06);
`;

const Container = styled.header`
    color: ${COLOURS.textHeader};
`;

const Header = () => {
    return (
        <WidthWrapper maxHeaderWidth={QUERIES.maxHeaderWidth}>
            <Container>
                <MobileNavigation headerType="standard" />
                <Navigation headerType="standard" />
            </Container>
        </WidthWrapper>
    );
};

export default Header;
