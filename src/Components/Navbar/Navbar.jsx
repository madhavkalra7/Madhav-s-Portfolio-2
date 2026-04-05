import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import karan_resume from "/karan_resume.pdf";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 2 }}
          transition={{ duration: 0.5 }}
          whileInView={{ x: 100, opacity: 1, scale: 2 }}
        >
          Madhav&apos;s Portfolio
        </motion.span>
        <div className="social">
          <a href="https://github.com/madhavkalra7" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/madhav-kalra" rel="noopener noreferrer" target="_blank">
            <img src="/LinkedIn.png" alt="" />
          </a>
          <a href="https://www.instagram.com/madhavkalra._" rel="noopener noreferrer" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href={karan_resume} download="Karan_Resume" rel="noopener noreferrer" target='_blank'>
            <img src="/pdf.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
