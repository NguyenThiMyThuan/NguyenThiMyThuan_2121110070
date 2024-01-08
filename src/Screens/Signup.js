import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "../Utils/MyColor";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-web";
import { Iconicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const [isVisbile, setisVisbile] = useState(true);
  const [userCrendetials, setuserCrendetials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCrendetials;
  console.log(email);

  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secondary }}>
      <StatusBar />
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={{
            height: 80,
            width: 80,
            alignSelf: "center",
            paddingTop: 50,
            marginTop: 50,
          }}
          source={require("../assets/logo.png")}
        />

        <view style={{ paddingHorizontal: 20, marginTop: 30 }}>
          <Text
            style={{
              color: myColors.third,
              fontSize: 35,
              fontWeight: "500",
              marginLeft: 40,
            }}
          >
            Sign Up{"\n"}
          </Text>

          <Text
            style={{
              fontSize: 15,
              fontWeight: "400",
              color: "grey",
              marginTop: 10,
              marginBot: 20,
              marginLeft: 40,
            }}
          >
            Enter your credentials to continue{"\n"}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "grey",
              marginTop: 10,
              marginLeft: 40,
            }}
          >
            UseName{"\n"}
          </Text>
          <TextInput
            maxLength={10}
            keyboardType="name-phone-pad"
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 1,
              marginTop: 15,
              fontSize: 16,
              marginLeft: 40,
            }}
          />
          <br />

          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "grey",
              marginTop: 10,
              marginLeft: 40,
            }}
          >
            Email
          </Text>

          <br />
          <TextInput
            value={email}
            onChangeText={(val) => {
              setuserCrendetials({ ...userCrendetials, email: val });
            }}
            keyboardType="email-address"
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 1,
              marginTop: 15,
              fontSize: 16,
              marginLeft: 40,
            }}
          />

          <br />

          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "grey",
              marginTop: 30,
              marginLeft: 40,
            }}
          >
            PassWord
          </Text>
          <br />

          <view
            style={{
              borderColor: "#E3E3E3",
              flexDirection: "row",
              borderBottomWidth: 2,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              value={password}
              onChangeText={(val) => {
                setuserCrendetials({ ...userCrendetials, password: val });
              }}
              secureTextEntry={true}
              maxLength={10}
              keyboardType="ascii-capable"
              style={{
                borderColor: "#E3E3E3",
                borderBottomWidth: 1,
                marginTop: 15,
                fontSize: 16,
                marginLeft: 40,
              }}
            />
            {/* <Iconicons name="eye-off-outline" size={24} color="black"/> */}
            <br />
          </view>

          <Text
            numberOfLines={2}
            style={{
              marginLeft: 40,
              marginRight: 40,
              fontSize: 15,
              fontWeight: "400",
              color: "black",
              marginTop: 15,
              letterSpacting: 0.7,
              lineHeight: 25,
              width: "95%",
              opacity: 0.7,
            }}
          >
            By continuing you agree to yuor Terms of Service
            <br />
            and Service and Privacy Policy
          </Text>
          <TouchableOpacity
            onPress={() => {
              console.log("Press");
            }}
            style={{
              backgroundColor: myColors.primary,
              marginTop: 30,
              height: 60,
              width: 300,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 40,
              gap: 5,
            }}
          >
            <Text
              style={{
                fontSize: 19,
                color: myColors.secondary,
                fontWeight: "500",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flesDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Already have an ac accountn ?</Text>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Login");
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: myColors.primary,
                  fontWeight: 600,
                }}
              >
                Login Now
              </Text>
            </TouchableOpacity>
          </View>
        </view>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
