import React from "react";
import TeamScreen from "../components/team/TeamScreen";
import {
  userSetTeam,
  userTeamData,
  userData,
} from "../redux/reducers/userSlice";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import Loading from "../components/common/Loading";

export default function TeamContainer(props: any) {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const _userTeamData = useAppSelector(userTeamData);
  const _userData = useAppSelector(userData);

  if (_userData?.team === "light" || _userData?.team === "dark") {
    navigation.navigate("Home");
  }

  if (_userTeamData?.isLoading) {
    return <Loading title="Setting your Team" />;
  }

  if (_userTeamData?.error) {
    return <Loading title="Error setting your Team" />;
  }

  return <TeamScreen userSetTeam={(e: any) => dispatch(userSetTeam(e))} />;
}
