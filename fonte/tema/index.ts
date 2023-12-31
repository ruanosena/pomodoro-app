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
		blue: {
			900: "#153047",
			800: "#234F75",
			700: "#316EA3",
			600: "#3F8DD1",
			500: "#4CACFF",
			400: "#6EBBFF",
			300: "#8FCBFF",
			200: "#B0DAFF",
			100: "#D9EEFF",
			50: "#F2F9FF",
		},
		green: {
			900: "#14401D",
			800: "#216630",
			700: "#2E8C43",
			600: "#3DB257",
			500: "#4DDA6C",
			400: "#69E084",
			300: "#89E89E",
			200: "#AAF0B9",
			100: "#D9FAE1",
			50: "#F2FFF5",
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
