import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import DropBox from "../Components/DropBox";
import { myColors } from "../Utils/MyColor";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import Home from "./Home";
import { AntDesign } from '@expo/vector-icons';
const Details = ({ route }) => {
  const dispatch = useDispatch();
  const productData = route.params.main;
  const { name, price, prieces, img } = productData;

  const nav = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", gap: 20 }}>
      <StatusBar backgroundColor="white" />
      <View>
        <Image
          resizeMode="row"
          style={{
            height: 200,
            width: 200,
            marginTop: 20,
            marginLeft: 100,
            borderBottomLeftRadius: 20,
          }}
          source={{
            uri: img,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            width: "100",
            paddingHorizontal: 15,
            alignItems: "center",
          }}
        >
          <Ionicons  onPress={() => {nav.navigate(Home)}} name="arrow-back-sharp" size={24} color="black" />
          <Feather
            style={{ marginLeft: 300 }}
            name="share"
            size={24}
            color="black"
          />
        </View>
      </View>

      <View style={{ paddingHorizontal: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, color: "black", fontWeight: "600" }}>
            {name}
          </Text>
          <Fontisto
            style={{ marginRight: 15, color: "gray" }}
            name="favorite"
            size={30}
            color="black"
          />
        </View>
        <Text style={{ fontSize: 20, color: "red", fontWeight: "bold" }}>
          {price} đ
        </Text>
        <DropBox />
        <View style={{ flex: 0.85, marginTop: 110 }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(addToCart(productData));
              nav.navigate("Cart");
            }}
            style={{
              backgroundColor: myColors.primary,
              borderRadius: 20,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "black", fontSize: 18, fontWeight: "600" }}>
            Thêm giỏ hàng           
             </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
