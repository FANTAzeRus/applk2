export default function(instance, getCookie) {
	return {
		pay(orderId, paymentOptionId) {
			let token = "Bearer "  + getCookie("OCSESSID");
			
			return instance.get(`pay/${orderId}/${paymentOptionId}`, {headers:{authorization: token}})
		}
	}
}