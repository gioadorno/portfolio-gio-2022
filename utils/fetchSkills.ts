import { Skill } from "../typings";
import { apiURL } from "./url";

export const fetchSkills = async() => {
    const res = await fetch(`${apiURL}api/getSkills`);

    const data = await res.json();
    const skills: Skill[] = data.skills;

    // console.log("fetching", skills);

    return skills;
}