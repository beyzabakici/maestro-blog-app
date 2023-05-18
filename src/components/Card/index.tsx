import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { BlogResponseType, formatDateString } from "../../utils";

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
          <Text style={styles.date}>{formatDateString(createdAt)}</Text>
          <Text style={styles.totalReadingTime}>{`${totalReadingTime} dk`}</Text>
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
