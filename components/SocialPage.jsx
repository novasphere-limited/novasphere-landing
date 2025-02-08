import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function SocialMedia({ color }) {
  return (
    <div className="flex gap-2">
      <Link
        href="https://www.linkedin.com/company/106208273/admin/settings/manage-admins/"
        passHref
        legacyBehavior
      >
        <a target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: color, borderColor: color }}
            className="social-icon"
          />
        </a>
      </Link>
      <Link
        href="https://web.facebook.com/people/Novasphere/61572540403287/"
        passHref
        legacyBehavior
      >
        <a target="_blank">
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ color: color, borderColor: color }}
            className="social-icon"
          />
        </a>
      </Link>
      <Link
        href="https://www.instagram.com/novasphere.tech?fbclid=IwY2xjawIQafRleHRuA2FlbQIxMAABHXP2Cr7dH-rTW7ar_gR3Kmolbfs1i1UvVK7USw_bI-FKyU7A4WLEmbqGcg_aem_tkZGGvvaULpZ08eMEeZACA"
        passHref
        legacyBehavior
      >
        <a target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: color, borderColor: color }}
            className="social-icon"
          />
        </a>
      </Link>
      <Link href="https://x.com/Novasphere_tech" passHref legacyBehavior>
        <a target="_blank">
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: color, borderColor: color }}
            className="social-icon"
          />
        </a>
      </Link>
    </div>
  );
}
