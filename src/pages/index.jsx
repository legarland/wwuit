import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../layout"
import PostListing from "../components/PostListing/PostListing"
import SEO from "../components/SEO/SEO"
import config from "../../data/SiteConfig"
import AnimatedLogo from "../components/AnimatedLogo/animated-logo"
import HeroLogo from "../components/HeroLogo/HeroLogo"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-gap: 20px;
`
const MainText = styled.h1`
  font-size: 4rem;
`

class Index extends React.Component {
  render() {
    const { edges = [] } = this.props.data.allMarkdownRemark || {}
    return (
      <Layout location={this.props.location} home>
        <Helmet title={config.siteTitle} />
        <SEO />
        <HeroLogo />
        {/* <h1>Latest Posts</h1>
        <PostListing postEdges={edges} /> */}
      </Layout>
    )
  }
}

export default Index

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
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
            subtext
            tags
            cover
            date
            tech
          }
        }
      }
    }
  }
`
