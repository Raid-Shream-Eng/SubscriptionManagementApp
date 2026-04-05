import "@/global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Sans-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Sans-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Sans-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "Sans-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Sans-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Sans-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }}> </Stack>;
}
