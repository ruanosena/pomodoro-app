import { Button, Center, HStack, Icon, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Chip from "@comp/Chip";
import TempoContador from "@comp/TempoContador";

export default function Inicio() {
	return (
		<Center flex={1} bg="red.50" px={10}>
			<Chip borderColor="red.900" bg="red.100">
				<Icon as={MaterialCommunityIcons} name="brain" mr={2} size={8} color="red.900" />
				<Text color="red.900" fontSize="xl" textTransform="capitalize" fontFamily="body">
					Foco
				</Text>
			</Chip>

			<TempoContador tempo={302} color="red.900" my={7} />

			<HStack alignItems="center" justifyContent="space-evenly" w="full">
				<Button size={16} bg="red.100" rounded="3xl" _pressed={{ bg: "red.200" }}>
					<Icon as={MaterialCommunityIcons} name="tools" color="red.900" size={7} />
				</Button>
				<Button size={24} bg="red.300" rounded="3xl" _pressed={{ bg: "red.400" }}>
					<Icon as={MaterialCommunityIcons} name="play-pause" color="red.900" size={10} />
				</Button>
				<Button size={20} bg="red.100" rounded="3xl" _pressed={{ bg: "red.200" }}>
					<Icon as={MaterialCommunityIcons} name="fast-forward" color="red.900" size={7} />
				</Button>
			</HStack>
		</Center>
	);
}
