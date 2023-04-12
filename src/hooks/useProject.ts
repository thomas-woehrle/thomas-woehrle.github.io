import { useEffect, useState } from "react";
import { Project } from "./useProjects";

const useProject = (projectSlug: string) => {
  const [ project, setProject ] = useState<Project | null>(null); 

  useEffect(() => {
    import(`../assets/projects/${projectSlug}/${projectSlug}.json`)
      .then((projectObject => setProject(projectObject)));
  }, []);

  return project;
}

export default useProject;