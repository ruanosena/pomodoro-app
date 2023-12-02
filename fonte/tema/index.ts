import { extendTheme } from "native-base";

export const TEMA = extendTheme({
	colors: {
		gray: {
			900: "#1A1A1A",
			800: "#333333",
			700: "#4D4D4D",
			600: "#666666",
			500: "#808080",
			400: "#999999",
			300: "#B3B3B3",
			200: "#CCCCCC",
			100: "#E6E6E6",
			50: "#F2F2F2",
		},
		red: {
			900: "#471515",
			800: "#752323",
			700: "#A33131",
			600: "#D13F3F",
			500: "#FF4C4C",
			400: "#FF6E6E",
			300: "#FF8F8F",
			200: "#FFB0B0",
			100: "#FFD9D9",
			50: "#FFF2F2",
		},
	},
	fonts: {
		heading: "Roboto_700Bold",
		body: "RobotoFlex_400Regular",
	},
	fontSizes: {
		"9xl": 200,
	},
});
