import api from "../api/config";

class AuthService {
	static instance = new AuthService();

	signUp(userData) {
		return api.post("/auth/signup", userData);
	};
	
	signIn({email, password}) {

		const authData = {
			email,
			password
		};

		return api.post("/auth/signIn", authData);
	};
};

export default AuthService.instance;
