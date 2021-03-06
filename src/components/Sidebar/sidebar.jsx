import React, { Component, Fragment } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Bars, Times } from "styled-icons/fa-solid"
import { debounce } from "lodash"
import { media } from "../../utils/css"
import logo from "../../../static/logos/logo.png"
import SidebarMenu from "../SidebarMenu/sidebar-menu"
import UserInfo from "../UserInfo/UserInfo"

const SidebarBase = styled.div`
  background-color: #333258;
  text-align: center;
  padding: 32px 15px 0 15px;
  position: fixed;
  height: 100vh;
  width: 250px;
  transition: 0.25s;
  overflow-y: auto;
  z-index: 1;
`

const DesktopSidebar = styled(SidebarBase)`
  ${media.phone`transform: translate(-100%);`};
  ${media.desktop`width: 80px;`};
`

const SmallLogo = styled.img`
  display: none;
  max-width: 100%;
  ${media.desktop`display: inline;`};
`

const DesktopSidebarMenu = styled(SidebarMenu)`
  display: block;
  ${media.desktop`display: none;`};
`

const MobileSidebar = styled(SidebarBase)`
  padding-left: 25px;
  padding-right: 20px;
  transform: ${props => (props.open ? `translateX(0)` : `translateX(-100%)`)};
`

const Header = styled.div`
  height: 40px;
  transition: 0.25s;
  background-color: #333258;
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  transform: ${props => (props.open ? "translateY(0)" : "translateY(-100%)")};
  a {
    line-height: 0;
    img {
      height: 24px;
      margin-bottom: 0;
    }
  }
`
export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false, desktop: true }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      debounce(this.updateWindowDimensions, 150)
    )
    this.updateWindowDimensions()
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      debounce(this.updateWindowDimensions, 150)
    )
  }

  updateWindowDimensions() {
    const { open } = this.state
    if (window.innerWidth > 768 && !open) this.setState({ open: true })
    if (window.innerWidth <= 768 && open) this.setState({ open: false })
    this.setState({ desktop: window.innerWidth >= 768 })
  }

  render() {
    const { open, desktop } = this.state
    return (
      <div>
        {desktop ? (
          <DesktopSidebar>
            <SmallLogo src={logo} alt="logo" />
            <DesktopSidebarMenu />
          </DesktopSidebar>
        ) : (
          <Fragment>
            <MobileSidebar open={open} key="sidebar">
              <Times
                onClick={() => {
                  this.setState({
                    open: false
                  })
                }}
                size={20}
                css="color: #fff; position: absolute; top: 10px; right: 10px;"
              />
              <SidebarMenu />
            </MobileSidebar>
            <Header open={!open}>
              <Bars
                onClick={() => {
                  this.setState({ open: true })
                }}
                css="color: #fff"
                size={20}
              />
              <Link to="/">
                <img src={logo} alt="header-logo" />
              </Link>
            </Header>
          </Fragment>
        )}
      </div>
    )
  }
}
