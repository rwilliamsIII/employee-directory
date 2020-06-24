import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/users";

export default {
    search: function() {
        return axios.get(URL);
    }
};