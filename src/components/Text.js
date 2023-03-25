import styled from "styled-components";
import { typography, system } from "styled-system";
import Box from "./Box";
import { props } from "@styled-system/should-forward-prop";

const Text = styled(Box).withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) =>
		!props.includes(prop) && defaultValidatorFn(prop),
})`
	${typography}
	${system({
		textDecoration: true,
		textTransform: true,
	})}
`;

export default Text;
