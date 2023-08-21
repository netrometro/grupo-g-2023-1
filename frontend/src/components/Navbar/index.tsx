import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  Gift,
  Bell,
  Star,
  UserCircle,
  House,
  GlobeHemisphereWest,
} from "phosphor-react-native";
import { AuthScreenProps } from "../../types/PagesTypeList";
import { useRoute } from "@react-navigation/core";
function Navbar({ navigation }: AuthScreenProps) {
  const route = useRoute();
  const iconSize = 40;
  const [selectedIcon, setSelectedIcon] = React.useState("home");
  const isIconFilled = (iconWeight: string) => {
    return selectedIcon === iconWeight ? "fill" : "regular";
  };
  React.useEffect(() => {
    setSelectedIcon(route.name);
    console.log(route.name);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.iconsDivider}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Gifts");
          }}
        >
          <Gift
            size={iconSize}
            color="#5A875D"
            weight={isIconFilled("Gifts")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <House
            size={iconSize}
            color="#5A875D"
            weight={isIconFilled("Home")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EcoRank");
          }}
        >
          <GlobeHemisphereWest
            size={iconSize}
            color="#5A875D"
            weight={isIconFilled("EcoRank")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <UserCircle
            size={iconSize}
            color="#5A875D"
            weight={isIconFilled("Profile")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Navbar;
const styles = StyleSheet.create({
  container: {
    height: 45,
    width: "100%",
    backgroundColor: "#C8E6C9",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  iconsDivider: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});
