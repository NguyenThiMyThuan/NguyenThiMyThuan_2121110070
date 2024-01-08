import { View, Text, Image } from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";

const HomeBanner = () => {
  return (
    <View>
      <Image
        style={{
          height: responsiveHeight(15),
          marginTop: 15,
          alignSelf: "center",
          borderRadius: 15,
          height:150,
          width: 345,
        }}
        source={require("../assets/banner.png")}
      />
    </View>
  );
};

export default HomeBanner;
