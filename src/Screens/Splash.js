import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { myColors } from "../Utils/MyColor";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
    const nav=useNavigation()
  useEffect(() => {   
    setTimeout(() => {
        nav.replace('Home')
    }, 3000);
  }, []);

  return (
    <View
      style={{
        backgroundColor:"#000000",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Image
          style={{ tintColor: "white", height: 90, width: 90 }}
          source={require("../assets/logo.png")}
        />
        {/* <View>
          <Text style={{ fontSize: 35, color: myColors.secondary }}>
            iPhone
          </Text>
          <Text
            style={{
              color: myColors.secondary,
              fontSize: 15,
              textAlign: "center",
              letterSpacing: 5,
            }}
          >
            online shopping
          </Text>
        </View> */}
      </View>
    </View>
  );
};

export default Splash;
