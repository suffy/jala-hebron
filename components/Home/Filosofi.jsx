import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { wp, hp } from "./../../helpers/common";
import { theme } from "./../../constants/theme";
import { Feather, FontAwesome6 } from "@expo/vector-icons";

export default function Filosofi() {
  useEffect(() => {}, []);

  return (
    <View style={styles.containerList}>
      <View>
        <Image
          source={{
            uri: "https://muliaputramandiri.com/assets/images/hebron/logo-hebron.png",
          }}
          style={{ width: 100, height: 100 }}
        />
        <View style={styles.containerText}>
          <Text style={styles.textContent}>
            Gambar gedung tinggi yang ada di tengah, dibentuk seperti huruf H,
            yaitu inisial dari Hebron; yang melambangkan kota perlindungan.
          </Text>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.textContent}>
            Tanda Salib dan Terang, bicara tentang jiwa-jiwa yang dibawa kepada
            terang Kristus.
          </Text>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.textContent}>
            Bentuk tetesan darah, melambangkan bahwa semua orang percaya telah
            ditebus oleh darah Yesus, yang akan membawa kepada pemulihan hidup.
            Ada dua bentuk tetesan darah.
          </Text>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.textContent}>
            1. Warna biru utuh, melambangkan persekutuan yang terikat dengan
            Tuhan.
          </Text>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.textContent}>
            2. Warna biru-kuning keemasan, menandakan kuat dalam Firman Tuhan,
            semakin ke atas berwarna keemasan bicara tentang semakin bertumbuh
            akan semakin gemuk, makmur, dan penuh kemuliaan Tuhan (semakin hari
            semakin dipenuhi dari kemuliaan kepada kemuliaan).
          </Text>
        </View>
      </View>
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

    marginHorizontal: wp(4),
  },
  textContent: {
    // marginHorizontal: wp(4),
    color: theme.colors.neutral(0.9),
    // marginHorizontal: wp(4),
    // marginTop: hp(1.5),
    fontSize: hp(1.8),
    fontWeight: theme.fontWeights.medium,
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
});
