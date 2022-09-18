import { Social } from "../typings";
import { apiURL } from "./url";

export const fetchSocials = async() => {
    const res = await fetch(`${apiURL}api/getSocials`);

    const data = await res.json();
    const socials: Social[] = data.socials;

    // console.log("fetching", socials);

    return socials;
}