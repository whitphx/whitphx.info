import * as React from "react"
import { Link, PageProps } from "gatsby"
import * as styles from "./Layout.module.scss"

export interface LayoutProps {
  location: PageProps["location"]
  title: string
  children: React.ReactNode
}
function Layout({ location, title, children }: LayoutProps) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className={styles.mainHeading}>
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className={styles.headerLinkHome} to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className={styles.globalWrapper} data-is-root-path={isRootPath}>
      <header className={styles.globalHeader}>{header}</header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>
          This site is using Google Analytics.
          {` `}© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
        <div className={styles.donations}>
          <a
            href="https://www.buymeacoffee.com/whitphx"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              width="180"
              height="50"
            />
          </a>
          <a
            href="https://ko-fi.com/D1D2ERWFG"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://ko-fi.com/img/githubbutton_sm.svg"
              alt="Support me on Ko-fi"
            />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
