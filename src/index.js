import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { SignUpFormContainer } from "./pages/SignUpPage/containers/SignUpFormContainer";
import { LogInFormContainer } from "./pages/LogInPage/containers/LogInFormContainer";
import { ProductsContainer } from "./pages/ProductsPage/containers/ProductsContainer";
import { PokemonsDetailsContainer } from "./pages/PokemonsDetailsPage/containers/PokemonsDetailsContainer";
import { CartContainer } from "./pages/Cart/containers/CartContainer";
import { MainLayout } from "./components/MainLayout/index";
import { Router } from "./routes/Router";
import { theme } from "./static/theme/index";

import "./styles/normalize.css";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
						<MainLayout>
							<Router>
								<ProductsContainer />
								<SignUpFormContainer />
								<LogInFormContainer />
								<PokemonsDetailsContainer />
								<CartContainer />
							</Router>
						</MainLayout>
					</ThemeProvider>
				</PersistGate>
			</Provider>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById("root")
);
