import React, { useEffect, useState } from 'react'

export interface Project {
  slug: string,
  title: string,
  shortText: string,
  longText: string,
  previewImage: string,
  images: string[],
  pageLink?: string
}

const useProjects = (projectSlugs: string[], deps?: any[]) => {
  const [ projects, setProjects ] = useState<Project[]>([] as Project[]);

  useEffect(() => {
    const loadProjects = async () => {
      const projectObjects = await Promise.all(
        projectSlugs.map((projectSlug) =>
          import(`../assets/projects/${projectSlug}/${projectSlug}.json`)
        )
      );
      setProjects([...projectObjects]);
    };
    loadProjects();
  }, [])

  console.log(projects)
  return projects;
}

export default useProjects;