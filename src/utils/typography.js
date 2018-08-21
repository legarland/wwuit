import Typography from "typography"
import githubTheme from "typography-theme-github"
import sutroTheme from "typography-theme-sutro"

sutroTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "ol,ul": {
    marginLeft: "20px"
  },
  body: {
    wordWrap: "normal"
  }
})

// githubTheme.plugins = [new CodePlugin()]
const typography = new Typography(sutroTheme)

export default typography
