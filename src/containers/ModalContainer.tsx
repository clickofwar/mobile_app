import React from "react";
import Modal from "../components/common/Modal/Modal";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {
  closeCMS,
  close,
  modalCMSData,
  modalData,
} from "../redux/reducers/modalSlice";
import { userData } from "../redux/reducers/userSlice";

export default function ModalContainer() {
  const _modalCMSData = useAppSelector(modalCMSData);
  const _modalData = useAppSelector(modalData);
  const _userData = useAppSelector(userData);
  const dispatch = useAppDispatch();

  const { dataCMS, isShowingCMS } = _modalCMSData;
  const { data, isShowing } = _modalData;
  const { email } = _userData;

  if (isShowingCMS && email) {
    return (
      <Modal
        isPopup={true}
        image={dataCMS.image}
        title={dataCMS.title}
        description={dataCMS.description}
        backgroundColor={dataCMS.backgroundColor}
        callback={() => dispatch(closeCMS())}
      />
    );
  }

  if (isShowing) {
    return (
      <Modal
        isPopup={data.isPopup}
        image={data.image}
        title={data.title}
        description={data.description}
        backgroundColor={data.backgroundColor}
        primaryButton={data.primaryButton}
        secondaryButton={data.secondaryButton}
        callback={() => dispatch(close())}
      />
    );
  }

  return null;
}
