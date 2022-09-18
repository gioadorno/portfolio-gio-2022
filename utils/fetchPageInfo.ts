import { PageInfo } from "../typings";
import { apiURL } from "./url";

export const fetchPageInfo = async() => {
    const res = await fetch(`${apiURL}api/getPageInfo`);

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    // console.log("fetching", pageInfo);

    return pageInfo;
}