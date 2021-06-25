import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import List from "../views/listView";
import Detail from "../views/detailView";

export default function Routes() {
  return (
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="List" component={List} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>
  );
}