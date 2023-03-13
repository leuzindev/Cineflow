import React, { useContext } from "react";
import { TouchableOpacity, StyleSheet, ScrollView, View } from "react-native";
import { HeaderProfile } from "../../components/HeaderProfile/HeaderProfile";
import { UserContext } from "../../context/user";
import { BackgroundDefault, LabelLogin } from "../../styles/kitUi";
import {
  AreaPhoto,PhotoAvatar,LabelChange,AreaFormData,
  InputData,InputDataOff,AreaChangePassword,InputChange
  ,ChangeTitle,AreaTitleChange,UpdateBtn,
} from "./styled";

export function YourProfile() {
  const styles = StyleSheet.create({
    placeholder: {
      paddingLeft: 20,
      color: "white",
    },
    placeholderOff: {
      paddingLeft: 20,
      color: "#C4C4CC",
    },
  });

  const { userName } = useContext(UserContext);
  
  return (
    <BackgroundDefault>
      <HeaderProfile />

      <AreaPhoto>
        <PhotoAvatar source={require("../../assets/Avatar.png")} />
        <TouchableOpacity>
          <LabelChange>Change Photo</LabelChange>
        </TouchableOpacity>
      </AreaPhoto>

      <AreaFormData>
        <InputData
          style={styles.placeholder}
          placeholderTextColor="#7C7C8A"
          placeholder="Username"
          value={userName}
          editable={false}
        />
        <InputDataOff
          style={styles.placeholderOff}
          placeholderTextColor="#7C7C8A"
          placeholder="E-mail"
          value="**********@gmail.com"
          editable={false}
        />

        <AreaChangePassword>
          <AreaTitleChange>
            <ChangeTitle>Change Password</ChangeTitle>
          </AreaTitleChange>
          <InputChange
            placeholderTextColor="#7C7C8A"
            style={styles.placeholder}
            placeholder="Old password"
            secureTextEntry={true}
          />
          <InputChange
            placeholderTextColor="#7C7C8A"
            style={styles.placeholder}
            placeholder="New password"
            secureTextEntry={true}
          />
        </AreaChangePassword>
        <UpdateBtn>
          <LabelLogin>Update</LabelLogin>
        </UpdateBtn>
      </AreaFormData>
    </BackgroundDefault>
  );
}
