import { ReactNode } from "react";
import { Box, Center, IBoxProps } from "native-base";

type Props = IBoxProps & {
	children?: ReactNode;
};

export default function Chip({ children, ...rest }: Props) {
	return (
		<Center flexDir="row" rounded="full" px={3} py={2} borderWidth={2} {...rest}>
			{children}
		</Center>
	);
}
