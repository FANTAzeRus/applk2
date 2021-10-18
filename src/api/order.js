export default function(instance, getCookie) {
	return {
		orderInfo(id) {
			let token = "Bearer "  + getCookie("OCSESSID");
			
			return instance.get(`order/${id}`, {headers:{authorization: token}})
		},
		order(body) {
			let token = "Bearer "  + getCookie("OCSESSID");

			return instance.put('order/', body, {headers:{authorization: token}})
		}
	}
}