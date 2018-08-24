import React, { Component } from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
  height: 64px;
  background-color: #333258;
`

const HeaderInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderInner>test</HeaderInner>
      </HeaderContainer>
    )
  }
}
