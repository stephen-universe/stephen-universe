// components/Projects/index.jsx
import { useState } from 'react';
import Titles from './titles';
import appData from '../../content/data/projects.json';

// Dynamically transform all projects from the JSON
const data = Object.keys(appData.projects).map((projectKey) => ({
  title: appData.projects[projectKey].meta.title,
  description: appData.projects[projectKey].meta.description,
  speed: appData.projects[projectKey].meta.speed,
  url: appData.projects[projectKey].meta.url,
}));

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="container">
      <Titles
        data={data}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </div>
  );
}
