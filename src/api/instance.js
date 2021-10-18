import axios from 'axios'

const instance = axios.create({
	baseURL: "localhost",
	withCredentilds: true,
	headers: {
		accept: "application/json",
	}
})

export default instance