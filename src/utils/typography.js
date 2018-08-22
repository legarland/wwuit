import Typography from "typography"
import sutroTheme from "typography-theme-sutro"

sutroTheme.overrideThemeStyles = () => ({
  "ol,ul": {
    marginLeft: "20px"
  },
  "h1,h2,h3,h4,h5,h6": {
    marginTop: "0"
  },
  "h2,h3,h4,h5,h6": {
    marginTop: "2rem"
  },
  html: {
    fontSize: "100%"
  },
  body: {
    wordWrap: "normal"
  }
})

// githubTheme.plugins = [new CodePlugin()]
const typography = new Typography(sutroTheme)

export default typography
