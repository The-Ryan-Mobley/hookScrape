import axios from "axios";
export default {
    scrape: (url) => {
        return axios.get("/api/scrape/", {params: url});
    },
    getPosts: (sub) => {
        console.log("YOYOYO");
        return axios.get("/api/postRoute/", {params: sub})
    },
    loadPost: (postId) => {
        return axios.get("api/postRoute/"+postId);
    },
    getComments: (postId) => {
        return axios.get("/api/comments/"+postId);
    },
    postComment: (comment) => {
        return axios.post("/api/comments/new", comment);
    }
}