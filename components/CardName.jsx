import { Text, View } from "react-native";

export default function CardName() {
  const name = "Pedro";
  const nameShare = "Sara";
  return (
    <>
      <View className="flex-row gap-2">
        <Text>Foto</Text>
      </View>

      <View className="p-4 bg-[0D3A4B] rounded-lg mb-4">
        <Text className="text-white text-lg">Hi {name}</Text>

        <Text className="text-[#79C1A7] text-xl font-semibold">
          Welcome to back {name}
        </Text>

        <Text className="text-gray-500 text-xs font-bold">
          Tienes compartido con {nameShare}
        </Text>
      </View>
    </>
  );
}
