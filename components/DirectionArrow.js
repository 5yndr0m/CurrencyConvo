import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DirectionArrow =({ isReversed, onPress }) => { 
  return (
    <TouchableOpacity
      onPress={onPress}
      styles={styles.container}
    >
      <MaterialCommunityIcons
        name={isReversed ? "arrow-up" : "arrow-down"}
        size={24}
        color="#6200ee"
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
})

export default DirectionArrow;