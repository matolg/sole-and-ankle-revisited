import React from "react";
import styled from "styled-components/macro";

import { QUERIES, COLORS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MobileStripe />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} color={COLORS.gray[900]} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} color={COLORS.gray[900]} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} color={COLORS.gray[900]} />
          </UnstyledButton>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--colors-gray-300);
  overflow-y: auto;

  @media ${QUERIES.tabletAndBelow} {
    align-items: center;
    padding: 18px 16px;
    overflow: revert;
  }
`;

const MobileStripe = styled.div`
  background: var(--colors-gray-900);
  height: 4px;
`;

const Nav = styled.nav`
  flex: 5;
  justify-content: space-between;
  gap: clamp(1rem, 4vw - 1.5rem, 12rem);
  display: flex;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: flex;
    margin-left: auto;
    gap: 1rem;
    color: var(--colors-gray-900);
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndBelow} {
    &:last-of-type {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--colors-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--colors-secondary);
  }
`;

export default Header;
