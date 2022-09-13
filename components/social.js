import styles from "styles/social.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Social({ iconSize = "initial" }) {
  return (
    <ul className={styles.list} style={{ "--icon-size": iconSize }}>
      <li>
        <a href="mailto:">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
    </ul>
  );
}
