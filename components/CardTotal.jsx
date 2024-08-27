import { Text, View } from "react-native";

export default function CardTotal() {
  return (
    <View className="p-4 bg-[0D3A4B] rounded-xl mb-4 shadow-lg shadow-black flex-row justify-between">
      <View className="flex-1 m-2">
        <Text className="text-[#79C1A7] text-sm">Balance</Text>
        <View className="m-5">
          <Text className="text-white text-2xl font-bold">$19,504.00</Text>
          <Text className="text-[#79C1A7] text-xs">October 23, 2023</Text>
        </View>
      </View>

      <View className=" bg-[#0F4C5C] p-5 rounded-lg justify-center ml-4">
        <View className="mb-2">
          <Text className="text-[#79C1A7] text-sm">Maria</Text>
          <Text className="text-white text-lg font-bold">9.000</Text>
        </View>

        <View className="mb-2">
          <Text className="text-[#79C1A7] text-sm">Juan</Text>
          <Text className="text-white text-lg font-bold">12.000</Text>
        </View>
      </View>
    </View>
  );
}
