import { SafeAreaView } from "react-native-safe-area-context";
import { LogoHome, HeaderContainer, HamburgerSvg, AvatarSvg } from "./styled";



import React from "react";
export function Header(){

    return(

   
           <HeaderContainer>
                <HamburgerSvg/>
                <LogoHome source={require('../../assets/logoHome.png')}/>
                <AvatarSvg/>
           </HeaderContainer>
        
    )
}