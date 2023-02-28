import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, TouchableOpacity } from "react-native";

import React, { useState } from "react";
import { HamburgerSvg, LogoHome } from "../Header/styled";
import { SearchInput } from "./styled";




export function HeaderSearch() {
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
        
      />
      <TouchableOpacity
       
      >
        <LogoHome source={require("../../assets/search_icon.png")} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
