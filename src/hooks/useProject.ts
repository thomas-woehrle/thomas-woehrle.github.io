import { useEffect, useState } from "react";
import { Project } from "./useProjects";
import { useNavigate } from "react-router-dom";

const useProject = (projectSlug: string) => {
  const navigate = useNavigate();
  const [ project, setProject ] = useState<Project | null>(null); 

  useEffect(() => {
    import(`../assets/projects/${projectSlug}/${projectSlug}.json`)
      .then((projectObject => setProject(projectObject)))
      .catch((err) => navigate("site-does-not-exist"));
  }, []);

  return project;
}

export default useProject;