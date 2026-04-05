import "./hero.scss";
import { motion } from "framer-motion";
import karan_resume from "/karan_resume.pdf";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: "-500%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MADHAV KALRA</motion.h2>
          <motion.h1 variants={textVariants}>
            Flutter & Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href='#Portfolio'>
              <motion.button variants={textVariants}>
                View My Work
              </motion.button>
            </a>
            <a href={karan_resume} download="Karan_Resume" rel="noopener noreferrer" target='_blank'>
              <motion.button variants={textVariants}>
                Download CV
              </motion.button>
            </a>
            <a href='#Contact'>
              <motion.button variants={textVariants}>
                Contact Me
              </motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        <img src="/flutter.png" alt="" height={100} /> <span>Flutter</span>
        <img src="/react.png" alt="" height={100} /> <span>React</span>
        <img src="js.png" alt="" height={100} /> <span >JavaScript</span>
        <img src="/c++.png" alt="" height={100} /> <span >C++</span>
        <img src="/github.png" alt="" height={100} /> <span>GitHub</span>
      </motion.div>
      <div className="imageContainer">
        {/* <img src="/hero2.png" alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
