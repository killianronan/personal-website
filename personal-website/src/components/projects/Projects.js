import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FaAngular, FaNode, FaDatabase, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiScikitlearn, SiMysql, SiVisualstudio, SiFirebase } from 'react-icons/si';
import { TbMessageChatbot } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";

import './Projects.css';

const iconMapping = {
  'Python': <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48"><path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path></svg>,
  'JavaScript': <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48"><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="none" stroke="#000001" stroke-miterlimit="10" stroke-width="3.3" d="M23.783,22.352v9.819 c0,3.764-4.38,4.022-6.283,0.802"></path><path fill="none" stroke="#000001" stroke-miterlimit="10" stroke-width="3.3" d="M34.69,25.343 c-1.739-2.727-5.674-2.345-5.84,0.558c-0.214,3.757,6.768,2.938,6.247,7.107c-0.365,2.92-4.874,3.858-7.193-0.065"></path></svg>,
  'React': <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48"><path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle></svg>,
'Angular': <FaAngular style={{color:'red'}} />,
  'Node.js': <FaNode style={{color: '#68A063'}} />,
  'Machine Learning': <LuBrainCircuit style={{color: '#FF6F00'}} />,
  'Scikit-Learn': <SiScikitlearn style={{color: '#F7931E'}} />,
  'Natural Language Processing': <FaDatabase style={{color:'#FFB300'}} />,
  'HTML': <FaHtml5 style={{color:'#E34F26'}} />,
  'CSS': <FaCss3Alt style={{color:'#1572B6'}} />,
  'Express': <FaNode style={{color: '#68A063'}} />,
  'MySQL': <SiMysql style={{color: '#4479A1'}} />,
  'VS': <SiVisualstudio style={{color: '#5C2D91'}} />,
  'Firebase': <SiFirebase style={{color: '#FFCA28'}} />,
  'Bot Framework': <TbMessageChatbot style={{color: '#F25022'}} />,
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
      <div className="relative left-0 top-0 mx-auto w-full max-w-5xl px-4">
        <h2 className="title" style={{marginTop: '50px'}}>Projects</h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true} 
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
        touchEventsTarget="container" 
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
