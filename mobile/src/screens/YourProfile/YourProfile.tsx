import { SafeAreaView, Text } from "react-native"
import { Header } from "../../components/Header/Header";
import { BackgroundDefault, ScrollHome, TitleLogin } from "../../styles/kitUi";



export function YourProfile(){

    return(
        <BackgroundDefault>
          
                <Header />
                <ScrollHome>
                    <TitleLogin>PROFILE</TitleLogin>

                </ScrollHome>
            
        </BackgroundDefault>

    )

}