import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { fetchData, useAppDispatch, useAppSelector } from "../../redux";
import { Card } from "../../components";
import styles from "./styles";
import { FlashList } from "@shopify/flash-list";
import { BlogResponseType, emptyText } from "../../utils";

type Props = { navigation: any; route: any };

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  const { data, favoriteIdList } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [listData, setListData] = useState<BlogResponseType[]>([]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const goToBlogDetail = (blog: BlogResponseType) => {
    navigation.navigate("Detail Screen", { blogDetails: blog });
  };

  const onRefreshList = () => {
    dispatch(fetchData());
    setRefreshing(false);
  };

  useEffect(() => {
    if (data?.result) {
      const filteredData = data.result.filter((item) =>
        favoriteIdList.includes(item.postId)
      );
      setListData(filteredData);
    }
  }, [data, favoriteIdList]);

  const emptyComponent = () => {
    return <Text style={styles.emptyText}>{emptyText}</Text>;
  };
  return (
    <SafeAreaView style={styles.screenContainer}>
      <FlashList
        data={route?.params?.visibleFavorites ? listData : data?.result}
        renderItem={({ item }: { item: BlogResponseType }) => (
          <Card item={item} goToBlogDetail={goToBlogDetail} />
        )}
        estimatedItemSize={200}
        onRefresh={onRefreshList}
        refreshing={refreshing}
        ListEmptyComponent={emptyComponent()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
