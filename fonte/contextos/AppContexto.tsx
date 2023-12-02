import { createContext } from "react";

type AppContextoProps = {
	modo: "foco" | "pausa-rapida" | "pausa-longa";
};

export const AppContexto = createContext<AppContextoProps>({} as AppContextoProps);
