import React from 'react';
import styled from 'styled-components';

const HoverWrapper = styled.div`
    position: static;
    padding-left: 1rem;
    transform: translateX(-20px);
`;

const Container = styled.ul`
    display: grid;
    /* grid-gap: 15px; */
    /* padding: 1rem; */
    color: black;
    background: inherit;
    opacity: ${({ visible }) => (visible ? '1' : '0')};
    transition: opacity 2s ease-in-out;
`;

const MobileNavItemDropdown = ({ children }) => {
    return (
        <HoverWrapper>
            <Container visible={typeof children !== 'undefined'}>{children}</Container>
        </HoverWrapper>
    );
};

export default MobileNavItemDropdown;
