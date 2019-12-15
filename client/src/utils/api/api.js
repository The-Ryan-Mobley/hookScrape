import axios from "axios";
export default {
    scrape: (url) => {
        return axios.get("/api/scrape", {params: url});
    }
}