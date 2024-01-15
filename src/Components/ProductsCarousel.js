import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { fruits } from "../Utils/Date";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";

const ProductsCarousel = ({ data }) => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
  const nav = useNavigation();
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Details", {
                main: item,
              });
            }}
            activeOpacity={0.5}
            style={{
              height: responsiveHeight(27),
              marginTop: 8,
              borderWidth: 1,
              borderColor: "#E3E3E3",
              width: responsiveHeight(21.5),
              marginRight: 15,
              borderRadius: 20,
            }}
          >
            <Image
              style={{ height: 130, resizeMode: "contain", borderRadius: 20 }}
              source={{ uri: item.img }}
            />

            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {item.name}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#990000", fontWeight: "bold" }}>
                  {item.price} đ
                </Text>
                <AntDesign
                  name="pluscircle"
                  size={22}
                  color="#00AA00"
                  onPress={() => {
                    dispatch(addToCart(item));
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductsCarousel;
