import { View, Text } from "react-native";
import React from "react";
import { myColors } from "../Utils/MyColor";

const ProductsTile = ({title}) => {
  return (
    <View
      style={{
        
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "Space-between",
        alignItems: "center",
      }}
    >
        <Text style={{ fontSize:20,color: "gray", fontWeight:"700"}} >{title} </Text>
        <Text style={{ fontSize:16,color:myColors.primary,marginLeft: 140}}>Tất cả</Text>
    </View>
  );
};

export default ProductsTile;
