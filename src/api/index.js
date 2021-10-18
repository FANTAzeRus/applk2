import instance from './instance'
import authModule from './auth'
import orderModule from './order'
import payModule from './pay'
import sessionModule from './session'

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export default {
	auth: authModule(instance, getCookie),
	order: orderModule(instance, getCookie),
	pay: payModule(instance, getCookie),
	session: sessionModule(instance, getCookie)
}