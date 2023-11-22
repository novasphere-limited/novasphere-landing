import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia({ color }) {
  return (
    <div className="flex gap-2">
      <FontAwesomeIcon
        icon={faLinkedin}
        style={{ color: color, borderColor: color }}
        className="social-icon"
      />
      <FontAwesomeIcon
        icon={faFacebook}
        style={{ color: color, borderColor: color }}
        className="social-icon"
      />
      <FontAwesomeIcon
        icon={faInstagram}
        style={{ color: color, borderColor: color }}
        className="social-icon"
      />
      <FontAwesomeIcon
        icon={faTwitter}
        style={{ color: color, borderColor: color }}
        className="social-icon"
      />
    </div>
  );
}
