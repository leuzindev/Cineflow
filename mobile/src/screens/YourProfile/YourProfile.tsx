import React from "react";
import { TouchableOpacity, StyleSheet, ScrollView, View } from "react-native";
import { HeaderProfile } from "../../components/HeaderProfile/HeaderProfile";
import { BackgroundDefault, LabelLogin } from "../../styles/kitUi";
import {
  AreaPhoto,
  PhotoAvatar,
  LabelChange,
  AreaFormData,
  InputData,
  InputDataOff,
  AreaChangePassword,
  InputChange,
  ChangeTitle,
  AreaTitleChange,
  UpdateBtn,
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
          value="Leonardo Soares"
          editable={false}
        />
        <InputDataOff
          style={styles.placeholderOff}
          placeholderTextColor="#7C7C8A"
          placeholder="E-mail"
          value="Leonardo@gmail.com"
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
          />
          <InputChange
            placeholderTextColor="#7C7C8A"
            style={styles.placeholder}
            placeholder="New password"
          />
        </AreaChangePassword>
        <UpdateBtn>
          <LabelLogin>Update</LabelLogin>
        </UpdateBtn>
      </AreaFormData>
    </BackgroundDefault>
  );
}
