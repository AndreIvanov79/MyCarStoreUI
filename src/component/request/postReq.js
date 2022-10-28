import axios from "axios";

function PostReq(url,data) {
    return axios.post(url, data, {headers: {'X-Requested-With': 'XMLHttpRequest'}});
};

export default PostReq;