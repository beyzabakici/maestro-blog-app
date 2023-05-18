import React from "react";
import { SvgEnum } from "../../utils";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { TextStyle } from "react-native";

type Props = {
  name: SvgEnum;
  iconStyle?: TextStyle;
};

const Icon: React.FC<Props> = ({ name, iconStyle }) => {
  return <Ionicons name={name} style={{ ...styles.icon, ...iconStyle }} />;
};

export default Icon;
