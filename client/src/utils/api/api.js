import axios from "axios";
export default {
    scrape: (url) => {
        return axios.get("/api/scrape/", {params: url});
    },
    getPosts: (sub) => {
        return axios.get("/api/postRoute/", {params: sub})
    },
    loadPost: (postId) => {
        console.log("EYYYYYYYYYYY");
        return axios.get("/api/postRoute/find/"+postId);
    },
    getComments: (postId) => {
        return axios.get("/api/comments/"+postId);
    },
    postComment: (comment) => {
        return axios.post("/api/comments/new", comment);
    }
}