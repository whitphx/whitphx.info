import * as React from "react";
import * as styles from "./SnsLink.module.scss";

interface SnsLinkProps {
  Icon: React.ComponentType<React.SVGAttributes<SVGElement>>;
  subEmoji?: string;
  href: string;
  title: string;
  anchorClassName?: string;
  iconClassName?: string;
}
function SnsLink(props: SnsLinkProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      title={props.title}
      className={styles.snsIconContainer}
    >
      <span hidden>{props.title}</span>
      <props.Icon className={styles.snsIcon} aria-hidden focusable={false} />
      {props.subEmoji && (
        <span className={styles.snsSubIcon}>{props.subEmoji}</span>
      )}
    </a>
  );
}

export default SnsLink;
