import React from "react"
import styled from "styled-components"
import Card from "../Card/card"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`

class PostListing extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        subtext: postEdge.node.frontmatter.subtext,
        tech: postEdge.node.frontmatter.tech,
        timeToRead: postEdge.node.timeToRead
      })
    })
    return postList
  }
  render() {
    const postList = this.getPostList()
    return (
      <Grid>
        {/* Your post list here. */
          postList.map(post => (
            <Card {...post} key={post.path} />
          ))}
      </Grid>
    )
  }
}

export default PostListing
