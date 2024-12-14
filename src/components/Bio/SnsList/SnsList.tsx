import * as React from "react";
import {
  SiX,
  SiLinkedin,
  SiGithub,
  SiDevdotto,
  SiMedium,
  SiStackoverflow,
  SiZenn,
  SiQiita,
  SiInstagram,
  SiFacebook,
} from "react-icons/si";
import SnsLink from "./SnsLink";
import * as styles from "./SnsList.module.scss";

function SnsLinks() {
  return (
    <ul className={styles.snsList}>
      <li>
        <SnsLink
          href="https://x.com/whitphx"
          title="Twitter (en)"
          Icon={SiX}
          subEmoji="🇬🇧"
        />
      </li>
      <li>
        <SnsLink
          href="https://x.com/whitphx_ja"
          title="Twitter (ja)"
          Icon={SiX}
          subEmoji="🇯🇵"
        />
      </li>
      <li>
        <SnsLink
          href="https://www.linkedin.com/in/whitphx/"
          title="LinkedIn"
          Icon={SiLinkedin}
        />
      </li>
      <li>
        <SnsLink
          href="https://github.com/whitphx"
          title="GitHub"
          Icon={SiGithub}
        />
      </li>
      <li>
        <SnsLink
          href="https://dev.to/whitphx"
          title="DEV Community"
          Icon={SiDevdotto}
        />
      </li>
      <li>
        <SnsLink
          href="https://medium.com/@whitphx"
          title="Medium"
          Icon={SiMedium}
        />
      </li>
      <li>
        <SnsLink
          href="https://stackoverflow.com/users/13103190/whitphx"
          title="Stack Overflow"
          Icon={SiStackoverflow}
        />
      </li>
      <li>
        <SnsLink href="https://zenn.dev/whitphx" title="Zenn" Icon={SiZenn} />
      </li>
      <li>
        <SnsLink
          href="https://qiita.com/whitphx"
          title="Qiita"
          Icon={SiQiita}
        />
      </li>
      <li>
        <SnsLink
          href="https://www.instagram.com/whitphx/"
          title="Instagram"
          Icon={SiInstagram}
        />
      </li>
      <li>
        <SnsLink
          href="https://www.facebook.com/whitphx/"
          title="Facebook"
          Icon={SiFacebook}
        />
      </li>
    </ul>
  );
}

export default SnsLinks;
