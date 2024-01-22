import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "../Utils/MyColor";
import { StatusBar } from "expo-status-bar";

import { Iconicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { authentication, database } from "../../Firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import uuid from "react-native-uuid";
import Login from "./Login";
import Home from "./Home";



const Signup = () => {
  const [isVisbile, setisVisbile] = useState(true);
  const [userCrendetials, setuserCrendetials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { email, password, name } = userCrendetials;
  console.log(name);
  const uid =uuid.v4;
  const userAccount = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(() => {
        nav.navigate('Login')
        Alert.alert("User account created & signed in!");
        setDoc(doc(database, "users", uid), {
          username:name,
          email:email,
          id:authentication.currentUser.uid
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secondary }}>
      <StatusBar />
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={{
            height: 70,
            width: 70,
            alignSelf: "center",
          }}
          source={require("../assets/logo.png")}
        />

        <View style={{ paddingHorizontal: 20, marginTop: 0 }}>
          <Text
            style={{
              color: 'black',
              fontSize: 35,
              fontWeight: "500",
              marginLeft: 20,
            }}
          >
            Đăng ký
          </Text>

          <Text
            style={{
              fontSize: 15,
              fontWeight: "300",
              color: "grey",
              marginTop: 10,
              marginBot: 20,
              marginLeft: 20,
            }}
          >
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "grey",
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            Họ tên{"\n"}
          </Text>
          <TextInput
            maxLength={10}
            value={name}
            onChangeText={(val) => {
              setuserCrendetials({ ...userCrendetials, name: val });
            }}
            keyboardType="name-phone-pad"
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 0.3,
              marginTop: 10,
              fontSize: 16,
              marginLeft: 20,
            }}
          />

          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "grey",
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            Email hoặc số điện thoại
          </Text>

          <TextInput
            value={email}
            onChangeText={(val) => {
              setuserCrendetials({ ...userCrendetials, email: val });
            }}
            keyboardType="email-address"
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 0.3,
              marginTop: 20,
              fontSize: 16,
              marginLeft: 20,
            }}
          />

          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "grey",
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            Mật khẩu
          </Text>
          <View
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 0.3,
              marginTop: 20,
              marginLeft: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              value={password}
              onChangeText={(val) => {
                setuserCrendetials({ ...userCrendetials, password: val });
              }}
              secureTextEntry={isVisbile}
              keyboardType="ascii-capable"
              style={{
                fontSize: 16,

                flex: 0.9,
              }}
            />
            <Ionicons
              onPress={() => {
                setisVisbile(!isVisbile);
              }}
              name={isVisbile == true ? "eye-off-sharp" : "eye-sharp"}
              size={22}
              color="gray"
            />
          </View>

          <Text
            numberOfLines={2}
            style={{
              marginLeft: 20,

              fontSize: 15,
              fontWeight: "300",
              color: "black",
              marginTop: 15,
              letterSpacting: 0.7,
              lineHeight: 25,
              width: "95%",
              opacity: 0.7,
            }}
          >
            Vui lòng nhập mật khẩu có kí tự đặc biệt dài 6 chữ
          </Text>
          <TouchableOpacity
            onPress={userAccount}
            style={{
              backgroundColor: 'orange',
              marginTop: 20,
              height: 60,
              width: 300,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                fontSize: 19,
                color: 'black',
                fontWeight: "500",
              }}
            >
              Đăng ký
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flesDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, marginTop: 10 }}>
              Bạn đã có tài khoản chưa ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Login");
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 600,
                }}
              >
                Đăng nhập ngay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;