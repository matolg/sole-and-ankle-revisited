/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <MobileMenuOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <MobileMenuContent>
        <Menu>
          <NavHeader>
            <UnstyledButton onClick={onDismiss}>
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
              <Icon id="close" />
            </UnstyledButton>
          </NavHeader>
          <Nav>
            <NavItem href="/sale">Sale</NavItem>
            <NavItem href="/new">New&nbsp;Releases</NavItem>
            <NavItem href="/men">Men</NavItem>
            <NavItem href="/women">Women</NavItem>
            <NavItem href="/kids">Kids</NavItem>
            <NavItem href="/collections">Collections</NavItem>
          </Nav>
          <NavFooter>
            <NavItem href="/terms">Terms and Conditions</NavItem>
            <NavItem href="/privacy">Privacy Policy</NavItem>
            <NavItem href="/contact">Contact Us</NavItem>
          </NavFooter>
        </Menu>
      </MobileMenuContent>
    </MobileMenuOverlay>
  );
};

const MobileMenuOverlay = styled(DialogOverlay)`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    background: var(--colors-overlay);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
  }
`;

const MobileMenuContent = styled(DialogContent)`
  background: var(--colors-white);
  height: 100%;
  width: 300px;
`;

const Menu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 32px;
`;

const NavHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 26px 16px;
`;

const NavFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  margin: 32px;
`;

const NavItem = styled.a`
  text-decoration: none;
  ${NavFooter} & {
    font-size: calc(14 / 16 * 1rem);
    color: var(--colors-gray-700);
  }
  ${Nav} & {
    font-size: calc(18 / 16 * 1rem);
    text-transform: uppercase;
    color: var(--colors-gray-900);
  }
`;

export default MobileMenu;
