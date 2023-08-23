import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Gift,
  UserCircle,
  House,
  GlobeHemisphereWest,
  PlusCircle,
} from "phosphor-react-native";
import { AuthScreenProps } from "../../types/PagesTypeList";
import { useRoute } from "@react-navigation/core";
import AddModal from "../Modal";
function Navbar({ navigation }: AuthScreenProps) {
  const route = useRoute();
  const iconSize = 40;
  const [selectedIcon, setSelectedIcon] = React.useState("");
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const hideModal = () => {
    setIsModalVisible(false);
  };
  const isIconFilled = (iconWeight: string) => {
    return selectedIcon === iconWeight ? "fill" : "regular";
  };
  React.useEffect(() => {
    setSelectedIcon(route.name);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.iconsDivider}>
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
            navigation.navigate("Gifts");
          }}
        >
          <Gift
            size={iconSize}
            color="#5A875D"
            weight={isIconFilled("Gifts")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={showModal}>
          <AddModal onHideModal={hideModal} />
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
            navigation.navigate("UserProfile");
          }}
        >
          <UserCircle
            size={iconSize}
            color="#5A875D"
            weight={isIconFilled("UserProfile")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Navbar;
const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: "#C8E6C9",
    position: "absolute",
    bottom: 0,
  },
  iconsDivider: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
});
