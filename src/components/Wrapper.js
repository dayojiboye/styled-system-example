import styled from "styled-components";
import Box from "./Box";
import { props } from "@styled-system/should-forward-prop";

const Wrapper = styled(Box).withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) =>
		!props.includes(prop) && defaultValidatorFn(prop),
})`
	width: 100%;
	max-width: 1280px;
	padding-left: 16px;
	padding-right: 16px;
	margin: 0 auto;
`;

export default Wrapper;
