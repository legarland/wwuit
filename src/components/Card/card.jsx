import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Gravatar from "react-gravatar"
import devLogos from "../../utils/dev-logos"

const CardContainer = styled(Link)`
  border: solid 2px #f0f0f0;
  color: inherit;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
  transition: 0.25s;
  &:hover {
    box-shadow: 0 0 20px #dfdfdf;
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
  grid-template-columns: 40px 1fr 50px;
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
    const { title, tech, path, subtext } = this.props
    const { image, color } = devLogos[tech] || {}
    return (
      <CardContainer to={path}>
        <CardHeader color={color}>
          <DevLogo dangerouslySetInnerHTML={{ __html: image }} />
          <CardTitle>{title}</CardTitle>
          <Gravatar
            style={{ borderRadius: "50%" }}
            email="legarland@gmail.com"
          />
        </CardHeader>
        <CardBody>
          <p>{subtext}</p>
          <Link to={path}>Check it out!</Link>
        </CardBody>
      </CardContainer>
    )
  }
}
