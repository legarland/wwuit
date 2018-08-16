module.exports = {
  siteTitle: "When Would I Use That?", // Site title.
  siteTitleShort: "WWIUT?", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Real world use cases", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://whenwouldiusethat.com", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Real world use cases for the Javascript API", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  // googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "javascript", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Logan Garland", // Username to display in the author segment.
  userTwitter: "floppycatfish", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Tucson, AZ", // User location to display in the author segment.
  userAvatar: "http://daubcreative.com/static/logan.c9072157.png", // User avatar to display in the author segment.
  userDescription:
    "Developer. Gamer. Husband. Father. ❤️ JS & React. ❤️ KC Royals & Chiefs",
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/legarland",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/floppycatfish",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:legarland@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Logan Garland", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
}
