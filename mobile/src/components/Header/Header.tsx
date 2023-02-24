import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fundo } from "./styled";




export function Header(){

    return(

        <SafeAreaView>
           <Fundo>
                <Text>HEADER</Text>
           </Fundo>
        </SafeAreaView>
    )
}