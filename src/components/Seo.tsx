/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { Helmet, HelmetProps } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import iconImage from "../images/icon.png";

export interface SeoProps {
  description?: string;
  title?: string;
  lang?: string;
  meta?: HelmetProps["meta"];
}
function Seo({ description, lang, meta: additionalMeta, title }: SeoProps) {
  const { site }: Queries.SeoQuery = useStaticQuery(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site?.siteMetadata?.description;
  const defaultTitle = site?.siteMetadata?.title;

  const siteUrl = site?.siteMetadata?.siteUrl;
  const ogpImage = siteUrl ? siteUrl + iconImage : null;

  const meta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: ogpImage,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site?.siteMetadata?.social?.twitter || ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ] as NonNullable<HelmetProps["meta"]>;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={meta.concat(additionalMeta ?? [])}
    />
  );
}

export default Seo;
