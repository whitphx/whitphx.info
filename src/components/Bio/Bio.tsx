/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Works from "./Works";
import Publications from "./Publications";
import SnsList from "./SnsList";
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
        <section>
          <h2 className={styles.heading}>SNS</h2>
          <SnsList />
        </section>
        <section>
          <h2 className={styles.heading}>Works</h2>
          <Works />
        </section>
        <section>
          <h2 className={styles.heading}>Publications</h2>
          <Publications />
        </section>
      </div>
    </div>
  );
}

export default Bio;
