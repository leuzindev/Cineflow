import { SafeAreaView, Text } from "react-native"
import { BackgroundDefault } from "../../styles/kitUi";



export function YourProfile(){

    return(
        <BackgroundDefault>
            <SafeAreaView style={{ flex: 1 }}>
                <Text>Your-Profile</Text>
            </SafeAreaView>
        </BackgroundDefault>

    )

}