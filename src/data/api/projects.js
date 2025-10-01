import CONFIG from "../../config";
const API_BASE = CONFIG.apiBaseUrl

export const getProjects = async () => {
  try {
    const response = await fetch(`${API_BASE}/api/projects`);
    const projects = await response.json();
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
