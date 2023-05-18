import React from "react";
import { SafeAreaView, Image, ScrollView } from "react-native";
import styles from "./styles";
import RenderHtml from "react-native-render-html";
import { screenWidth } from "../../utils";

type Props = {
  route: any;
};

const DetailScreen: React.FC<Props> = ({ route }) => {
  const { banner, content } = route.params.blogDetails;

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Image source={{ uri: banner }} style={styles.banner} />
      <ScrollView>
        <RenderHtml
          contentWidth={screenWidth * 0.95}
          baseStyle={styles.content}
          source={{ html: content }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
