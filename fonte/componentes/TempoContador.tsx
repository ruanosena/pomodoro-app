import { ITextProps, Text } from "native-base";

type Props = ITextProps & {
	tempo: number;
};

export default function TempoContador({ tempo, ...rest }: Props) {
	const minutos = String(Math.trunc(tempo / 60)).padStart(2, "0");
	const segundos = String(tempo % 60).padStart(2, "0");

	return (
		<Text fontFamily="heading" fontSize="9xl" lineHeight="2xs" numberOfLines={2} {...rest}>
			{minutos}
			{"\n"}
			{segundos}
		</Text>
	);
}
