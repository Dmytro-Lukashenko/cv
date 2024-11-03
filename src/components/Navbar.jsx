import { FaLinkedin, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { SOCIAL_LINKS } from "../constants";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pt-3">
      <div className="flex">
        <img src={logo} alt="Logo" />
      </div>
      <div className="m-7 flex items-center justify-center gap-4 text-2xl">
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href={SOCIAL_LINKS.telegram}
          target="_blank"
          rel="noopener noreferrer"
          title="Telegram"
        >
          <FaTelegramPlane />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
