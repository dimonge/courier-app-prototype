/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SigninScreen from "../screens/auth/SigninScreen";
import ResetPasswordScreen from "../screens/auth/ResetPassword";

import MapView from "../screens/map/MapView";

import { TaskListScreen } from "../screens/task/TaskList";
import NewTaskAlertScreen from "../screens/task/NewTaskAlertScreen";
import NewTaskDetailScreen from "../screens/task/NewTaskDetailScreen";
import ArrivalScreen from "../screens/task/ArrivalScreen";
import WaitingForTaskScreen from "../screens/task/WaitingForTaskScreen";
import { BottomSheet } from "../components";

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  resetpassword: undefined;
  tasklist: undefined;
  signin: undefined;
  map: undefined;
  bottomsheet: undefined;
  newtaskalert: undefined;
  newtaskdetail: undefined;
  taskarrival: undefined;
  waitingfortask: undefined;
};

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<PrimaryParamList>();

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="taskarrival" component={ArrivalScreen} />
      <Stack.Screen name="waitingfortask" component={WaitingForTaskScreen} />
      <Stack.Screen name="newtaskdetail" component={NewTaskDetailScreen} />
      <Stack.Screen name="newtaskalert" component={NewTaskAlertScreen} />
      <Stack.Screen name="map" component={MapView} />
      <Stack.Screen name="bottomsheet" component={BottomSheet} />
      <Stack.Screen name="resetpassword" component={ResetPasswordScreen} />
      <Stack.Screen name="signin" component={SigninScreen} />
      <Stack.Screen name="tasklist" component={TaskListScreen} />
    </Stack.Navigator>
  );
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["home"];

export const canExit = (routeName: string) => exitRoutes.includes(routeName);
