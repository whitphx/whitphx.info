/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import SnsLink from "./SnsLink";
import Works from "./Works";
import * as styles from "./Bio.module.scss";

function Bio() {
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
        <h3 className={styles.authorName}>Yuichiro Tachibana (Tsuchiya)</h3>
        <div className={styles.bioBody}>
          Software Developer/Indie Dev/OSS Lover
        </div>
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
        <Works />
      </div>
    </div>
  );
}

export default Bio;
