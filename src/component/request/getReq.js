
import axios from "axios";
import {element} from "prop-types";

function GetReq(url) {
        return axios.get(url, {headers: {'X-Requested-With': 'XMLHttpRequest'}});
};

export default GetReq;
