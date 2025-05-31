// components/Projects/index.jsx
import { useState } from 'react';
import Titles from './titles';
import appData from '../../content/data/projects.json';

// Dynamically transform all projects from the JSON
const data = Object.keys(appData).map((projectKey) => ({
  title: appData[projectKey].meta.title,
  description: appData[projectKey].meta.description,
  speed: appData[projectKey].meta.speed,
  url: appData[projectKey].meta.url,
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
