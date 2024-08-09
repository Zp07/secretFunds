import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Logo } from "./Logo.jsx";

export function Main() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <Text>Maneja tus finanzas en parjea</Text>
      <Text>Mejora tu relacion</Text>
      <Pressable>
        <Text>Sign in</Text>
      </Pressable>
      <Pressable>
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    justifyContent: "center",
    alignContent: "center",
  },
});
