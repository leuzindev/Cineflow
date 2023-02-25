import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Home } from "../screens/Home/Home";
import { YourProfile } from "../screens/YourProfile/YourProfile";
import { Ionicons } from "@expo/vector-icons"
import { Search } from "../screens/Search/Search";


const { Navigator, Screen } = createBottomTabNavigator();

export function TabBar(){


    return(
        <Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false, 
                tabBarActiveTintColor: 'white',
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: '#202024',
                    height: 100
                }
            }}

            
        >

            
            <Screen 
                name="yourprofile" 
                component={YourProfile}
                options={{
                    tabBarIcon: ({ color, size, focused}) => {
                        if(focused){
                            return <Ionicons name="search" size={size} color={color}/>
                        }
                        return <Ionicons name="search-outline" size={size} color={color}/>
                    }
                }}
            />
            <Screen 
                name="home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size, focused}) => {
                        if(focused){
                            return <Ionicons name="home" size={size} color={color}/>
                        }
                        return <Ionicons name="home-outline" size={size} color={color}/>
                    }
                }}
            />
             <Screen 
                name="search" 
                component={Search}
                options={{
                    tabBarIcon: ({ color, size, focused}) => {
                        if(focused){
                            return <Ionicons name="person" size={size} color={color}/>
                        }
                        return <Ionicons name="person-outline" size={size} color={color}/>
                    }
                }}
            />
        </Navigator>
    )
}