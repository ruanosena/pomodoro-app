import { Center, Spinner } from "native-base";

export default function Carregamento() {
	return (
		<Center flex={1}>
			<Spinner size={12} />
		</Center>
	);
}
