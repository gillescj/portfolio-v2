import React from 'react';
import { QUERIES } from 'styling';
import styled from 'styled-components';
import NavItem from './NavItem';
import { ReactComponent as LogoSVG } from 'assets/svgs/logo.svg';

const Container = styled.nav`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;

    @media (${QUERIES.medium}) {
        display: none;
    }
`;

const ContainerStandard = styled(Container)`
    padding: 1rem;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SVGContainer = styled.div`
    padding: 0 1rem;
    svg {
        height: 64px;
        width: auto;
    }
`;

const NavUl = styled.ul`
    display: flex;
    list-style-type: none;
    justify-self: center;
    z-index: 2;
    li {
        padding-right: 1rem;
    }
    li > a {
    }
    li:first-child {
        padding-left: 1rem;
    }
`;

const RightNav = styled(NavUl)`
    justify-self: end;
`;

const Navigation = () => {
    return (
        <ContainerStandard>
            <LogoContainer>
                <SVGContainer>
                    <LogoSVG />
                </SVGContainer>
            </LogoContainer>
            <RightNav>
                <NavItem name="Projects" />
            </RightNav>
        </ContainerStandard>
    );
};

export default Navigation;
