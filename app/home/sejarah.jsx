import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { wp, hp } from "./../../helpers/common";
import { theme } from "./../../constants/theme";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function Sejarah() {
  useEffect(() => {}, []);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "History",
    });
  });

  return (
    <ScrollView style={styles.containerList}>
      <View style={styles.containerText}>
        <Text style={styles.textContent}>
          1. Bermula dari Persekutuan Doa Shekinah. Pdt.David Ibrahim (Gembala
          GPdI Greenville, Jakarta Barat) membentuk Persekutuan Doa Shekinah di
          Gading Serpong. Tanggal 24 Mei 2002 adalah kali pertama ibadah
          persekutuan doa ini diadakan, yang bertempat di ruko depan sektor 1A
          milik Tante Listia (jemaat GPdI Greenville). Sekitar 10-15 jiwa
          mengikuti ibadah ini. Kegiatan ibadah di ruko tersebut hanya berjalan
          hingga 2 tahunan, karena ruko ini dijual.
        </Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.textontent}>
          2. Dilanjutkan oleh Pdm. Beatrix (pengerja dari GPdI Greenville). Pada
          tahun 2004 – 2006, Persekutuan Doa Shekinah diserahkan kepada Pdm.
          Beatrix. Kegiatan ibadah dilakukan secara bergantian di rumah Bp.
          Timotius di Sektor 1A (minggu ganjil) dan di rumah Bp. Laksana di
          sektor 7A (minggu genap). Pada masa ini, Pdm. Beatrix menyewa rumah di
          Sektor 8A, Jl. Kelapa Molek X, Blok FB4/No.5. Di rumah ini, dibuka
          ibadah Sekolah Minggu. Sampai pada Oktober 2006, jumlah anak sekolah
          minggu yang dilayani sekitar 17 jiwa, dan remaja sekitar 8 jiwa.
          Selain itu, ada juga anak sekolah minggu di Sektor 1A yang dilayani,
          yang berjumlah 23 jiwa.
        </Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.textontent}>
          3. Awal pengembalaan Pdt. Raimond Sumaa. Karena Pdm. Beatrix menikah
          dan harus mengikuti suami yang melayani di Bekasi, maka oleh Pdt.
          David Ibrahim, pelayanan di Gading Serpong dipercayakan kepada Pdt.
          Raimond Sumaa beserta istri Pdm. Yesie Novfyanti. Senin, tgl. 2
          Oktober 2006, mereka memulai pelayanan di Gading Serpong, dengan tetap
          menggunakan rumah kontrakan di sektor 8A Jl. Kelapa Molek X, Blok FB4
          No.5.
        </Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.textontent}>
          Jumat, 06 Oktober 2006, Ibadah Pemuda-Remaja pertama kali diadakan,
          dan tangal ini dijadikan ulang tahun pemuda GPdI Hebron.
        </Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.textontent}>
          Selasa, 10 Oktober 2006, pertama kali Pdt. Raimond Sumaa melayani
          persekutuan doa dewasa di rumah Bp. Timotius di Sektor 1A.
        </Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.textontent}>
          Pada tahun 2008, rumah kontrakan pindah alamat tetapi tetap di Sektor
          8A, yaitu di Jl. Kelapa Molek XIV Blok FB8/No.23. Di tempat inilah
          mulai dibuka ibadah umum hari minggu sore.
        </Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.textontent}>
          4. Perjalanan Pelayanan. Tahun 2007, dibuka Pelayanan anak di Sektor
          7A di kediaman Bp. Laksana.
        </Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.textontent}>
          Tahun 2008, dibuka Pelayanan Anak di Cluster Calcedony, Pondok Hijau
          Golf (PHG).
        </Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.textontent}>
          Tahun 2009, dibentuk Pelayanan Penginjilan Anak melalui Panggung
          Boneka, yang salah satu tujuannya adalah untuk melatih anak-anak
          remaja melayani Tuhan di beberapa gereja sekitar Jabodetabek.
        </Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.textontent}>
          Pada tgl. 1 Februari 2012, sebuah langkah besar dijalankan : menyewa
          ruko untuk dijadikan tempat ibadah, yaitu di Ruko Tematik Blok N 15
          Komplek Pasar Modern Paramount Gading Serpong. Pada tahun ini, mulai
          diperkenalkan nama gereja, yaitu GPdI Hebron.
        </Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.textontent}>
          Sejak 2012 itulah perjalanan GPdI Hebron semakin berkembang dalam
          menumbuhkan pekerjaan Tuhan, baik dalam hal pertumbuhan rohani maupun
          pertumbuhan jumlah jemaat Tuhan.
        </Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.textontent}>
          Pada tanggal 01 Januari 2021, alamat gereja pindah ke ruko Tematik
          Blok L/39. Atas ruko tersebut, GPdI Hebron melakukan perjanjian sewa
          beli dengan pemiliknya.
        </Text>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.textontent}>
          Saat ini GPdI Hebron diberi perluasan dalam beberapa divisi, yaitu :
          Anak, Remaja, Pemuda, Keluarga Muda dan Dewasa-Lansia. GPdI Hebron
          terus fokus dalam pertumbuhan kualitas rohani jemaat dan pelayanan,
          mempersiapkan diri menjadi gereja yang sempurna.
        </Text>
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
