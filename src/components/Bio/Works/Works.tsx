import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as styles from "./Works.module.scss";

function Works() {
  const { works } = useStaticQuery<Queries.WorksQuery>(graphql`
    query Works {
      works: allMarkdownRemark(
        filter: { fields: { fileSourceInstanceName: { eq: "works" } } }
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
  const normalizedWorks = works.nodes.map((node) => {
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
      {normalizedWorks.map((work) => (
        <li key={work.id} className={styles.listItem}>
          <a href={work.url} target="_blank" rel="noreferrer noopener">
            {work.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Works;
