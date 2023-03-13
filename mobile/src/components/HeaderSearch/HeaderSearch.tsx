import { SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import { HamburgerSvg, LogoHome } from "../Header/styled";
import { SearchInput } from "./styled";

type HeaderProps = {
  onTextChange: (text: string) => void;
  onSubmitEditing: () => void;
}

export function HeaderSearch({ onTextChange, onSubmitEditing }: HeaderProps) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#202024",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      height: 130,
      paddingTop: 8,
    },
    placeholder: {
      paddingLeft: 20,
      color: "white",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <HamburgerSvg />
      <SearchInput
        style={styles.placeholder}
        placeholderTextColor="#8A8A8A"
        placeholder="Qual filme está procurando?"
        onChangeText={onTextChange}
        onSubmitEditing={onSubmitEditing}
      />
      <TouchableOpacity onPress={onSubmitEditing}>
        <LogoHome source={require("../../assets/search_icon.png")} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}