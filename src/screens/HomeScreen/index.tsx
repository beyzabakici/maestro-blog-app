import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import { fetchData, useAppDispatch, useAppSelector } from "../../redux";
import { Card } from "../../components";
import styles from "./styles";
import { FlashList } from "@shopify/flash-list";
import { BlogResponseType, emptyText } from "../../utils";

type Props = { navigation: any; route: any };

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  const { data, favoriteIdList, loading } = useAppSelector(
    (state) => state.blog
  );
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [listData, setListData] = useState<BlogResponseType[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(fetchData(page));
  }, [dispatch]);

  const goToBlogDetail = (blog: BlogResponseType) => {
    navigation.navigate("Detail Screen", { blogDetails: blog });
  };

  const onRefreshList = () => {
    setPage(1);
    dispatch(fetchData(page));
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

  const footerIndicator = () => {
    return loading ? (
      <View
        style={{
          paddingVertical: 20,
        }}
      >
        <ActivityIndicator animating size="small" />
      </View>
    ) : null;
  };

  const fetchMoreData = () => {
    setPage(page + 1);
    dispatch(fetchData(page));
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
        onEndReached={fetchMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={footerIndicator}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
