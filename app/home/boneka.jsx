import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { wp, hp } from "./../../helpers/common";
import { theme } from "./../../constants/theme";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function Boneka() {
  useEffect(() => {}, []);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Pelayanan Panggung Boneka",
    });
  });

  return (
    <ScrollView style={styles.containerList}>
      <View style={styles.containerText}>
        <Text style={styles.textContent}>085311902150 / 081387243736</Text>
      </View>

      <View style={styles.containerText}>
        <Text
          style={[
            styles.textContent,
            {
              fontSize: hp(3),
              marginBottom: 10,
              fontWeight: "bold",
            },
          ]}
        >
          Donasi
        </Text>
        <Text style={styles.textContent}>
          BCA 883.074.4178 An Raimond Sumaa
        </Text>
        <Text style={styles.textContent}>Untuk: Pembangunan Gedung Gereja</Text>
      </View>

      <View style={{ height: 50 }}></View>
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
    // borderWidth: 1,
    height: hp(100),
    // borderColor: theme.colors.black,
    // borderRadius: theme.radius.lg,
    // borderCurve: "continuous",
    // marginHorizontal: wp(4),

    // elevation: 0.1,
    backgroundColor: theme.colors.white,
    // shadowColor: theme.colors.black,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,

    // elevation: 2,
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
    backgroundColor: theme.colors.green,
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
    fontSize: hp(1.7),
    fontWeight: theme.fontWeights.medium,
  },
});
