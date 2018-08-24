import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../layout/index"

export default class Latest extends Component {
  render() {
    const { edges = [] } = this.props.data.allMarkdownRemark || {}
    console.log(edges)
    return (
      <Layout location={this.props.location}>
        <h1>Latest Posts</h1>
        {edges.map(post => (
          <div key={post.node.fields.slug}>{post.node.frontmatter.title}</div>
        ))}
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LatestQuery {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
