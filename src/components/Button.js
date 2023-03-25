import styled from "styled-components";
import { variant, space, typography, flexbox, color, layout, system } from "styled-system";
import { props } from "@styled-system/should-forward-prop";

const Button = styled("button").withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) =>
		!props.includes(prop) && defaultValidatorFn(prop),
})`
	padding: 16px 32px;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;

	${variant({
		variants: {
			primary: {
				color: "white",
				bg: "green",
				transition: "all 0.5s ease-in-out",
				"&:hover": {
					color: "blue",
					bg: "transparent",
					border: (theme) => `1px solid ${theme.colors.blue}`,
				},
			},
			light: {
				color: "blue",
				bg: "white",
			},
			outline: {
				color: "blue",
				bg: "transparent",
				transition: "all 0.5s ease-in-out",
				border: (theme) => `1px solid ${theme.colors.blue}`,
				"&:hover": {
					color: "white",
					bg: "blue",
					borderColor: "transparent",
				},
			},
		},
	})}

	${space}
	${typography}
	${flexbox}
	${color}
	${layout}
	${system({
		textDecoration: true,
		textTransform: true,
	})}
`;

export default Button;