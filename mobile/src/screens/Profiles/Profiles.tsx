import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { BackgroundRegistration } from "../../styles/kitUi";

import LogoIcon from "../../assets/icon_logo.svg";
import {
  AreaIcon,
  AreaNewProfile,
  AreaTitle,
  AvatarIcon,
  AvatarRedirect,
  ButtonNewProfileOutlined,
  FirstProfiles,
  LabelNewProfile,
  ProfileArea,
  ProfileCompleted,
  ProfileName,
  SecondProfiles,
  TitleWatching,
} from "./styled";

export function Profiles() {
  const { navigate } = useNavigation();

  return (
    <BackgroundRegistration>
      <SafeAreaView style={{ flex: 1 }}>
        <AreaIcon>
          <LogoIcon />
        </AreaIcon>
        <AreaTitle>
          <TitleWatching>Who's watching?</TitleWatching>
        </AreaTitle>
        <View style={{ alignItems: "center" }}>
          <ProfileArea>
            <FirstProfiles>
              <ProfileCompleted>
                <AvatarRedirect 
                    onPress={() => navigate("redirect")}>
                  <AvatarIcon
                    source={require("../../assets/avatar_profile1.png")}
                  />
                  <ProfileName>Leo</ProfileName>
                </AvatarRedirect>
              </ProfileCompleted>
              <ProfileCompleted>
                <AvatarRedirect>
                  <AvatarIcon
                    source={require("../../assets/avatar_profile2.png")}
                  />
                  <ProfileName>Alice</ProfileName>
                </AvatarRedirect>
              </ProfileCompleted>
            </FirstProfiles>
            <SecondProfiles>
              <ProfileCompleted>
                <AvatarRedirect>
                  <AvatarIcon
                    source={require("../../assets/avatar_profile1.png")}
                  />
                  <ProfileName>Kiara</ProfileName>
                </AvatarRedirect>
              </ProfileCompleted>
              <ProfileCompleted>
                <AvatarRedirect>
                  <AvatarIcon
                    source={require("../../assets/avatar_profile2.png")}
                  />
                  <ProfileName>Firefox</ProfileName>
                </AvatarRedirect>
              </ProfileCompleted>
            </SecondProfiles>
          </ProfileArea>
          <AreaNewProfile>
            <ButtonNewProfileOutlined>
              <LabelNewProfile>Create new Profile</LabelNewProfile>
              <Image source={require("../../assets/plus.png")} />
            </ButtonNewProfileOutlined>
          </AreaNewProfile>
        </View>
      </SafeAreaView>
    </BackgroundRegistration>
  );
}
