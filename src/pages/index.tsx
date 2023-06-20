import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import BlogIndex, { BlogIndexProps } from "../components/BlogIndex";

function TopPage({ data, location }: PageProps<Queries.BlogIndexQuery>) {
  const siteTitle = data.site?.siteMetadata?.title || `Title`;
  const posts: BlogIndexProps["posts"] = data.allMarkdownRemark.nodes.map(
    (node) => {
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
    }
  );

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to &quot;content/blog&quot;
          (or the directory you specified for the
          &quot;gatsby-source-filesystem&quot; plugin in gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <BlogIndex posts={posts} />
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
    allMarkdownRemark(
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
