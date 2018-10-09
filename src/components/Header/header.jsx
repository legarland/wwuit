import React, { Component } from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Logo from "../Logo/logo"
import Nav from "../Nav/nav"

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 3;
  padding: 0 20px;
  background-color: ${props => props.theme.headerBG};
  transition: 0.5s;
  ${props =>
    !props.theme.showBorder && `box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2)`};
  ${props =>
    props.theme.showBorder &&
    `&:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-image: linear-gradient(
        -90deg,
        rgba(14, 30, 37, 0) 0,
        #0e1e25 15%,
        #0e1e25 80%,
        rgba(14, 30, 37, 0) 100%
      );
      opacity: 0.08;
    }`};
  ${props =>
    !props.theme.isHome &&
    props.theme.showBorder &&
    `
      background: #24C6DC;
      background: -webkit-linear-gradient(to left, #514A9D, #24C6DC);
      background: linear-gradient(to left, #514A9D, #24C6DC);
    `};
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
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1rem;
  svg {
    margin-right: 10px;
  }
`

const LogoText = styled.div`
  font-style: italic;
  display: inline-block;
  color: ${props => props.theme.accentColor};
`

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      top: true
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 20 && this.state.top) this.setState({ top: false })
    if (window.scrollY <= 20 && !this.state.top) this.setState({ top: true })
  }

  render() {
    const { top } = this.state
    const { home } = this.props
    const theme = {
      headerBG: top ? "transparent" : "#fff",
      accentColor: top ? "#fff" : "#3FC2D6",
      showBorder: top,
      isHome: home
    }

    return (
      <ThemeProvider theme={theme}>
        <HeaderContainer>
          <HeaderInner>
            <LogoLink to="/" style={{ height: "24px" }}>
              <Logo color={theme.accentColor} />
              <LogoText>When Would I Use That?</LogoText>
            </LogoLink>
            <Nav />
          </HeaderInner>
        </HeaderContainer>
      </ThemeProvider>
    )
  }
}
