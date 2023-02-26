
import { View, Text, SafeAreaView, StyleSheet  } from "react-native";
import { Header } from "../../components/Header/Header";
import { BackgroundDefault, ScrollHome, TitleLogin } from "../../styles/kitUi";



export function Search(){

            
      

    return(

        <BackgroundDefault>
            <Header />
            <ScrollHome>
            <TitleLogin>Search</TitleLogin>

            </ScrollHome>
        </BackgroundDefault>
    )
}