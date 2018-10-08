import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Gravatar from "react-gravatar"
import devLogos from "../../utils/dev-logos"
import PostTags from "../PostTags/PostTags"

const CardContainer = styled.div`
  border: solid 2px #eee;
  color: inherit;
  display: flex;
  flex-direction: column;
  /* &:hover {
    text-decoration: none;
  }
  transition: 0.25s;
  &:hover {
    box-shadow: 0 0 20px #eee;
    transform: scale(1.05);
  } */
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
  background-color: #eee;
`

const CardTitle = styled.h4`
  text-transform: uppercase;
  margin: 0;
`

const CardBody = styled.div`
  padding: 20px;
  background-color: #fff;
  flex: 1;
`
const CardFooter = styled.div`
  background-color: #eee;
  padding: 10px;
`

export default class Card extends Component {
  render() {
    const { title, tech, path, subtext, tags } = this.props
    const { image, color } = devLogos[tech] || {}
    return (
      <CardContainer>
        <CardHeader color={color}>
          <DevLogo dangerouslySetInnerHTML={{ __html: image }} />
          <CardTitle>{title}</CardTitle>
          <Gravatar
            size={40}
            style={{ borderRadius: "50%" }}
            email="legarland@gmail.com"
          />
        </CardHeader>
        <CardBody>
          <p>{subtext}</p>
        </CardBody>
        <CardFooter>
          <PostTags tags={tags} />
        </CardFooter>
      </CardContainer>
    )
  }
}
