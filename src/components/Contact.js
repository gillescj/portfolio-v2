import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { COLOURS, QUERIES } from 'styling';
import { useSpring, animated } from 'react-spring';
import { ReactComponent as PaperPlaneSVG } from 'assets/svgs/paper-plane.svg';

const Container = styled.section`
    display: grid;
    min-height: 50vh;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-content: left;
    grid-gap: 3rem;
    @media (${QUERIES.medium}) {
        grid-template-columns: 2fr 1fr;
    }
    @media (${QUERIES.small}) {
        grid-template-columns: 1fr;
    }
`;

const Details = styled.div`
    display: grid;
    grid-gap: 2rem;
`;

const Graphic = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
`;

const ContactHeader = styled.h1`
    font-size: 3rem;
`;

const Email = styled.input`
    background: none;
    padding: 1rem;
    border: solid 3px white;
    font-size: 1.2rem;
    color: ${COLOURS.textMain};
    outline: none;
    width: 100%;
    cursor: pointer;
`;

const CopyButton = styled.button`
    justify-self: start;
    background: inherit;
    color: ${COLOURS.textMain};
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 300ms;
    border: 3px ${COLOURS.textMain} solid;
    border-bottom-right-radius: 1.5rem;
    &:hover {
        border: 3px ${COLOURS.accent} solid;
    }
`;

const StyledPaperPlaneSVG = styled(PaperPlaneSVG)`
    transition: fill 300ms;
    width: 7rem;
    height: 7rem;
    cursor: pointer;
`;

const AnimatedPaperPlane = animated(StyledPaperPlaneSVG);

const colourCodes = [
    COLOURS.textMain,
    COLOURS.accent,
    '#ff0055',
    '#dfff11',
    '#0ff0fc',
    '#008855',
    '#cc22bb',
];

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [colourIndex, setColourIndex] = useState(0);
    const [colour, setColour] = useState(colourCodes[0]);

    const emailTextRef = useRef();

    const copyEmail = () => {
        emailTextRef.current.select();
        document.execCommand('copy');
        setCopied((previousCopied) => !previousCopied);
    };

    const nextColour = () => {
        setColourIndex((prevColourIndex) => prevColourIndex + 1);
    };

    useEffect(() => {
        if (colourIndex > colourCodes.length - 1) {
            setColourIndex(0);
            setColour(colourCodes[0]);
        } else {
            setColour(colourCodes[colourIndex]);
        }
    }, [colourIndex]);

    const springProps = useSpring({
        config: { mass: 1, tension: 300, friction: 10 },
        transform: copied ? 'scale(1.35)' : 'scale(1)',
        fill: colour,
    });

    return (
        <Container id="contact">
            <Details>
                <ContactHeader>Contact</ContactHeader>
                <Email
                    ref={emailTextRef}
                    value="gillescj.developer@gmail.com"
                    readOnly
                    onClick={() => copyEmail()}
                />
                <CopyButton onClick={() => copyEmail()}>Copy</CopyButton>
            </Details>
            <Graphic>
                <AnimatedPaperPlane style={springProps} onClick={() => nextColour()} />
            </Graphic>
        </Container>
    );
};

export default Contact;
