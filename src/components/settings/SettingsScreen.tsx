import React from "react";
import { CenterView } from "../common/Views";
import Button from "../common/Button";
import { useAppDispatch } from "../../hooks/hooks";
import { update, close } from "../../redux/reducers/modalSlice";

export default function SettingsScreen(props: any) {
  const { logout, navigation, changeTeams } = props;
  const dispatch = useAppDispatch();

  return (
    <CenterView>
      <Button
        onPress={() =>
          dispatch(
            update({
              data: {
                title: "dude",
                description: "Short Description",
                primaryButton: {
                  title: "Okay",
                  callback: close(),
                },
                secondaryButton: {
                  title: "Cancel",
                  callback: close(),
                },
              },
            })
          )
        }
        title="Show Modal"
        isText={true}
      />
      <Button
        title="Change Teams"
        onPress={() => changeTeams()}
        isText={true}
      />

      <Button
        title="Back"
        isSecondary={true}
        onPress={() => navigation.navigate("Home")}
        buttonStyle={{ marginTop: 20 }}
      />
      <Button
        title="Logout"
        isSecondary={true}
        onPress={logout}
        buttonStyle={{ marginTop: 20 }}
      />
    </CenterView>
  );
}
