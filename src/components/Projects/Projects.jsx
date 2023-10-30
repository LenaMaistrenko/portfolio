import React from 'react';
import css from './Projects.module.css';

const Projects = () => {
  const myProjects = [
    {
      title: 'SlimMom',
      description:
        'Team project. SlimMom is a calorie app that includes a food diary and a nutrition database. Technology stack: React, Redux Toolkit, HTML, SASS, JavaScript, Adaptive/Responsive design, REST API, GIT.',
      linkProject: 'https://lenamaistrenko.github.io/health-app-project/',
      linkCode: 'https://github.com/LenaMaistrenko/health-app-project',
      image: require('img/slimMom.jpg'),
    },
    {
      title: 'WebStudio',
      description: 'Adaptive landing page',
      linkProject: 'https://lenamaistrenko.github.io/goit-markup-hw-08/',
      linkCode: 'https://github.com/LenaMaistrenko/goit-markup-hw-08',
      image: require('img/webStudio.jpg'),
    },
    {
      title: 'Ice Cream',
      description: 'Command project',
      linkProject: 'https://lenamaistrenko.github.io/IceCreamProject/',
      linkCode: 'https://github.com/LenaMaistrenko/IceCreamProject',
      image: require('img/iceCream.jpg'),
    },
    {
      title: 'Filmoteka',
      description: 'Command project',
      linkProject: 'https://lenamaistrenko.github.io/Filmoteka/',
      linkCode: 'https://github.com/LenaMaistrenko/Filmoteka',
      image: require('img/filmoteka.jpg'),
    },
  ];

  return (
    <section className={css.projects_container}>
      <h2>My projects</h2>
      <div className={css.projects_cards}>
        {myProjects.map((project, index) => (
          <div className={css.projects_card} key={index}>
            <a href={project.linkProject} target="new_blank">
              {' '}
              <img src={project.image} alt={project.title} width={600} />
            </a>

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.linkProject} target="new_blank">
              Visit the site
            </a>
            <a href={project.linkCode} target="new_blank">
              View sourse
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
