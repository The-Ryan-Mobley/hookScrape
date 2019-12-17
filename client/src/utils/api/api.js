import axios from "axios";
export default {
    scrape: (url) => {
        return axios.get("/api/scrape/", {params: url});
    },
    getPosts: (sub) => {
        console.log("YOYOYO");
        return axios.get("/api/postRoute/", {params: sub})
    }
}