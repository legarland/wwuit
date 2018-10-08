import React, { Component } from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../Logo/logo"
import Nav from "../Nav/nav"

const HeaderContainer = styled.div`
  border-bottom: solid 1px #eee;
  position: fixed;
  width: 100%;
  z-index: 2;
  padding: 0 20px;
  /* background-color: #fff; */
`

const HeaderInner = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  svg {
    height: 100%;
  }
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: normal;
  text-transform: uppercase;
  line-height: 1rem;
  svg {
    margin-right: 10px;
  }
`

const LogoText = styled.div`
  font-style: italic;
  display: inline-block;
  color: var(--accent-color);
`

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        {/* <Helmet>
          <style>
            {`
                :root {
                  --accent-color: #fff;
                }
              `}
          </style>
        </Helmet> */}
        <HeaderInner>
          <LogoLink to="/" style={{ height: "24px" }}>
            <Logo />
            <LogoText>When Would I Use That?</LogoText>
          </LogoLink>
          <Nav />
        </HeaderInner>
      </HeaderContainer>
    )
  }
}
