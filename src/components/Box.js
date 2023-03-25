import styled from "styled-components";
import { space, color, grid, flexbox, position, layout, system } from "styled-system";
import { props } from "@styled-system/should-forward-prop";

const Box = styled("div").withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) =>
		!props.includes(prop) && defaultValidatorFn(prop),
})(
	space,
	color,
	grid,
	flexbox,
	position,
	layout,
	system({
		gap: {
			property: "gap",
			scale: "space",
		},
	})
);

export default Box;
