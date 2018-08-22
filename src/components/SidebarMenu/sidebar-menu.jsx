import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../../static/logos/logo.png"
import { resetList } from "../../utils/css"

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

const ListItem = styled.li`
  margin-bottom: 0.05rem;
`

export default class SidebarMenu extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}
