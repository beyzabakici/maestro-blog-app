import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";

type Props = {
  route: any;
  navigation: any;
};

const HomeScreen: React.FC<Props> = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text>mbb</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
