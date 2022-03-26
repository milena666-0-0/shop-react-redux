import api from "../api/config";

class OrderService {
	static instance = new OrderService();

	makeOrder(orderData) {
		return api.post(`/order`, orderData);
	};

	getOrders() {
		return api.get(`/order`);
	};
};

export default OrderService.instance;
