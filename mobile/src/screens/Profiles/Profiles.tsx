import { SafeAreaView, View, Image } from "react-native";
import { BackgroundRegistration } from "../../styles/kitUi";

import LogoIcon from "../../assets/icon_logo.svg"
import { 
    AreaIcon, AreaNewProfile, AreaTitle, AvatarIcon, ButtonNewProfileOutlined, FirstProfiles,
    LabelNewProfile,
    ProfileArea, ProfileCompleted, ProfileName, SecondProfiles, 
    TitleWatching 
    } from "./styled";

export function Profiles(){

    return(
        <BackgroundRegistration>
            <SafeAreaView style={{ flex: 1 }}>
                <AreaIcon>
                    <LogoIcon />
                </AreaIcon>
                <AreaTitle>
                    <TitleWatching>Who's watching?</TitleWatching>
                </AreaTitle>
                <View style={{ alignItems: 'center' }}>
                    <ProfileArea>
                        <FirstProfiles>
                            <ProfileCompleted>
                                <AvatarIcon source={require('../../assets/avatar_profile1.png')}/>
                                <ProfileName>Leo</ProfileName>
                            </ProfileCompleted>
                            <ProfileCompleted>
                                <AvatarIcon source={require('../../assets/avatar_profile2.png')}/>
                                <ProfileName>Alice</ProfileName>
                            </ProfileCompleted>
                        </FirstProfiles>
                        <SecondProfiles>
                            <ProfileCompleted>
                                <AvatarIcon source={require('../../assets/avatar_profile1.png')}/>
                                <ProfileName>Kiara</ProfileName>
                            </ProfileCompleted>
                            <ProfileCompleted>
                                <AvatarIcon source={require('../../assets/avatar_profile2.png')}/>
                                <ProfileName>Firefox</ProfileName>
                            </ProfileCompleted>
                        </SecondProfiles>

                    </ProfileArea>
                <AreaNewProfile>
                    <ButtonNewProfileOutlined>
                        <LabelNewProfile>Create new Profile</LabelNewProfile>
                        <Image source={require('../../assets/plus.png')}/>
                    </ButtonNewProfileOutlined>
                </AreaNewProfile>  
                </View>
                
            </SafeAreaView>
        </BackgroundRegistration>
    )

}