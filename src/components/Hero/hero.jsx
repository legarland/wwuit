import React, { Component } from "react"
import styled from "styled-components"

const HeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30em;
  z-index: 1;
  background-image: linear-gradient(45deg, #e37682 15%, #5f4d93 85%);
`
export default class Hero extends Component {
  render() {
    return <HeroContainer />
  }
}
