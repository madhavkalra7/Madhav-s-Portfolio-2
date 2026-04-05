import { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};


const Services = () => {
  const ref = useRef();

  // const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I am a <motion.b whileHover={{ color: "orange" }}>Flutter</motion.b> and{" "} <motion.b whileHover={{ color: "orange" }}>Web</motion.b> Developer
          <br /> Currently a <b>Final Year Student</b> pursuing <br />Bachelor of Technology (Majors in Computer Science)<br /> from Inderprastha Engineering College, Ghaziabad.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Fluidity</motion.b> in Designs,
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Functionality</motion.b> in Codes.
          </h1>

          <motion.button whileHover={{ fontWeight: "bold" }}>My Skillset👇🏻</motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend</h2>
          {/* <p> */}
          <motion.ul>
            <motion.li><img src="/flutter.png" alt="" height={30} /> <span>Flutter</span></motion.li>
            <motion.li><img src="/react.png" alt="" height={30} /> <span>React</span></motion.li>
            <motion.li><img src="js.png" alt="" height={30} /> <span >JavaScript</span></motion.li>
            <motion.li><img src="html.png" alt="" height={30} /> <span >HTML</span></motion.li>
            <motion.li><img src="css.png" alt="" height={30} /> <span >CSS</span></motion.li>
          </motion.ul>
          {/* </p> */}
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Programming</h2>
          {/* <p> */}
          <motion.ul >
            <motion.li><img src="/c++.png" alt="" height={30} /> <span>C++</span></motion.li>
            <motion.li><img src="/js.png" alt="" height={30} /> <span>JavaScript</span></motion.li>
            <motion.li><img src="dart.png" alt="" height={30} /> <span >Dart</span></motion.li>
            {/* <motion.li><img src="python.png" alt="" height={30} /> <span >Python</span></motion.li>
            <motion.li><img src="java.png" alt="" height={30} /> <span >Java</span></motion.li> */}
          </motion.ul>
          {/* </p> */}
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Databases</h2>
          {/* <p> */}
          <motion.ul >
            <motion.li><img src="/aws.png" alt="" height={30} /> <span>AWS</span></motion.li>
            <motion.li><img src="/firebase.png" alt="" height={30} /> <span>Firebase</span></motion.li>
            <motion.li><img src="mongo.png" alt="" height={30} /> <span >MongoDB</span></motion.li>
            <motion.li><img src="sql.png" alt="" height={30} /> <span >SQL</span></motion.li>
          </motion.ul>
          {/* </p> */}
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend</h2>
          {/* <p> */}
          <motion.ul >
            <motion.li><img src="/django.png" alt="" height={20} /> <span>Django</span></motion.li>
            <motion.li><img src="/node.png" alt="" height={20} /> <span>NodeJs</span></motion.li>
            {/* <motion.li><img src="dart.png" alt="" height={20} /> <span >Dart</span></motion.li> */}
          </motion.ul>
          {/* </p> */}
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
