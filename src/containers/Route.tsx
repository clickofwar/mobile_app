import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { stateData } from "../redux/reducers/userSlice";
import { getCMS, cmsData } from "../redux/reducers/cmsSlice";

import LoginContainer from "./LoginContainer";
import SignupContainer from "./SignupContainer";
import HomeContainer from "./HomeContainer";
import PasswordContainer from "./PasswordContainer";
import Loading from "../components/common/Loading";
import { registerForPushNotificationsAsync } from "../helpers/pushNotifications";

const Stack = createNativeStackNavigator();

export default function Route() {
  const _stateData = useAppSelector(stateData);
  const _cmsData = useAppSelector(cmsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCMS());
    registerForPushNotificationsAsync();
  }, []);

  if (_stateData?.state?._persist?.rehydrated && _cmsData.data) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginContainer} />
          <Stack.Screen name="Signup" component={SignupContainer} />
          <Stack.Screen name="Home" component={HomeContainer} />
          <Stack.Screen name="Password" component={PasswordContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    if (_stateData?.state?._persist?.rehydrated) {
      return <Loading title="Loading Persist Data" />;
    } else {
      return <Loading title="Loading CMS Data" />;
    }
  }
}
