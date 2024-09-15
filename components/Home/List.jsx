import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { wp, hp } from "./../../helpers/common";
import { theme } from "./../../constants/theme";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Filosofi() {
  const router = useRouter();

  useEffect(() => {}, []);

  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;

  return (
    <View style={[styles.container, { paddingTop }]}>
      <View style={styles.header}>
        <Pressable>
          <Text style={styles.title}>Jala Hebron</Text>
        </Pressable>
        <Pressable>
          <FontAwesome6
            name="bars-staggered"
            size={22}
            color={theme.colors.neutral(0.7)}
          />
        </Pressable>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/home/filosofi")}
        style={styles.containerList}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center",
          }}
        >
          <Image
            source={require("./../../assets/images/thinking.png")}
            style={styles.image}
          />
          <Text style={styles.textContent_black}>Filosofi</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/home/sejarah")}
        style={styles.containerList_black}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center",
          }}
        >
          <Image
            source={require("./../../assets/images/scroll.png")}
            style={styles.image}
          />
          <Text style={styles.textContent_black}>History</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/home/contact")}
        style={styles.containerList}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center",
          }}
        >
          <Image
            source={require("./../../assets/images/conversation.png")}
            style={styles.image}
          />
          <Text style={styles.textContent_black}>Contact Us</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/home/boneka")}
        style={styles.containerList_black}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center",
          }}
        >
          <Image
            source={require("./../../assets/images/hands.png")}
            style={styles.image}
          />
          <Text style={styles.textContent_black}>
            Pelayanan Panggung Boneka
          </Text>
        </View>
      </TouchableOpacity>
    </View>
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
  },
  textContent: {
    marginHorizontal: wp(4),
    color: theme.colors.neutral(0.9),
    // marginHorizontal: wp(4),
    marginVertical: hp(1.5),
    fontSize: hp(2),
    fontWeight: theme.fontWeights.bold,
  },
  containerList: {
    padding: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors.black,
    borderRadius: theme.radius.lg,
    borderCurve: "continuous",
    marginHorizontal: wp(4),
    marginTop: hp(2),
    // elevation: 0.1,
    backgroundColor: theme.colors.blue,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  containerList_black: {
    padding: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors.black,
    borderRadius: theme.radius.lg,
    borderCurve: "continuous",
    marginHorizontal: wp(4),
    marginTop: hp(2),
    // elevation: 0.1,
    backgroundColor: theme.colors.green,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    color: theme.colors.white,

    elevation: 2,
  },
  textContent_black: {
    marginHorizontal: wp(4),
    color: theme.colors.black,
    // marginHorizontal: wp(4),
    marginVertical: hp(1.5),
    fontSize: hp(2.5),
    fontWeight: theme.fontWeights.bold,
  },
  image: {
    width: wp(8),
    height: hp(5),
    resizeMode: "contain",
  },
});
