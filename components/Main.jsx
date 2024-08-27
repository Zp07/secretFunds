import { View } from "react-native";
import CardName from "./CardName";
import CardTotal from "./CardTotal";
import { Screen } from "./Screen";
import RecentTransition from "./RecentTransitions";

export default function Main() {
  return (
    <>
      <Screen>
        <View className="m-5">
          <CardName />
        </View>

        <View className="m-5">
          <CardTotal />
        </View>

        <View className="m-5">
          <RecentTransition />
        </View>
      </Screen>
    </>
  );
}
