import Typography from "typography"
import githubTheme from "typography-theme-github"
import fairyTheme from "typography-theme-fairy-gates"

const myTheme = fairyTheme
myTheme.overrideThemeStyles = () => ({
  "ol,ul": {
    marginLeft: "20px"
  },
  "h1,h2,h3,h4,h5,h6": {
    marginTop: "0"
  },
  "h2,h3,h4,h5,h6": {
    marginTop: "2.5rem"
  },
  html: {
    fontSize: "100%"
  },
  body: {
    wordWrap: "normal"
    // backgroundColor: "#f5f5f5"
  },
  img: {
    marginBottom: 0
  },
  a: {
    backgroundImage: "none",
    color: "#1F8C98",
    fontWeight: "normal",
    textShadow: "none"
  },
  p: {
    lineHeight: "1.75rem"
  }
})

// githubTheme.plugins = [new CodePlugin()]
const typography = new Typography(myTheme)

export default typography
