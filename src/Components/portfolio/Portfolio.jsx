import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const websiteProjects = [
  {
    id: 1,
    title: "Genetix - AI Website Builder",
    img: "/Genetix%20-%20AI%20Website%20Builder.png",
    desc: "Build stunning websites with AI in seconds! Just describe what you want, and Genetix will create it for you. There are Many tech stacks in which you want to build you can.",
    ctaLabel: "Visit Website",
    link: "https://genetix-ai-website-builder.vercel.app",
  },
  {
    id: 2,
    title: "Note Genie",
    img: "/Note%20Genie.png",
    desc: "Turn your thoughts into smart notes with AI! Just input your content, and NoteGenie will organize, summarize, and enhance it instantly. Study smarter, not harder.",
    ctaLabel: "Visit Website",
    link: "https://note-genie-nu.vercel.app",
  },
  {
    id: 3,
    title: "Marshmello",
    img: "/Marshmello.png",
    desc: "Experience music like never before! Marshmello lets you explore, visualize, and interact with audio using powerful AI features and a stunning UI. Feel every beat.",
    ctaLabel: "Visit Website",
    link: "https://marshmello-delta.vercel.app",
  },
  {
    id: 4,
    title: "Evidence AI",
    img: "/Evidence%20AI.png",
    desc: "Analyze evidence with intelligence! Just upload your data, and Evidence AI will extract insights, detect patterns, and assist in smart decision-making within seconds.",
    ctaLabel: "Visit Website",
    link: "https://evidence-ai.vercel.app",
  },
];

const premiumGames = [
  {
    id: 5,
    title: "Single Pointer 3D",
    img: "/Single%20Pointer%203D.jpeg",
    desc: "Control the game with a single pointer in a 3D world! Experience smooth mechanics, immersive gameplay, and precision control like never before.",
    ctaLabel: "Download APK",
    link: "https://drive.google.com/file/d/1TozU5knBaRalnLjyVz1I8pSrKK5gN-TP/view?usp=sharing",
    imageType: "portrait",
  },
  {
    id: 6,
    title: "Raja Rani Chor Sipahi",
    img: "/Raja%20Rani%20Chor%20Sipahi.jpeg",
    desc: "Relive the classic strategy game digitally! Play, bluff, and outsmart your friends in this fun and interactive version of Raja Rani Chor Sipahi.",
    ctaLabel: "Download APK",
    link: "https://drive.google.com/file/d/16X3eUP7bcXvtllsOvHrqV9DmiyEx-S4c/view?usp=sharing",
    imageType: "portrait",
  },
  {
    id: 7,
    title: "2 Player Games",
    img: "/2%20Player%20Games.jpeg",
    desc: "Enjoy fun anytime, anywhere! Play multiple exciting 2-player games offline with your friends on a single device - no internet needed, just pure fun.",
    ctaLabel: "Download APK",
    link: "https://drive.google.com/file/d/10tPOTFeC9GZMe5r5ZkrNfZWUARJvRbn2/view?usp=sharing",
    imageType: "portrait",
  },
];

const headingVariants = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

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
          <div
            className={`imageContainer ${item.imageType === "portrait" ? "portrait" : ""}`.trim()}
            ref={ref}
          >
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>{item.ctaLabel}</button>
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
      {websiteProjects.map((item) => (
        <Single item={item} key={item.id} />
      ))}
      <section className="categoryBreak">
        <div className="container">
          <div className="wrapper">
            <motion.div
              className="textContainer categoryHeading"
              variants={headingVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.4 }}
            >
              <h2>Some Premium Games</h2>
              <p>
                Explore premium Android titles built for immersive gameplay,
                strategy, and offline fun.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {premiumGames.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
