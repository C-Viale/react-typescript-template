import axios from 'axios';

const Api = axios.create({
	baseURL: "",
	headers: {}
});

export default Api;