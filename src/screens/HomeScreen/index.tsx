import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import {
  AppDispatch,
  fetchData,
  useAppDispatch,
  useAppSelector,
} from "../../redux";
import { Card } from "../../components";
import styles from "./styles";
import { FlashList } from "@shopify/flash-list";
import { BlogResponseType } from "../../utils";

type Props = { navigation: any };

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { data } = useAppSelector((state) => state.blog);
  const dispatch: AppDispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const goToBlogDetail = (blog: BlogResponseType) => {
    navigation.navigate("Detail Screen", { blogDetails: blog });
  };

  const onRefreshList = () => {
    dispatch(fetchData());
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      {!!data && (
        <FlashList
          data={data.result}
          renderItem={({ item }: { item: BlogResponseType }) => (
            <Card item={item} goToBlogDetail={goToBlogDetail} />
          )}
          estimatedItemSize={200}
          onRefresh={onRefreshList}
          refreshing={refreshing}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
