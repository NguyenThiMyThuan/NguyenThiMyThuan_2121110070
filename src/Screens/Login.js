import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "../Utils/MyColor";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../Firebaseconfig";

const Login = () => {
  const nav = useNavigation();
  const [loginCredentials, setloginCredentials] = useState({
    email: "",
    password: "",
  });
  const [isVisbile, setisVisbile] = useState(true);
  const { email, password } = loginCredentials;

  const loginUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((val) => {
        nav.navigate("Home");
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secondary }}>
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
              color: myColors.primary,
              fontSize: 35,
              fontWeight: "500",
              marginLeft: 20,
            }}
          >
            Đăng nhập
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
            Số điện thoại hoặc email
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "black",
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            Email{"\n"}
          </Text>
          <TextInput
            value={email}
            onChangeText={(val) => {
              setloginCredentials({ ...loginCredentials, email: val });
            }}
            keyboardType="email-address"
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
              color: "black",
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
                setloginCredentials({ ...loginCredentials, password: val });
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

              fontSize: 13,
              fontWeight: "400",
              color: "black",
              marginTop: 15,
              width: "95%",
              opacity: 0.5,
              textAlign: "right",
            }}
          >
            Sai mật khẩu
          </Text>
          <TouchableOpacity
            onPress={loginUser}
            style={{
              backgroundColor: myColors.primary,
              marginTop: 20,
              height: 60,
              width: 300,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 20,
              marginTop: 60,
            }}
          >
            <Text
              style={{
                fontSize: 19,
                color: myColors.secondary,
                fontWeight: "500",
              }}
            >
              Đăng nhập
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flesDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                color: "gray",
                fontWeight: "400",
              }}
            >
              Bạn quên mật khẩu ư?
            </Text>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Signup");
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: myColors.primary,
                  fontWeight: 600,
                  

                }}
              >
                Đăng ký
              </Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;