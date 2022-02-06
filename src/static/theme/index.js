import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#fff",
		},
		secondary: {
			main: "#7AC751",
		},
	},
	typography: {
		fontFamily: "Rubik",
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					maxWidth: "1170px",
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: "none",
					position: "relative",
				},
			},
		},
		MuiBadge: {
			styleOverrides: {
				badge: {
					color: "#fff",
					minWidth: "15px",
					height: "15px",
					fontSize: "0.5rem",
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: "none",
					maxWidth: "270px",
					transition: "all .3s",
					marginBottom: "45px",
					"&:hover": {
						border: "1px solid #7AC751",
					},
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					paddingBottom: 0,
				},
			},
		},
		MuiCardMedia: {
			styleOverrides: {
				root: {
					obJectFit: "contain",
					maxHeight: "280px",
					height: "100%",
				},
			},
		},
		MuiCardActions: {
			styleOverrides: {
				root: {
					paddingBottom: "20px",
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					fontWeight: "normal",
					fontSize: "18px",
					lineHeight: "130%",
					letterSpacing: "0.008em",
					color: "#757575",
				},
				input: {
					height: "15px",
					fontSize: "15px",
				},
			},
		},
	},
});
