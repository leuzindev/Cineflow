import { View, Text, SafeAreaView } from "react-native";
import { BackgroundDefault } from "../../styles/kitUi";



export function Search(){

    return(

        <BackgroundDefault>
            <SafeAreaView style={{ flex: 1 }}>
                <Text>Search</Text>
            </SafeAreaView>
        </BackgroundDefault>
    )
}