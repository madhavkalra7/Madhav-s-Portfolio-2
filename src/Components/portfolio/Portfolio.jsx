import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Brain Brawl",
    img: "brain.PNG",
    desc: "1v1 Educational Contesting Platform, to conduct knockout educational quizzes within and between universities and other educational institutions.",
    stack: ["Flutter", "Firebase", "Django", "SQL"],
    demo: "https://brainbrawl-0001.web.app/"
  },
  {
    id: 2,
    title: "UniTog",
    img: "tog.jpeg",
    desc: "Mobile Application, built using Flutter for Android and iOS. It is a platform for the Teens of God to connect with each other and share their experiences. It also has a chatbot which can answer the queries of the visitors of the application. Experience with building APIs using NodeJs and MongoDB.",
    stack: ["Flutter", "Firebase", "NodeJs", "MongoDB"],
    demo: "https://github.com/karan-17/InnHackers"
  },
  {
    id: 3,
    title: "Guess The Number",
    img: "guess.PNG",
    desc: "A simple game built using HTML, CSS and JavaScript. The game is to guess the number between 1 and 20 until the score reaches 0. The score is decreased by 1 if the guess is wrong. The highscore is maintained and displayed.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://game-guess-num.netlify.app"
  },
  {
    id: 4,
    title: "Marcuss Bakery UI",
    img: "marcus.PNG",
    desc: "A simple UI for a bakery website built using HTML and CSS. The website is responsive and can be viewed on any device. The website is hosted on Netlify.",
    stack: ["HTML", "CSS"],
    demo: "https://marcuss-bakery-ui.netlify.app"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demo}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
