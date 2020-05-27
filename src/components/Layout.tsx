import { css, Global } from "@emotion/core"
import React from "react"
import { Helmet } from "react-helmet"

export default ({ children }: { children: React.ReactNode }) => (
  <>
    <Helmet title="Paul Shen">
      <link rel="stylesheet" href="https://use.typekit.net/lof7pip.css"></link>
    </Helmet>
    <Global
      styles={css`
        :root {
          --font-sans: aktiv-grotesk, sans-serif;
          --font-serif: freight-text-pro, serif;
          --font-mono: SFMono-Regular, Consolas, Inconsolatas, Liberation Mono,
            Menlo, monospace;
          --font-size-default: 18px;
          --font-size-smaller: 0.8em;
          --font-size-title: 1.8em;
          --line-height: 1.5;
          --dark: #1e1f20;
          --mid: #8c9194;
          --light: #ededed;
          --tan: #f8f3e6;
          --orange: #dcb98f;
          --blue: #d2e1e9;
          font-size: var(--font-size-default);
        }
        body {
          margin: 0;
        }
        a {
          color: var(--dark);
        }
        p {
          margin: 1em 0;
          line-height: var(--line-height);
        }
      `}
    />
    {children}
  </>
)
