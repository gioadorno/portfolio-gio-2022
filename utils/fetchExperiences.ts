import { Experience } from "../typings";

export const fetchExperiences = async() => {
    const res = await fetch(`https://portfolio-gio.netlify.app/api/getExperience`);

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    // console.log("fetching", experiences);

    return experiences;
}