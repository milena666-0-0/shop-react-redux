import api from "../api/config";

class AuthService {
	static instance = new AuthService();

	signUp(userData) {
		return api.post("/auth/signup", userData);
	}

	signIn({ email, password }) {
		return api.post("/auth/signIn", { email, password });
	}

	logOut() {
		localStorage.clear();
		window.location.reload();
	}
}

export default AuthService.instance;
