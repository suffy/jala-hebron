import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { wp, hp } from "./../../helpers/common";
import { theme } from "./../../constants/theme";
import { Feather, FontAwesome6 } from "@expo/vector-icons";

export default function Sejarah() {
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
        <Text style={styles.textontent}>
          Gambar gedung tinggi yang ada di tengah, dibentuk seperti huruf H,
          yaitu inisial dari Hebron; yang melambangkan kota perlindungan.
        </Text>
        <Text style={styles.textontent}>
          Tanda Salib dan Terang, bicara tentang jiwa-jiwa yang dibawa kepada
          terang Kristus.
        </Text>
        <Text style={styles.textontent}>
          Bentuk tetesan darah, melambangkan bahwa semua orang percaya telah
          ditebus oleh darah Yesus, yang akan membawa kepada pemulihan hidup.
          Ada dua bentuk tetesan darah
        </Text>
        <Text style={styles.textontent}>
          1. Warna biru utuh, melambangkan persekutuan yang terikat dengan
          Tuhan.
        </Text>
        <Text style={styles.textontent}>
          2. Warna biru-kuning keemasan, menandakan kuat dalam Firman Tuhan,
          semakin ke atas berwarna keemasan bicara tentang semakin bertumbuh
          akan semakin gemuk, makmur, dan penuh kemuliaan Tuhan (semakin hari
          semakin dipenuhi dari kemuliaan kepada kemuliaan).
        </Text>
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
});
