import React from "react";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";

export default function HomepageFeatures() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.features}>
      <p className={styles.fontSize}>{siteConfig.tagline}</p>
      <p className={styles.featureSvg}>
        <img src="/img/robot.gif" />
      </p>

      <Link className={styles.access_button} to="/docs/intro">
        Go !
      </Link>
    </div>
  );
}
