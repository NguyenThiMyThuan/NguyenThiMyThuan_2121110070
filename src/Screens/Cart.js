import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import { AntDesign } from "@expo/vector-icons";
import { myColors } from "../Utils/MyColor";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../Redux/CartSlice";
import { useNavigation } from "@react-navigation/native";
import Orderplaced from "./Orderplaced";
import Details from "./Details";
import { Ionicons } from "@expo/vector-icons";
import Home from "./Home";

const Cart = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
  console.log(storeData, "im data from store");
  return (
    
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "white",
        gap: 15,
      }}
    >
     
      <Text style={{ textAlign: "center", fontSize: 23, fontWeight: "600" }}>
        Giỏ hàng
      </Text>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={storeData}
          renderItem={({ item, index }) => (
            <View
              style={{
                height: responsiveHeight(19.5),

                borderBottomColor: "#DCDCDC",
                borderBottomWidth: 1,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 0.35,
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    height: 120,
                    width: 120,
                    resizeMode: "contain",
                    marginTop: 20,
                  }}
                  source={{
                    uri: item.img,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 0.7,
                  paddingHorizontal: 10,
                  paddingVertical: 28,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 20, fontWeight: "600", color: "gray" }}
                  >
                    {item.name}
                  </Text>
                  <AntDesign
                    name="close"
                    size={20}
                    color="gray"
                    onPress={() => {
                      dispatch(removeFromCart(item));
                    }}
                  />
                </View>
                <View
                  style={{
                    alignContent: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 18,
                      marginTop: 25,
                    }}
                  >
                    <AntDesign
                      name="minus"
                      size={20}
                      color='orange'
                      onPress={() => {
                        dispatch(decrementQuantity(item));
                      }}
                    />
                    <Text style={{ fontSize: 17 }}>{item.quantity}</Text>
                    <AntDesign
                      name="plus"
                      size={20}
                      color='orange'
                      onPress={() => {
                        if (item.quantity == 78) {
                        } else {
                          dispatch(incrementQuantity(item));
                        }
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "red",
                      marginTop: 25,
                    }}
                  >
                    {item.price * item.quantity} 
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{ flex: 0.9, justifyContent: "flex-end" }}>
        <TouchableOpacity
          onPress={() => {
            nav.navigate(Orderplaced);
          }}
          style={{
            backgroundColor: 'orange',
            borderRadius: 20,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
            Mua ngay
          </Text>
        </TouchableOpacity>
      </View>
     
    </SafeAreaView>
  );
};

export default Cart;
