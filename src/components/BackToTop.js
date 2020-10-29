import React, { useState } from 'react';
import styled from 'styled-components';
import { COLOURS } from 'styling';
import { Button } from 'components/styledComponents';
import { ReactComponent as TopSVG } from 'assets/svgs/top.svg';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
    position: fixed;
    bottom: 5vw;
    right: 5vw;
    z-index: 20;
`;

const ArrowButton = styled(Button)`
    display: grid;
    align-items: center;
    background: ${COLOURS.bgMain};
    box-shadow: 0 1.5px 2.1px rgba(0, 0, 0, 0.06), 0 12px 17px rgba(0, 0, 0, 0.12);
    svg {
        stroke: ${COLOURS.textMain};
        width: 32px;
        height: 32px;
    }
`;

const AnimatedContainer = animated(Container);

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behaviour: 'smooth' });
    };

    const checkVisibility = () => {
        if (window.pageYOffset > 800) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    window.addEventListener('scroll', checkVisibility);

    const springProps = useSpring({
        opacity: isVisible ? 1 : 0,
        from: { opacity: 0 },
        config: { velocity: 2, mass: 8, clamp: true },
    });

    return (
        <AnimatedContainer style={springProps}>
            <ArrowButton onClick={() => scrollToTop()} aria-label="Scroll back to top">
                <TopSVG />
            </ArrowButton>
        </AnimatedContainer>
    );
};

export default BackToTop;
