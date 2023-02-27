import { SafeAreaView,  } from "react-native-safe-area-context";
import { LogoHome, HeaderContainer, HamburgerSvg, AvatarSvg } from "./styled";
import { StyleSheet  } from "react-native";


import React from "react";
export function HeaderProfile(){

    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#202024',
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          height: 130,
          paddingTop: 8
        },
        
      });

    return(

       <SafeAreaView style={styles.container}>

           <HamburgerSvg/>
           <LogoHome source={require('../../assets/logoHome.png')}/>
           <AvatarSvg/>

       </SafeAreaView>
     
    )
}