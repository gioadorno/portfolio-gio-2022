import { Project } from "../typings";
import { apiURL } from "./url";

export const fetchProjects = async() => {
    const res = await fetch(`${apiURL}api/getProjects`);

    const data = await res.json();
    const projects: Project[] = data.projects;

    // console.log("fetching", projects);

    return projects;
}