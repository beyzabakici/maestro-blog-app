import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { BlogResponseType, formatDateString } from "../../utils";

type Props = {
  item: BlogResponseType;
};

const Card: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.descriptionArea}>
        <Text style={styles.date}>{formatDateString(item.createdAt)}</Text>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text style={styles.summary} numberOfLines={3} ellipsizeMode="tail">
          {item.summary}
        </Text>
      </View>
    </View>
  );
};

export default Card;
