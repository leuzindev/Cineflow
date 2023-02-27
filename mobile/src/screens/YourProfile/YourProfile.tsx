import React from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Header } from "../../components/Header/Header";
import { BackgroundDefault } from "../../styles/kitUi";
import { 
  AreaPhoto, PhotoAvatar, LabelChange, AreaFormData, InputData, 
  InputDataOff, ChangePassArea, ChangeTitle, InputsChangePassword, AreaTitleChange, ScrollProfile 
} from "./styled";

export function YourProfile() {

  const styles = StyleSheet.create({
    placeholder: {
        paddingLeft: 20,
        color: '#C4C4CC',
    },
    placeholderOff:{
      paddingLeft: 20,
      color: '#C4C4CC'
  }
  });


  return (
    <BackgroundDefault>
      <Header />
      <ScrollProfile>
      <AreaPhoto>
        <PhotoAvatar source={require("../../assets/Avatar.png")} />
        <TouchableOpacity>
          <LabelChange>Change Photo</LabelChange>
        </TouchableOpacity>
      </AreaPhoto>
      <AreaFormData>
        <InputData 
          style={styles.placeholder}
          value="Leonardo Soares"
          editable={false}
        />
        <InputDataOff 
          style={styles.placeholderOff}
          value="Leonardo@gmail.com"
          editable={false}
        />

        </AreaFormData>
        <AreaTitleChange>
          <ChangeTitle>Change password</ChangeTitle>
        </AreaTitleChange>
        <ChangePassArea>
        <InputsChangePassword
            style={styles.placeholder}
            placeholder="Old password"
            
        />
        <InputsChangePassword
            style={styles.placeholder}
            placeholder="New password"
        />
      </ChangePassArea>
      
    </ScrollProfile>

      
    </BackgroundDefault>
  );
}
