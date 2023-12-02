import { AppContexto } from "@ctx/AppContexto";
import { useContext } from "react";

export default function useApp() {
	const ctx = useContext(AppContexto);

	return ctx;
}
