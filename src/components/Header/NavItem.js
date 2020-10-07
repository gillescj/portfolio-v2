import React, { useState } from 'react';
import styled from 'styled-components';
import { COLOURS } from 'styling';
import { ReactComponent as ChevDownSVG } from 'assets/svgs/chev-down.svg';

const Container = styled.li`
    color: ${COLOURS.textMain};
    text-decoration: inherit;
    padding: 5px 0;
    font-weight: 700;
    font-size: 1.1rem;
`;

const LabelContainer = styled.div`
    display: flex;
    cursor: pointer;
    svg {
        align-self: flex-end;
        width: 20px;
        height: 20px;
    }

    position: relative;
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

const NavItem = ({ to, name, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <Container onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <a href={to}>
                <LabelContainer>
                    {name}
                    {children ? <ChevDownSVG /> : null}
                </LabelContainer>

                {open && children}
            </a>
        </Container>
    );
};

export default NavItem;
