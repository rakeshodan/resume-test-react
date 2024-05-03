import { Description } from './Description';

export const Projects = ({ projects }) => {
  return (
    <section
      className='proyects-experience section'
      id='proyects'
    >
      <h2 className='section-title'>Projects</h2>
      <div className='experience__container bd-grid'>
        {projects.map((project, index) => (
          <Project
            key={`${project.company} ${index}`}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

const Project = ({ name,  tech, period, description }) => {
  return (
    <div className='experience__content'>
      <div className='experience__time'>
        <span className='experience__rounder'></span>
        <span className='experience__line'></span>
      </div>
      <div className='experience__data bd-grid'>
        <h3 className='experience__title'>{name}</h3>
        <span className='experience__proyect'>{period}</span>
        <span className='experience__proyect'>{tech}</span>
        {description.map((desc, i) => (
          <Description
            key={i}
            desc={desc}
          />
        ))}
      </div>
    </div>
  );
};
