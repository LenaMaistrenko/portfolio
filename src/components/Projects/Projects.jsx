import React from 'react';

const Projects = () => {
  const myProjects = [
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
    <section>
      <h2>My projects</h2>
      <div>
        {myProjects.map((project, index) => (
          <div key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.linkProject}>Visit the site</a>
            <a href={project.linkCode}>View sourse</a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
