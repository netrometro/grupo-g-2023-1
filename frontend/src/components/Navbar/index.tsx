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
function Navbar({ navigation }: AuthScreenProps) {
  const iconSize = 40;
  const [selectedIcon, setSelectedIcon] = React.useState("home");
  const isIconFilled = (iconWeight: string) => {
    return selectedIcon === iconWeight ? "fill" : "regular";
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconsDivider}>
        <TouchableOpacity
          onPress={() => {
            setSelectedIcon("Gift"), navigation.navigate("Gifts");
          }}
        >
          <Gift size={iconSize} color="#5A875D" weight={isIconFilled("Gift")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedIcon("Bell"), navigation.navigate("Notifications");
          }}
        >
          <Bell size={iconSize} color="#5A875D" weight={isIconFilled("Bell")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedIcon("House"), navigation.navigate("Home");
          }}
        >
          <House
            size={iconSize}
            color="#5A875D"
            weight={isIconFilled("House")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedIcon("Star"), navigation.navigate("EcoRank");
          }}
        >
          <GlobeHemisphereWest
            size={iconSize}
            color="#5A875D"
            weight={isIconFilled("Star")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedIcon("UserCircle")}>
          <UserCircle
            size={iconSize}
            color="#5A875D"
            weight={isIconFilled("UserCircle")}
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
