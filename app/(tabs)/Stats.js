import { Text, View } from "react-native";
import { Screen } from "../../components/Screen";

export default function Stats() {
  return (
    <Screen>
      <View className=" p-5">
        <Text className="text-xl font-bold text-center">Statistic</Text>
      </View>

      <View>
        <Text>Grafica</Text>
      </View>
    </Screen>
  );
}
