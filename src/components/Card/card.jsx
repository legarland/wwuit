import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import devLogos from "../../utils/dev-logos"

const CardContainer = styled.div`
  border: solid 2px #f0f0f0;
  transition: 0.25s;
  &:hover {
    box-shadow: 0 0 10px #dfdfdf;
    transform: scale(1.05);
  }
`

const DevLogo = styled.div`
  width: 40px;
`

const CardHeader = styled.div`
  display: grid;
  grid-gap: 10px;
  align-items: center;
  grid-template-columns: 40px 1fr;
  line-height: 1em;
  padding: 5px;
  background-color: #f5f5f5;
`

const CardTitle = styled.h4`
  text-transform: uppercase;
  margin: 0;
`

const CardBody = styled.div`
  padding: 20px;
`

export default class Card extends Component {
  render() {
    const { title, tech, path } = this.props
    const { image, color } = devLogos[tech]
    return (
      <CardContainer>
        <CardHeader color={color}>
          <DevLogo dangerouslySetInnerHTML={{ __html: image }} />
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardBody>
          <Link to={path}>Check it out!</Link>
        </CardBody>
      </CardContainer>
    )
  }
}
