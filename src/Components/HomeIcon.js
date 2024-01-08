import { View, Text, Image } from "react-native";
import React from "react";

const HomeIcon = () => {
  return (
    <View>
      <Image
        style={{
          height: 80,
          width: 80,
          alignSelf: "center",
          paddingTop: 10,
          marginTop: 10,
        }}
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

export default HomeIcon;
