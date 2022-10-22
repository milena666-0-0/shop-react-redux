class AuthService {
	static instance = new AuthService();

	logOut() {
		localStorage.clear();
		window.location.reload();
	}
}

export default AuthService.instance;
