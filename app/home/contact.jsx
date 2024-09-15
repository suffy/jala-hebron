import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { wp, hp } from "./../../helpers/common";
import { theme } from "./../../constants/theme";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function Contact() {
  useEffect(() => {}, []);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Contact Us",
    });
  });

  return (
    <ScrollView style={styles.containerList}>
      <View style={styles.containerText}>
        <Text style={styles.textContent}>
          Telp : 081387243736 dan 085311902150
        </Text>
        <Text style={styles.textContent}>
          Email 1 : gpdihebronserpong@gmail.com
        </Text>
        <Text style={styles.textContent}>
          Email 2 : gpdihebronserpong@gmail.com
        </Text>
        <Text style={styles.textContent}>
          Alamat : Jl. Boulevard Gading Serpong, Ruko Thematic Blok L39 & L50
          Gading Serpong (Komplek Pasar Modern Paramount Gading Serpong)
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // gap: 15,
  },
  header: {
    marginHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: hp(4),
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.neutral(0.9),

    marginHorizontal: wp(4),
  },
  textontent: {
    // marginHorizontal: wp(4),
    color: theme.colors.neutral(0.9),
    // marginHorizontal: wp(4),
    marginTop: hp(1.5),
    fontSize: hp(1.8),
    fontWeight: theme.fontWeights.medium,
  },

  containerList: {
    paddingHorizontal: 20,
    paddingTop: 20,
    height: hp(100),
    backgroundColor: theme.colors.white,
  },
  containerList: {
    paddingHorizontal: 20,
    paddingTop: 20,
    height: hp(100),
    backgroundColor: theme.colors.white,
  },
  containerText: {
    padding: 12,
    borderWidth: 1,
    borderColor: theme.colors.black,
    borderRadius: theme.radius.sm,
    marginTop: hp(2),
    backgroundColor: theme.colors.blue,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.4,

    elevation: 1,
  },
  textContent: {
    marginHorizontal: wp(1),
    marginVertical: hp(1),
    fontSize: hp(2),
    fontWeight: theme.fontWeights.bold,
  },
});
