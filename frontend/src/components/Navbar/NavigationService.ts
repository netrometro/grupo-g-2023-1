import { NavigationContainerRef } from "@react-navigation/native";
import React from "react";
import { LockScreenParamList } from "../../types/PagesTypeList";

export const navigationRef =
  React.createRef<NavigationContainerRef<LockScreenParamList>>();

export function navigate(route: keyof LockScreenParamList) {
  navigationRef.current?.navigate(route);
}
