import { useEffect, useState } from 'react'

export interface Project {
  slug: string,
  title: string,
  description: string,
  functionalities?: string[],
  specialInfo?: string,
  githubRepo?: string,
  previewImage?: string,
  images?: string[],
  pageLink?: string,
  objectFitIsContain?: boolean
}

const useProjects = (projectSlugs: string[], deps?: any[]) => {
  const [ projects, setProjects ] = useState<Project[]>([] as Project[]);

  useEffect(() => {
    const loadProjects = async () => {
      let projectObjects = await Promise.all(
        projectSlugs.map((projectSlug) =>
          import(`../assets/projects/${projectSlug}/${projectSlug}.json`)
          .catch((err) => console.log("error in useProjects. You probably supply an invalid projectSlug"))
        )
      );
      projectObjects = projectObjects.filter(projectObject => projectObject !== undefined );
      setProjects([...projectObjects]);
    };
    loadProjects();
  }, [])

  return projects;
}

export default useProjects;