import { URLData } from "../pageUrls";
const getLayoutData = (url) => {
    const data = Object.values(URLData).find((content) => content.url === url);
    return data?.layout;
};

export default getLayoutData;
