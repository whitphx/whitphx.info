import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as styles from "./Publications.module.scss";

function Publications() {
  const { publications } = useStaticQuery<Queries.PublicationsQuery>(graphql`
    query Publications {
      publications: allMarkdownRemark(
        filter: { fields: { fileSourceInstanceName: { eq: "publications" } } }
      ) {
        nodes {
          id
          frontmatter {
            title
            url
          }
        }
      }
    }
  `);
  const normalizedPublications = publications.nodes.map((node) => {
    const title = node.frontmatter?.title;
    if (title == null) {
      throw new Error(`Title is null: ${JSON.stringify(node)}`);
    }

    const url = node.frontmatter?.url;
    if (url == null) {
      throw new Error(`URL is null: ${JSON.stringify(node)}`);
    }

    return {
      id: node.id,
      title,
      url,
    };
  });

  return (
    <ul className={styles.listContainer}>
      {normalizedPublications.map((publication) => (
        <li key={publication.id} className={styles.listItem}>
          <a href={publication.url} target="_blank" rel="noreferrer noopener">
            {publication.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Publications;
