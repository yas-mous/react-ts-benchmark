import React, { useState } from 'react';
import "./names-generator.css"



const inspirations = ["Innovative", "Smart", "Future", "NextGen", "Eco", "Global", "Digital", "Agile", "Bright", "Creative"];
const sectors = ["Health", "Finance", "Education", "Energy", "Food", "Travel", "Tech", "Retail", "Entertainment", "Sustainability"];
const technologies = ["AI", "Blockchain", "IoT", "Cloud", "VR", "AR", "Big Data", "Robotics", "5G", "Cybersecurity"];

interface Project {
  id: number;
  name: string;
}

const NamesGenerator: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const [id, setId] = useState(1);

  const _random = (max: number) => Math.round(Math.random() * 1000) % max;

  const generateProjects = (count = 1000): Project[] => {
    const newProjects: Project[] = [];
    for (let i = 0; i < count; i++) {
      newProjects.push({
        id: id + i,
        name: `${inspirations[_random(inspirations.length)]} ${sectors[_random(sectors.length)]} ${technologies[_random(technologies.length)]}`
      });
    }
    setId(prevId => prevId + count);
    return newProjects;
  };

  const run = () => {
    setProjects(generateProjects());
  };

  const add = () => {
    setProjects(prev => [...prev, ...generateProjects(1000)]);
  };

  const update = () => {
    setProjects(prev => 
      prev.map(project => 
        project.id % 10 === 0 
          ? { ...project, name: `${project.name} 2.0` } 
          : project
      )
    );
  };

  const runLots = () => {
    setProjects(generateProjects(10000));
    setSelected(undefined);
  };

  const clear = () => {
    setProjects([]);
    setSelected(undefined);
  };

  const swapRows = () => {
    if (projects.length > 998) {
      const newProjects = [...projects];
      [newProjects[1], newProjects[998]] = [newProjects[998], newProjects[1]];
      setProjects(newProjects);
    }
  };

  const select = (project: Project, e: React.MouseEvent) => {
    e.preventDefault();
    setSelected(project.id);
  };

  const deleteProject = (project: Project, e: React.MouseEvent) => {
    e.preventDefault();
    setProjects(prev => prev.filter(p => p.id !== project.id));
  };

  return (
    <div className="container">
      <h1>Générateur de Noms de Projets</h1>
      <div className="buttons">
        <button onClick={run}>Générer 1000 projets</button>
        <button onClick={add}>Ajouter 1000 projets</button>
        <button onClick={update}>Mettre à jour</button>
        <button onClick={runLots}>Générer 10 000 projets</button>
        <button onClick={clear}>Tout supprimer</button>
        <button onClick={swapRows}>Échanger des lignes</button>
      </div>
      <table>
        <tbody>
          {projects.map(project => (
            <tr 
              key={project.id} 
              className={project.id === selected ? 'selected' : ''}
            >
              <td>{project.id}</td>
              <td onClick={(e) => select(project, e)}>{project.name}</td>
              <td>
                <button onClick={(e) => deleteProject(project, e)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NamesGenerator;
