/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import SnsLink from "./SnsLink";
import * as styles from "./Bio.module.scss";

function Bio() {
  const data: Queries.BioQuery = useStaticQuery(graphql`
    query Bio {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site?.siteMetadata?.author;
  const social = data.site?.siteMetadata?.social;

  return (
    <div className={styles.bio}>
      <StaticImage
        className={styles.bioAvatar}
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <div>
        <h3>Yuichiro Tachibana (Tsuchiya)</h3>
        <div>
          <ul className={styles.snsList}>
            <li>
              <SnsLink
                href="https://twitter.com/whitphx"
                title="Twitter (en)"
                Icon={FaTwitter}
                subEmoji="🇬🇧"
              />
            </li>
            <li>
              <SnsLink
                href="https://twitter.com/whitphx_ja"
                title="Twitter (ja)"
                Icon={FaTwitter}
                subEmoji="🇯🇵"
              />
            </li>
            <li>
              <SnsLink
                href="https://www.linkedin.com/in/whitphx/"
                title="LinkedIn"
                Icon={FaLinkedin}
              />
            </li>
            <li>
              <SnsLink
                href="https://github.com/whitphx"
                title="GitHub"
                Icon={FaGithub}
              />
            </li>
          </ul>
        </div>
      </div>
      {/* {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow him on Twitter
          </a>
        </p>
      )} */}
    </div>
  );
}

export default Bio;
