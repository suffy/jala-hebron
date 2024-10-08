import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { wp, hp } from "./../helpers/common";
import Animated, { FadeInDown } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "./../constants/theme";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("./../assets/images/welcome3.jpg")}
        style={styles.bgImage}
        resizeMode="cover"
      />
      {/* linear gradient */}
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.1)",
            "white",
            "white",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1.3 }}
        />
        {/* content */}
        <View style={styles.contentContainer}>
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={styles.title}
          >
            Yayasan Kasih Jala Hebron
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(500).springify()}
            style={styles.punchline}
          >
            Konseling - Kemanusiaan - Pelayanan - Beasiswa
          </Animated.Text>
          <Animated.View
            entering={FadeInDown.delay(600).springify()}
            style={styles.startButton}
          >
            <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
              <Text style={styles.startText}>Start Explore</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    height: hp(100),
    width: wp(100),
    position: "absolute",
  },
  container: {
    flex: 1,
  },
  gradient: {
    width: wp(100),
    height: hp(65),
    bottom: 0,
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 14,
  },
  title: {
    fontSize: hp(4),
    color: theme.colors.neutral(0.9),
    fontWeight: theme.fontWeights.bold,
  },
  punchline: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: theme.fontWeights.medium,
    // alignContent: "center",
    // alignItems: "center",
    // justifyContent: "center",
    // display: "flex",
  },
  startButton: {
    marginBottom: 50,
    backgroundColor: theme.colors.neutral(0.9),
    padding: 15,
    paddingHorizontal: 90,
    borderRadius: theme.radius.xl,
    borderCurve: "continuous",
  },
  startText: {
    color: theme.colors.white,
    fontSize: hp(3),
    fontWeight: theme.fontWeights.medium,
    letterSpacing: 1,
  },
});

export default WelcomeScreen;
