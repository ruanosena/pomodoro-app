import { AppContexto } from "@ctx/AppContexto";
import { Center, Spinner } from "native-base";
import { useContext } from "react";

export default function Carregamento() {
	const { modo } = useContext(AppContexto);

	if (modo == "foco") {
		return (
			<Center flex={1} bg="red.100">
				<Spinner size="lg" color="red.500" />
			</Center>
		);
	} else if (modo == "pausa-rapida") {
		return (
			<Center flex={1} bg="green.100">
				<Spinner size="lg" color="green.500" />
			</Center>
		);
	} else {
		return (
			<Center flex={1} bg="blue.100">
				<Spinner size="lg" color="blue.500" />
			</Center>
		);
	}
}
