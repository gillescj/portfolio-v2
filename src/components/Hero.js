import React from 'react';
import styled from 'styled-components';
import { COLOURS } from 'styling';

const Container = styled.section`
    color: ${COLOURS.textMain};
    h1 {
        font-size: 5.5rem;
        font-weight: 700;
    }
    h5 {
        font-size: 1.2rem;
        font-weight: 500;
    }
`;

const Hero = () => {
    return (
        <Container>
            <h5>Hey there, I'm</h5>
            <h1>Colin Gillespie.</h1>
            <h1>I develop websites.</h1>
            <p>
                Eius laudantium nostrum non qui vero et culpa a. Illum sit ut quis error
                ut adipisci provident est.
            </p>
        </Container>
    );
};

export default Hero;
