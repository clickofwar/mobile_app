import React from "react";
import SettingsScreen from "../components/settings/SettingsScreen";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { logout, changeTeams } from "../redux/reducers/userSlice";

export default function SettingsContainer(props: any) {
  const { navigation } = props;
  const dispatch = useAppDispatch();

  return (
    <SettingsScreen
      logout={() => dispatch(logout())}
      navigation={navigation}
      changeTeams={() => dispatch(changeTeams())}
    />
  );
}
