import React, { Component } from "react"
import styled from "styled-components"
import { Tags } from "styled-icons/fa-solid/Tags"
import _ from "lodash"
import { Link } from "gatsby"

const TagContainer = styled.div`
  display: flex;
  align-items: center;
`

const TagLink = styled(Link)`
  display: inline-block;
  margin-right: 5px;
`

class PostTags extends Component {
  render() {
    const { tags } = this.props
    return (
      <TagContainer>
        <Tags size={16} color="#aaa" style={{ marginRight: 10 }} />
        {tags &&
          tags.map((tag, index) => (
            <TagLink key={tag} to={`/tags/${_.kebabCase(tag)}`}>
              {tag}
              {index !== tags.length - 1 && ","}
            </TagLink>
          ))}
      </TagContainer>
    )
  }
}

export default PostTags
