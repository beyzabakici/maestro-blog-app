import React from "react";
import { SvgEnum } from "../../utils";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { TextStyle, TouchableOpacity } from "react-native";

type Props = {
  name: SvgEnum;
  iconStyle?: TextStyle;
  onPress?: (...args: any[]) => void;
};

const Icon: React.FC<Props> = ({ name, iconStyle, onPress = undefined }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <Ionicons name={name} style={{ ...styles.icon, ...iconStyle }} />
    </TouchableOpacity>
  );
};

export default Icon;
