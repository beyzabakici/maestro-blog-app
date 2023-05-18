import React, { useEffect } from "react";
import { SafeAreaView, Image, ScrollView } from "react-native";
import styles from "./styles";
import RenderHtml from "react-native-render-html";
import { SvgEnum, screenWidth } from "../../utils";

type Props = {
  route: any;
  navigation: any;
  isFavorite: boolean;
};

const DetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { banner, content, title, postId } = route.params.blogDetails;

  useEffect(() => {
    navigation.setOptions({ headerTitle: title });
  }, []);

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
