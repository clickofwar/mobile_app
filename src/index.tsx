import React, { useEffect } from "react";
import Route from "./containers/Route";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { stateData, setPushNotificationId } from "./redux/reducers/userSlice";
import { getCMS, cmsData } from "./redux/reducers/cmsSlice";
import Loading from "./components/common/Loading";
import { registerForPushNotificationsAsync } from "./helpers/pushNotifications";
import ModalContainer from "./containers/ModalContainer";
import ShopContainer from "./containers/ShopContainer";

export default function Index() {
  const _stateData = useAppSelector(stateData);
  const _cmsData = useAppSelector(cmsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //Grab Content Management System Data
    dispatch(getCMS());
    //Set Push Notifications Id to Redux State
    registerForPushNotificationsAsync().then((data) =>
      dispatch(setPushNotificationId(data))
    );
  }, []);

  if (!_stateData?.state?._persist?.rehydrated) {
    return <Loading title="Loading Persist Data" />;
  }

  if (_cmsData?.isLoading) {
    return <Loading title="Loading CMS Data" />;
  }

  if (!_cmsData?.data?.validCMS) {
    return <Loading title="Error with CMS Data" />;
  }

  return (
    <>
      <Route />
      <ModalContainer />
      <ShopContainer />
    </>
  );
}
