import { Center, Spinner } from "native-base";

export default function Carregamento() {
	return (
		<Center flex={1} bg="red.100">
			<Spinner size="lg" color="red.500" />
		</Center>
	);
}
