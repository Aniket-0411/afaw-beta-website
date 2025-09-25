import { useState, useEffect } from 'react';
import { getProjects } from '../data/api/projects';

export const useProjects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjectsData(data);
      } catch (err) {
        setProjectsError(err);
      } finally {
        setProjectsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projectsData, projectsLoading, projectsError };
};
