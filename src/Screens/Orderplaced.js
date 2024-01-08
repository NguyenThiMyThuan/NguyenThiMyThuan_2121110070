import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { myColors } from "../Utils/MyColor";
import { useNavigation } from "@react-navigation/native";

const Orderplaced = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.navigate("Home");
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialIcons name="verified" size={60} color={myColors.primary} />
      <Text>Congrats,Your order Places Successfully !</Text>
    </View>
  );
};

export default Orderplaced;
