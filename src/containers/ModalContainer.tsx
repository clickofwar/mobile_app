import React from "react";
import Modal from "../components/common/Modal";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { close, modalData } from "../redux/reducers/modalSlice";

export default function ModalContainer() {
  const _modalData = useAppSelector(modalData);
  const dispatch = useAppDispatch();
  console.log({ _modalData });

  const { data, isShowing } = _modalData;

  if (!isShowing) {
    return null;
  }
  return <Modal data={data} callback={() => dispatch(close())} />;
}
