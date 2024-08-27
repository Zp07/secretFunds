import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Logo } from "./Logo.jsx";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function Login() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View className="justify-items-center items-center">
        <Logo />
      </View>

      <View>
        <Text className="text-white text-center text-2xl font-bold">
          Maneja tus finanzas en pareja
        </Text>
        <Text className="text-white text-center text-xl font-semibold">
          Administra tu relacion
        </Text>
      </View>

      <View className="flex-row gap-5 justify-center  m-5">
        <StyledPressable className="active:opacity-10 bg-slate-200 p-5 border-2 rounded-md">
          <Text className="text-xl">Sign in</Text>
        </StyledPressable>

        <StyledPressable className="active:opacity-10 bg-slate-200 p-5 border-2 rounded-md">
          <Text className="text-xl text-black">Sign Up</Text>
        </StyledPressable>
      </View>

      <View className="flex-row justify-center ">
        <StyledPressable className="active:opacity-10 bg-slate-100 p-5 border-2 rounded-md">
          <Text className="text-xl">Google</Text>
        </StyledPressable>
      </View>
    </View>
  );
}
