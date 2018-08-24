import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../../static/logos/logo.png"
import { resetList } from "../../utils/css"

const List = styled.ul`
  text-align: left;
  ${resetList};
`

const ListItem = styled.li`
  margin-bottom: 0.75rem;
`

const MenuLink = styled(Link)`
  color: #47d8da;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  text-rendering: optimizeLegibility;
  font-size: 1.51572rem;
  line-height: 1.1rem;
  text-shadow: 1px 1px 1px #222;
`

const LogoTagline = styled.h3`
  text-transform: uppercase;
  line-height: 1.3rem;
  margin: 0;
  text-shadow: 1px 1px 1px #222;
  text-align: left;
  color: #fff;
`

const Logo = styled.div`
  img {
    max-width: 100%;
  }
`

const LogoContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
`

export default class SidebarMenu extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <LogoContainer>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
          <LogoTagline>
            When Would
            <br />I Use
            <br />
            That?
          </LogoTagline>
        </LogoContainer>
        <List>
          <ListItem>
            <MenuLink to="latest">Latest Posts</MenuLink>
          </ListItem>
          <ListItem>
            <MenuLink to="collections">Collections</MenuLink>
          </ListItem>
        </List>
      </div>
    )
  }
}
