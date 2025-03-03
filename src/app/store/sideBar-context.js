"use client";
import { createContext, use, useState } from "react";

const SideBarContext = createContext();

export function useSideBarContext() {
  return use(SideBarContext);
}

export function ToggleSideBarProvider({ children }) {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  function handleToggleSideBar() {
    setToggleSideBar(!toggleSideBar);
  }

  const contextValue = {
    toggleSideBar,
    handleToggleSideBar,
  };

  return <SideBarContext value={contextValue}>{children}</SideBarContext>;
}
