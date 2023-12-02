import { Button, Center, HStack, Icon, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Chip from "@comp/Chip";
import TempoContador from "@comp/TempoContador";
import useApp from "@hooks/useApp";

export default function Inicio() {
	const { modo, definirModo, tempo, definirPausa, pausado } = useApp();

	if (modo == "foco") {
		return (
			<Center flex={1} bg="red.50" px={10}>
				<Chip borderColor="red.900" bg="red.100">
					<Icon as={MaterialCommunityIcons} name="brain" mr={2} size={8} color="red.900" />
					<Text color="red.900" fontSize="xl" textTransform="capitalize" fontFamily="body">
						Foco
					</Text>
				</Chip>

				<TempoContador tempo={tempo} color="red.900" my={7} fontFamily={pausado ? "body" : "heading"} />

				<HStack alignItems="center" justifyContent="space-evenly" w="full">
					<Button size={16} bg="red.100" rounded="3xl" _pressed={{ bg: "red.200" }}>
						<Icon as={MaterialCommunityIcons} name="tools" color="red.900" size={7} />
					</Button>
					<Button
						size={24}
						bg="red.300"
						rounded="3xl"
						_pressed={{ bg: "red.400" }}
						onPress={() => definirPausa(!pausado)}
					>
						<Icon as={MaterialCommunityIcons} name="play-pause" color="red.900" size={10} />
					</Button>
					<Button size={20} bg="red.100" rounded="3xl" _pressed={{ bg: "red.200" }} onPress={definirModo}>
						<Icon as={MaterialCommunityIcons} name="fast-forward" color="red.900" size={7} />
					</Button>
				</HStack>
			</Center>
		);
	} else if (modo == "pausa-rapida") {
		return (
			<Center flex={1} bg="green.50" px={10}>
				<Chip borderColor="green.900" bg="green.100">
					<Icon as={MaterialCommunityIcons} name="coffee-outline" mr={2} size={8} color="green.900" />
					<Text color="green.900" fontSize="xl" textTransform="capitalize" fontFamily="body">
						Pausa rápida
					</Text>
				</Chip>

				<TempoContador tempo={tempo} color="green.900" my={7} fontFamily={pausado ? "body" : "heading"} />

				<HStack alignItems="center" justifyContent="space-evenly" w="full">
					<Button size={16} bg="green.100" rounded="3xl" _pressed={{ bg: "green.200" }}>
						<Icon as={MaterialCommunityIcons} name="tools" color="green.900" size={7} />
					</Button>
					<Button
						size={24}
						bg="green.300"
						rounded="3xl"
						_pressed={{ bg: "green.400" }}
						onPress={() => definirPausa(!pausado)}
					>
						<Icon as={MaterialCommunityIcons} name="play-pause" color="green.900" size={10} />
					</Button>
					<Button size={20} bg="green.100" rounded="3xl" _pressed={{ bg: "green.200" }} onPress={definirModo}>
						<Icon as={MaterialCommunityIcons} name="fast-forward" color="green.900" size={7} />
					</Button>
				</HStack>
			</Center>
		);
	} else {
		return (
			<Center flex={1} bg="blue.50" px={10}>
				<Chip borderColor="blue.900" bg="blue.100">
					<Icon as={MaterialCommunityIcons} name="coffee-outline" mr={2} size={8} color="blue.900" />
					<Text color="blue.900" fontSize="xl" textTransform="capitalize" fontFamily="body">
						Pausa longa
					</Text>
				</Chip>

				<TempoContador tempo={tempo} color="blue.900" my={7} fontFamily={pausado ? "body" : "heading"} />

				<HStack alignItems="center" justifyContent="space-evenly" w="full">
					<Button size={16} bg="blue.100" rounded="3xl" _pressed={{ bg: "blue.200" }}>
						<Icon as={MaterialCommunityIcons} name="tools" color="blue.900" size={7} />
					</Button>
					<Button
						size={24}
						bg="blue.300"
						rounded="3xl"
						_pressed={{ bg: "blue.400" }}
						onPress={() => definirPausa(!pausado)}
					>
						<Icon as={MaterialCommunityIcons} name="play-pause" color="blue.900" size={10} />
					</Button>
					<Button size={20} bg="blue.100" rounded="3xl" _pressed={{ bg: "blue.200" }} onPress={definirModo}>
						<Icon as={MaterialCommunityIcons} name="fast-forward" color="blue.900" size={7} />
					</Button>
				</HStack>
			</Center>
		);
	}
}
