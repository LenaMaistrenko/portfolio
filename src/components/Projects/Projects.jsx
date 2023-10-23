import React from 'react';

const Projects = () => {
  const myProjects = [
    {
      title: 'WebStudio',
      description: 'Adaptive landing page',
      linkProject: 'https://lenamaistrenko.github.io/goit-markup-hw-08/',
      linkCode: 'https://github.com/LenaMaistrenko/goit-markup-hw-08',
      image: '../../img/webStudio.jpg',
    },
    {
      title: 'Ice Cream',
      description: 'Command project',
      linkProject: 'https://lenamaistrenko.github.io/IceCreamProject/',
      linkCode: 'https://github.com/LenaMaistrenko/IceCreamProject',
      image: '../../img/iceCream.jpg',
    },
  ];
  console.log(myProjects[0].image);
  return (
    <section>
      <h2>My projects</h2>
      <div>
        <img src="src/img/iceCream.jpg" alt="sdsd" />

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
