/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  BiLogoTwitter,
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoDevTo,
  BiLogoMedium,
} from "react-icons/bi";
import SnsLink from "./SnsLink";
import Works from "./Works";
import Publications from "./Publications";
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
          Software Developer/Indie Dev/OSS Enthusiast
        </div>
        <ul className={styles.snsList}>
          <li>
            <SnsLink
              href="https://twitter.com/whitphx"
              title="Twitter (en)"
              Icon={BiLogoTwitter}
              subEmoji="🇬🇧"
            />
          </li>
          <li>
            <SnsLink
              href="https://twitter.com/whitphx_ja"
              title="Twitter (ja)"
              Icon={BiLogoTwitter}
              subEmoji="🇯🇵"
            />
          </li>
          <li>
            <SnsLink
              href="https://www.linkedin.com/in/whitphx/"
              title="LinkedIn"
              Icon={BiLogoLinkedinSquare}
            />
          </li>
          <li>
            <SnsLink
              href="https://github.com/whitphx"
              title="GitHub"
              Icon={BiLogoGithub}
            />
          </li>
          <li>
            <SnsLink
              href="https://dev.to/whitphx"
              title="DEV Community"
              Icon={BiLogoDevTo}
            />
          </li>
          <li>
            <SnsLink
              href="https://medium.com/@whitphx"
              title="Medium"
              Icon={BiLogoMedium}
            />
          </li>
        </ul>
        <Works />
        <Publications />
      </div>
    </div>
  );
}

export default Bio;
