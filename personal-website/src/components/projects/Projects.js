import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FaPython, FaJsSquare, FaReact, FaAngular, FaNode, FaDatabase, FaMicrosoft } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiFlask, SiScikitlearn, SiTensorflow, SiMysql, SiVisualstudio, SiFirebase } from 'react-icons/si';

import './Projects.css';

const iconMapping = {
  'Python': <FaPython />,
  'JavaScript': <FaJsSquare />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Node.js': <FaNode />,
  'MongoDB': <DiMongodb />,
  'Machine Learning': <SiTensorflow />,
  'Scikit-Learn': <SiScikitlearn />,
  'Natural Language Processing': <FaDatabase />,
  'Flask': <SiFlask />,
  'HTML': <FaJsSquare />,
  'CSS': <FaJsSquare />,
  'Express': <FaNode />,
  'MySQL': <SiMysql />,
  'VS': <SiVisualstudio />,
  'Firebase': <SiFirebase />,
  'Bot Framework': <FaMicrosoft />,
};

const completedProjects = [
  {
    name: 'Football Match Predictor',
    url: 'https://github.com/killianronan/Premier-League-ML-Analysis',
    description: 'Built a premier league match outcome prediction system using various machine learning models in python.',
    technologies: ['Python', 'Machine Learning', 'Scikit-Learn'],
    image: `${process.env.PUBLIC_URL}/football.png`
  },
  {
    name: 'Asclepsius Tools Chat Bot',
    url: 'https://github.com/steviejeebies/AscToolsChat',
    description: 'Developed a chatbot for doctors to advise patients on lifestyle changes which could improve their health.',
    technologies: ['React', 'Bot Framework', 'Natural Language Processing'],
    image: `${process.env.PUBLIC_URL}/chatbot.png`
  },
  {
    name: 'Personal Portfolio Website',
    url: 'https://github.com/killianronan/personal-website',
    description: 'Built a personal porfolio website to showcase my web development skills using React with HTML, CSS & JS.',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
    image: `${process.env.PUBLIC_URL}/portfolio.png`
  },
  {
    name: 'Elderly Information Portal',
    url: 'https://github.com/ProfKevinKelly/InformaTV',
    description: 'Led a team in creating an Information Portal for the elderly, serving as team lead and Scrum Master.',
    technologies: ['React', 'Express', 'VS', 'MySQL'],
    image: `${process.env.PUBLIC_URL}/eip.png`
  },
  {
    name: 'Extraterrestrial Tracker App',
    url: 'https://github.com/killianronan/extraterrestrial-celestial-tracker',
    description: 'Built a web application designed to predict and notify users about upcoming celestial events.',
    technologies: ['React', 'Express', 'Firebase'],
    image: `${process.env.PUBLIC_URL}/ect.png`
  }
];

const Projects = () => {
  const [autoplay, setAutoplay] = useState(true);

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  return (
    <div className="projects-container">
      <div className="relative left-0 top-0 mx-auto w-full max-w-5xl px-4 pb-20">
        <h2 className="title">Projects</h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}  // Center the active slide
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={autoplay ? { delay: 5000 } : false}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {completedProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card block group-hover:shadow-2xl max-w border-2 border-white-500" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => window.open(project.url, '_blank')}>
              <div className="project-bg">
                <img src={project.image} alt={project.name} className="project-image" />
              </div>
              <div className="project-info">
                <h2 className="project-name">{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <ul className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="technology-badge">
                      {iconMapping[tech]} {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Projects;
