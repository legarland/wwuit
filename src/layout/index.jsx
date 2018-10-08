import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import { media } from "../utils/css"
import config from "../../data/SiteConfig"
import "./index.css"
import Header from "../components/Header/header"
import Hero from "../components/Hero/hero"

const Container = styled.div`
  margin: 0 auto;
  padding-top: 80px;
  max-width: 1200px;
  ${media.giant`margin: 0 20px;`};
`

const ContentContainer = styled.div``

const Grid = styled.div``

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/"
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "")
    let title = ""
    if (currentPath === "") {
      title = "Home"
    } else if (currentPath === "tags/") {
      title = "Tags"
    } else if (currentPath === "categories/") {
      title = "Categories"
    } else if (currentPath === "about/") {
      title = "About"
    } else if (currentPath.indexOf("posts")) {
      title = "Article"
    } else if (currentPath.indexOf("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ")
      title = `Tagged in ${capitalize(tag)}`
    } else if (currentPath.indexOf("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ")
      title = `${capitalize(category)}`
    }
    return title
  }

  render() {
    const { children } = this.props
    // const { open } = this.state.open
    return (
      <Grid>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header />
        <Container>
          <ContentContainer>{children}</ContentContainer>
        </Container>
      </Grid>
    )
  }
}
