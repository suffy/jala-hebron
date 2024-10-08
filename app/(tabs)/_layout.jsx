import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  Feather,
  FontAwesome,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import { theme } from "../../constants/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.black,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="gallery"
        options={{
          title: "Gallery",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="photo" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
