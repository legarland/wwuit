import React, { Component } from "react"
import styled from "styled-components"

const HeroContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 30em;
  display: flex;
  svg {
    height: 30em;
    flex: 0 0 auto;
  }
  z-index: 1;
`
export default class Hero extends Component {
  render() {
    return (
      <HeroContainer>
        <svg viewBox="0 0 2850.29 530.09">
          <defs>
            <linearGradient
              id="a"
              x1="28.7"
              y1="264.59"
              x2="2719.9"
              y2="127.98"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.24" stopColor="#35c2d8" />
              <stop offset="0.7" stopColor="#514b9d" />
            </linearGradient>
          </defs>
          <path
            d="M0,1H2850.29V175.53c-247.44,40.17-519.46,103-822,118.92-490.31,25.78-726,115.92-1207.15,143.17C565.84,452.08,290.41,480.82,0,531.09Z"
            transform="translate(0 -1)"
            fill="url(#a)"
          />
        </svg>
      </HeroContainer>
    )
  }
}
