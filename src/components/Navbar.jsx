import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <h2 className="font-bold text-5xl">
        <span className="text-blue-700">D</span>
        <span className="text-yellow-500">L</span> 
        </h2>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaTwitterSquare />
        <FaInstagram />
    </div>
  </nav>;
};

export default Navbar;
