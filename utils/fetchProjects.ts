import { Project } from "../typings";

export const fetchProjects = async() => {
    const res = await fetch(`https://www.gio-portfolio.com/pi/getProjects`);

    const data = await res.json();
    const projects: Project[] = data.projects;

    // console.log("fetching", projects);

    return projects;
}