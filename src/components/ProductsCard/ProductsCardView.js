import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
} from "@mui/material";

import { useStyles } from "./styles";

export const ProductsCardView = ({
	renderData,
	card,
}) => {
	const classes = useStyles();
	const { id, name, price, image } = card;
	return (
		<Card sx={{ flexGrow: 4 }}>
			<img src={image} alt="pokemon" />
			<CardContent>
				<span className={classes.name}>{name}</span>
				<Typography
					className={classes.price}
					color="secondary"
					gutterBottom
				>
					{price}$
				</Typography>
			</CardContent>
			<CardActions>
				<Button color="secondary" size="small">
					Learn More
				</Button>
				<Button color="secondary" size="small">
					Add to cart
				</Button>
			</CardActions>
		</Card>
	);
};
