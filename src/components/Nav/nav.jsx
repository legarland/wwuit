import React, { Component, Fragment } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Menu } from "styled-icons/material/Menu"
import { Close } from "styled-icons/material/Close"
import { media } from "../../utils/css"

const NavContainer = styled.nav`
  ${media.tablet`
    align-items: center;
    background: #283339;
    display: flex;
    transform: translateY(-200%);
    flex-direction: column;
    font-weight: 700;
    height: 100vh;
    justify-content: center;
    left: 0;
    opacity: .95;
    position: absolute;
    top: 0;
    width: 100vw;
    transition: .2s;
    &.active {
      transform: translateY(0);

    }
  `};
`

const MenuButton = styled(Menu)`
  margin: 8px 0;
  display: none;
  ${media.tablet`display: block;`};
`
const MenuCloseButton = styled(Close)`
  margin: 8px 0;
  position: relative;
  z-index: 10;
`

const NavLink = styled(Link)`
  border-bottom: 3px solid transparent;
  color: var(--accent-color);
  font-size: 14px;
  margin-bottom: 0;
  margin-left: 20px;
  padding: 15px 5px 7px;
  font-weight: normal;
  text-transform: uppercase;
  display: inline-block;
  transition: 0.75s;
  &:hover,
  &:focus,
  &.active {
    background-color: transparent;
    border-bottom: 3px solid var(--accent-color);
  }
`

export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      menuOpen: false
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.menuOpen ? (
          <MenuCloseButton
            size={30}
            color="#fff"
            onClick={() => this.setState({ menuOpen: false })}
          />
        ) : (
          <MenuButton
            size={30}
            color="#000"
            onClick={() => this.setState({ menuOpen: true })}
          />
        )}
        <NavContainer
          className={this.state.menuOpen ? "active" : ""}
          id="navigation"
          role="navigation"
        >
          <NavLink activeClassName="active" to="/latest">
            Latest
          </NavLink>
          <NavLink activeClassName="active" to="/collections">
            Collections
          </NavLink>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </NavContainer>
      </Fragment>
    )
  }
}
