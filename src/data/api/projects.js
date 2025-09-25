export const getProjects = async () => {
  const PRODUCTION_API_BASE = "https://afaw-beta-api.onrender.com/api";
  const LOCAL_API_BASE = "http://localhost:5000/api";

  try {
    const response = await fetch(`${PRODUCTION_API_BASE}/projects`);
    const projects = await response.json();
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
