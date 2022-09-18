import { Skill } from "../typings";

export const fetchSkills = async() => {
    const res = await fetch(`https://www.gio-portfolio.com/api/getSkills`);

    const data = await res.json();
    const skills: Skill[] = data.skills;

    // console.log("fetching", skills);

    return skills;
}