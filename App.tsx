import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, RobotoFlex_400Regular } from "@expo-google-fonts/roboto-flex";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import { TEMA } from "./fonte/tema";
import { AppContexto } from "./fonte/contextos/AppContexto";
import Carregamento from "@comp/Carregamento";
import Inicio from "@tela/Inicio";

export default function App() {
	const [fonteCarregada] = useFonts({ RobotoFlex_400Regular, Roboto_700Bold });

	return (
		<NativeBaseProvider theme={TEMA}>
			<StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
			<AppContexto.Provider value={{ modo: "foco" }}>
				{fonteCarregada ? <Inicio /> : <Carregamento />}
			</AppContexto.Provider>
		</NativeBaseProvider>
	);
}
