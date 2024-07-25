import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

import './Projects.css';

const completedProjects = [
  {
    name: 'Football Match Predictor',
    url: 'https://github.com/killianronan/Premier-League-ML-Analysis',
    description: 'Built a premier league match outcome prediction system using various machine learning models in python.',
    image: '/football2.png'
  },
  {
    name: 'Asclepsius Tools Chat Bot',
    url: 'https://github.com/steviejeebies/AscToolsChat',
    description: 'Developed a chatbot for doctors to advise patients on lifestyle changes which could improve their health.',
    image: '/chatbot2-removebg.png'
  },
  {
    name: 'Personal Portfolio Website',
    url: 'https://github.com/killianronan/personal-website',
    description: 'Built a personal porfolio website to showcase my web development skills using React with HTML, CSS & JS.',
    image: '/portfolio3.png'
  },
  {
    name: 'Elderly Information Portal',
    url: 'https://github.com/ProfKevinKelly/InformaTV',
    description: 'Led a team in creating an Information Portal for the elderly, serving as team lead and Scrum Master.',
    image: '/eip.png'
  },
  {
    name: 'Extraterrestrial Tracker App',
    url: 'https://github.com/killianronan/extraterrestrial-celestial-tracker',
    description: 'Built a web application designed to predict and notify users about upcoming celestial events.',
    image: '/ect2.png'
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
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {completedProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card block group-hover:shadow-2xl max-w border-2 border-white-500" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="project-bg">
                <img src={project.image} alt={project.name} className="project-image" />
              </div>
              <div className="project-info">
                <h2 className="project-name">{project.name}</h2>
                <p className="project-description">{project.description}</p>
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
