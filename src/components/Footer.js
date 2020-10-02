import React from 'react';
import { COLOURS } from 'styling';
import styled from 'styled-components';

const Container = styled.footer`
    padding: 2rem;
    background: ${COLOURS.bgMain};
    color: ${COLOURS.textMain};
`;

const Footer = () => {
    return <Container>Footer</Container>;
};

export default Footer;
