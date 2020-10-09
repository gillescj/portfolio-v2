import React, { useState } from 'react';
import styled from 'styled-components';
import { COLOURS } from 'styling';
import { ReactComponent as ChevDownSVG } from 'assets/svgs/chev-down.svg';

const Container = styled.li`
    color: ${COLOURS.textHeader};
    text-decoration: inherit;
    padding-right: 0.5rem;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.1rem;
`;

const LabelContainer = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    svg {
        align-self: center;
        width: 30px;
        height: 30px;
        transition: transform 300ms ease-in-out;
        transform: ${({ open }) => (open ? 'rotateX(180deg);' : 'none')};
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        border-radius: 3px;
        bottom: -12px;
        left: 0;
        right: 0;
        background-color: ${COLOURS.accent};
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s cubic-bezier(0.04, 0.77, 0.44, 1.01);
    }
    &:hover {
        &::after {
            visibility: visible;
            opacity: 1;
            transform: translateY(-6px);
        }
    }
`;

const MobileNavItem = ({ to, name, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <Container onClick={() => setOpen((previousOpen) => !previousOpen)}>
            <a href={to}>
                <LabelContainer open={open}>
                    {name}
                    {children ? <ChevDownSVG /> : null}
                </LabelContainer>

                {open && children}
            </a>
        </Container>
    );
};

export default MobileNavItem;
