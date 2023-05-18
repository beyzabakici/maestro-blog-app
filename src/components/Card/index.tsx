import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { BlogResponseType, SvgEnum, formatDateString } from "../../utils";
import Icon from "../Icon";

type Props = {
  item: BlogResponseType;
  goToBlogDetail: (...args: any[]) => void;
};

const Card: React.FC<Props> = ({ item, goToBlogDetail }) => {
  const { image, title, summary, createdAt, totalReadingTime } = item;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => goToBlogDetail(item)}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.descriptionArea}>
        <View style={{ ...styles.row, ...styles.timeArea }}>
          <View style={styles.row}>
            <Icon name={SvgEnum.write} iconStyle={styles.icon} />
            <Text style={styles.date}>{formatDateString(createdAt)}</Text>
          </View>
          <View style={styles.row}>
            <Icon name={SvgEnum.time} iconStyle={styles.icon} />
            <Text style={styles.date}>{`${totalReadingTime} dk`}</Text>
          </View>
        </View>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={styles.summary} numberOfLines={3} ellipsizeMode="tail">
          {summary}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
