import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

import * as styles from "./BlogPost.module.scss"

function BlogPostTemplate({
  data,
  location,
}: PageProps<Queries.BlogPostQuery>) {
  const post = data.markdownRemark
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const { previous: prev, next } = data

  if (post == null) {
    return null
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter?.title ?? undefined}
        description={
          (post.frontmatter?.description || post.excerpt) ?? undefined
        }
        lang={post.frontmatter?.lang || "en"}
      />
      <article
        className={styles.blogPost}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter?.title}</h1>
          <p>{post.frontmatter?.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html ?? "" }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className={styles.blogPostNav}>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {prev && prev.fields?.slug && (
              <Link to={prev.fields?.slug} rel="prev">
                ← {prev.frontmatter?.title}
              </Link>
            )}
          </li>
          <li>
            {next && next.fields?.slug && (
              <Link to={next.fields?.slug} rel="next">
                {next.frontmatter?.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPost($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        lang
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
