import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Filosofi from "../../components/Home/Filosofi";
import { useNavigation } from "expo-router";

export default function filosofi() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Filosofi",
    });
  });
  return (
    <View>
      <Filosofi />
    </View>
  );
}
