import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "../Utils/Date";
import { AntDesign } from "@expo/vector-icons";

const DropBox = () => {
  const [myIndex, setmyIndex] = useState();
  const [toggle, settongle] = useState(false);
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={Dropdown}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                setmyIndex(index);
                settongle(!toggle);
              }}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: "#E3E3E3",
                marginBottom: 10,
                paddingVertical: 13,
                
              }}
            >
              <Text>{item.title}</Text>
              <AntDesign
                name={toggle ? "down" : "right"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
            {myIndex == index && toggle ? <Text>{item.content}</Text> : null}
          </View>
        )}
      />
    </View>
  );
};

export default DropBox;
