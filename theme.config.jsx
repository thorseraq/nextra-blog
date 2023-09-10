/* eslint sort-keys: error */
export default {
  head: ({ title, meta }) => (
    <>
      <title>The X1a0t</title>
      <link rel="icon" type="image/png" href="/favicon.png"></link>
    </>
  ),
  darkMode: true,
  dateFormatter: (date) => `Last updated at ${date.toDateString()}`,
  footer: (
    <small style={{ display: "block", marginTop: "8rem" }}>
      <abbr
        title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
        style={{ cursor: "help" }}
      >
        CC BY-NC 4.0
      </abbr>{" "}
      <a href="https://github.com/shuding/nextra">
        {new Date().getFullYear()} © Powered by Nextra.{" "}
      </a>
      <style jsx>{`
        a {
          float: right;
        }

        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  components: {
    h1: ({ children }) => (
      <h1
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          backgroundImage: "linear-gradient(90deg,#7928CA,#FF0080)",
        }}
      >
        {children}
      </h1>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          backgroundImage: "linear-gradient(120deg, #008080, #008050)",
        }}
      >
        {children}
      </blockquote>
    ),
  },
};
