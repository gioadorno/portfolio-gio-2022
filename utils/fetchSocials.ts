import { Social } from "../typings";

export const fetchSocials = async() => {
    const res = await fetch(`https://portfolio-gio.netlify.app/api/getSocials`);

    const data = await res.json();
    const socials: Social[] = data.socials;

    // console.log("fetching", socials);

    return socials;
}