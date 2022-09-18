import { Experience } from "../typings";
import { apiURL } from './url';

export const fetchExperiences = async() => {
    const res = await fetch(`${apiURL}api/getExperience`);

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    // console.log("fetching", experiences);

    return experiences;
}