import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import BlogIndex from "../components/BlogIndex";

function TopPage({ data, location }: PageProps<Queries.BlogIndexQuery>) {
  const siteTitle = data.site?.siteMetadata?.title || `Title`;
  const blogPosts = data.blogPosts.nodes.map((node) => {
    const slug = node.fields?.slug;
    if (slug == null) {
      throw new Error(`Slug is null: ${JSON.stringify(node)}`);
    }

    const dateStr = node.frontmatter?.date;
    if (dateStr == null) {
      throw new Error(`Date is null: ${JSON.stringify(node)}`);
    }
    const date = new Date(dateStr);

    const title = node.frontmatter?.title || slug;

    return {
      slug,
      title,
      date,
    };
  });

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      {blogPosts.length > 0 ? (
        <BlogIndex posts={blogPosts} />
      ) : (
        <p>
          No blog posts found. Add markdown posts to &quot;content/blog&quot;
          (or the directory you specified for the
          &quot;gatsby-source-filesystem&quot; plugin in gatsby-config.js).
        </p>
      )}
    </Layout>
  );
}

export default TopPage;

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    blogPosts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        fields: { fileSourceInstanceName: { eq: "blog" } }
        frontmatter: { draft: { ne: true } }
      }
    ) {
      nodes {
        excerpt
        fields {
          slug
          fileSourceInstanceName
        }
        frontmatter {
          date
          title
          description
        }
      }
    }
  }
`;
