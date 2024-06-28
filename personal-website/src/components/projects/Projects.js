import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './Projects.css';

const completedProjects = [
  {
    name: 'Football Match Predictor',
    url: 'https://github.com/killianronan/Premier-League-ML-Analysis',
    description: 'Created a premier league match outcome prediction system using various machine learning models in python.',
    image: '/football.jpg'
  },
  {
    name: 'Asclepsius Tools Chat Bot',
    url: 'https://github.com/steviejeebies/AscToolsChat',
    description: 'Helped develop a Microsoft QnA chatbot for doctors to advise patients on lifestyle changes which could improve their health.',
    image: '/chatbot.jpg'
  },
  {
    name: 'Personal Portfolio Website',
    url: 'https://github.com/killianronan/personal-website',
    description: 'Built this website using React with HTML, CSS & JS.',
    image: '/portfolio.png'
  },
  {
    name: 'Elderly Information Portal',
    url: 'https://github.com/ProfKevinKelly/InformaTV',
    description: 'Led a team in creating an Information Portal for the elderly, serving as team lead and Scrum Master.',
    image: '/portal.jpg'
  },
  {
    name: 'Extraterrestrial Tracker App',
    url: 'https://github.com/killianronan/extraterrestrial-celestial-tracker',
    description: 'Built a web application designed to predict and notify users about upcoming celestial events.',
    image: '/ect.jpg'
  }
];

const Projects = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 100]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 300]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.05], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.05], [0.05, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.05], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.05], [-300, 0]), springConfig);

  const projectCard = (project, translate) => (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group relative h-96 w-96 shrink-0"
      key={project.name}
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block group-hover:shadow-2xl">
        <div className="project-bg border-2 border-gray-500" style={{ backgroundImage: `url(${project.image})` }}></div>
      </a>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover:opacity-80"></div>
      <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100">{project.name}</h2>
    </motion.div>
  );

  return (
    <div
      id="projects"
      ref={ref}
      className="relative flex flex-col overflow-hidden pb-10 pt-10 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="relative left-0 top-0 mx-auto w-full max-w-5xl px-4 py-20">
        <strong className="text-2xl font-bold text-white md:text-7xl" style={{ color: '#00FFFF' }}>Projects</strong>
      </div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity
        }}
      >
        <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
          {completedProjects.slice(0, 3).map((project) => projectCard(project, translateX))}
        </motion.div>
        <motion.div className="mb-20 flex flex-row space-x-20">
          {completedProjects.slice(3, 6).map((project) => projectCard(project, translateXReverse))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
