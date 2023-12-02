import { createContext, ReactNode, useEffect, useState } from "react";

export const MODOS = ["foco", "pausa-rapida", "pausa-longa"] as const;

type AppContextoProps = {
	modo: (typeof MODOS)[number];
	definirModo: () => void;
	tempo: number;
	definirPausa: (pausa: boolean) => void;
	pausado: boolean;
	definirAuto: (auto: boolean) => void;
	auto: boolean;
};

type AppContextoProviderProps = {
	children: ReactNode;
};

export const AppContexto = createContext<AppContextoProps>({} as AppContextoProps);

export default function AppContextoProvider({ children }: AppContextoProviderProps) {
	const [modo, defModo] = useState<(typeof MODOS)[number]>("foco");
	const [contador, defContador] = useState<number>(0);
	const [tempo, defTempo] = useState<number>(0);
	const [pausado, defPausado] = useState<boolean>(true);
	const [auto, defAuto] = useState<boolean>(false);

	useEffect(() => {
		if (tempo <= 0) definirModo();

		if (!pausado) {
			const intervalo = setTimeout(() => {
				defTempo(tempo - 1);
			}, 1000);

			return () => clearTimeout(intervalo);
		}
	}, [tempo, pausado]);

	useEffect(() => {
		if (modo == "pausa-rapida") {
			defContador((cont) => cont + 1);
			defTempo(60 * 5);
		} else if (modo == "pausa-longa") {
			defContador(0);
			defTempo(60 * 15);
		} else {
			// foco
			defTempo(60 * 25);
		}
		if (!auto) defPausado(true);
	}, [modo]);

	function definirModo() {
		if (modo == "foco") {
			if (contador >= 3) {
				defModo("pausa-longa");
			} else {
				defModo("pausa-rapida");
			}
		} else {
			defModo("foco");
		}
	}

	return (
		<AppContexto.Provider
			value={{ modo, definirModo, tempo, definirPausa: defPausado, pausado, definirAuto: defAuto, auto }}
		>
			{children}
		</AppContexto.Provider>
	);
}
