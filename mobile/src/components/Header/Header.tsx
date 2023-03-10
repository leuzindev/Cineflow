import { SafeAreaView } from "react-native-safe-area-context";
import { LogoHome, HamburgerSvg, AvatarSvg } from "./styled";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Header() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#202024",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      height: 130,
      paddingTop: 8,
    },
  });

  

  return (
    <SafeAreaView style={styles.container}>
      <HamburgerSvg />
      <LogoHome source={require("../../assets/logoHome.png")} />
      <AvatarSvg />
    </SafeAreaView>
  );
}
