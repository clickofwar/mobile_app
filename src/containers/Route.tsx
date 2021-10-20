import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { stateData } from "../redux/reducers/userSlice";
import { getCMS, cmsData } from "../redux/reducers/cmsSlice";

//import { db } from "../../firebase";

import LoginContainer from "./LoginContainer";
import SignupContainer from "./SignupContainer";
import HomeContainer from "./HomeContainer";
import Loading from "../components/common/Loading";

const Stack = createNativeStackNavigator();

export default function Route() {
  const _stateData = useAppSelector(stateData);
  const _cmsData = useAppSelector(cmsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCMS());
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
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    if (!_cmsData) {
      return <Loading title="Loading CMS Data" />;
    }
    return <Loading title="Loadind Persist Data" />;
  }
}
