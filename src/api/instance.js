import axios from 'axios'

const instance = axios.create({
	baseURL: "https://api.apps4business.ru/",
	withCredentilds: true,
	headers: {
		accept: "application/json",
		"Access-Control-Allow-Origin": "*"
	}
})

export default instance