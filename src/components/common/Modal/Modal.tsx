import React from "react";
import FullScreenModal from "./FullScreenModal";
import PopupModal from "./PopupModal";

export default function Modal(props: any) {
  const { isPopup } = props;

  if (isPopup) {
    return <PopupModal {...props} />;
  }

  return <FullScreenModal {...props} />;
}
