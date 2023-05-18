import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { addFavorites, useAppDispatch, useAppSelector } from "./redux";
import { Colors, SvgEnum } from "./utils";
import { HomeScreen, DetailScreen } from "./screens";
import { Icon, TouchableOpacity } from "./components";

const Stack = createNativeStackNavigator();

const Router = () => {
  const { favoriteIdList } = useAppSelector((state) => state.blog);
  const [visibleFavorites, setVisibleFavorites] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddToFavorites = (postId) => {
    dispatch(addFavorites(postId));
  };

  const handleButtonPress = (navigation) => {
    setVisibleFavorites(!visibleFavorites);
    navigation.setParams({ visibleFavorites: !visibleFavorites });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: Colors.primaryGreen,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.backgroundBeige,
          },
        }}
      >
        <Stack.Screen
          name="Maestro Blog"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Icon
                name={visibleFavorites ? SvgEnum.book : SvgEnum.bookOutline}
                onPress={() => handleButtonPress(navigation)}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Detail Screen"
          component={DetailScreen}
          options={({ route }) => ({
            headerRight: () => (
              <Icon
                name={
                  favoriteIdList.includes(route.params.blogDetails.postId)
                    ? SvgEnum.favorite
                    : SvgEnum.favoriteOutline
                }
                onPress={() =>
                  handleAddToFavorites(route.params.blogDetails.postId)
                }
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
