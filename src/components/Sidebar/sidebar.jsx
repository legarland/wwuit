import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Bars, Times } from "styled-icons/fa-solid"
import { media, resetList } from "../../utils/css"
import logo from "../../../static/logos/logo.png"

const Container = styled.div`
  background-color: #333258;
  text-align: center;
  padding: 40px 15px 0 15px;
  img {
    max-width: 50%;
  }
  position: fixed;
  height: 100vh;
  width: 250px;
  transform: translateX(0);
  ${media.tablet`transform: translateX(-100%);`}
  transform: ${props => (props.open ? `translateX(0) !important` : ``)};
  transition: 0.5s;
  z-index: 1;
`

const ListHeader = styled.h2`
  margin-bottom: 5px;
  text-align: left;
  color: #47d8da;
`

const List = styled.ul`
  text-align: left;
  ${resetList};
  li {
    a {
      color: #ffffff;
      font-size: 0.8em;
      font-weight: 100;
    }
  }
`

const Header = styled.div`
  height: 64px;
  transition: 0.5s;
  background-color: #333258;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  transform: ${props => (props.open ? "translateY(0)" : "translateY(-100%)")};
  img {
    height: 34px;
    margin-bottom: 0;
  }
`

const ListItem = styled.li`
  margin-bottom: 0.05rem;
`

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = { open: true, desktop: true }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentWillMount() {
    if (typeof window !== "undefined") {
      this.updateWindowDimensions()
      window.addEventListener("resize", this.updateWindowDimensions)
      // eslint-disable-next-line
      this.setState({ desktop: window.innerWidth >= 768 })
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    const { open } = this.state
    if (window.innerWidth > 768 && !open)
      this.setState({ open: true, desktop: true })
    if (window.innerWidth <= 768 && open) this.setState({ open: false })
  }

  render() {
    const { open, desktop } = this.state
    return (
      <div>
        <Container open={open}>
          {!desktop && (
            <Times
              onClick={() => {
                this.setState({
                  open: false
                })
              }}
              size={36}
              css="color: #fff; position: absolute; top: 10px; right: 10px;"
            />
          )}
          <img src={logo} alt="logo" />
          <ListHeader>Recent Posts</ListHeader>
          <List>
            <ListItem>
              <Link to="reduce">Array.reduce()</Link>
            </ListItem>
            <ListItem>
              <Link to="test">getDerivedStateFromProps()</Link>
            </ListItem>
          </List>
          <ListHeader>Series</ListHeader>
          <List>
            <ListItem>
              <Link to="tags/react">React</Link>
            </ListItem>
            <ListItem>
              <Link to="tags/array">Arrays</Link>
            </ListItem>
          </List>
        </Container>
        <Header open={!open}>
          <Bars
            onClick={() => {
              this.setState({ open: true })
            }}
            css="color: #fff"
            size={30}
          />
          <img src={logo} alt="header-logo" />
        </Header>
      </div>
    )
  }
}
