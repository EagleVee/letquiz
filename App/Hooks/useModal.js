import React, { useContext } from "react";
import { AppModalContext } from "../Providers/ModalProvider";

export function useModal() {
  return useContext(AppModalContext);
}
