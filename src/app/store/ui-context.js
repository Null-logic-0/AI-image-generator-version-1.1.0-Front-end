"use client";
import { createContext, use, useReducer } from "react";

const UIContext = createContext();

export function useUIContext() {
  return use(UIContext);
}

const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
const TOGGLE_MODAL = "TOGGLE_MODAL";

function uiReducer(state, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, toggleSideBar: !state.toggleSideBar };
    case TOGGLE_MODAL:
      return { ...state, openModal: !state.openModal };
    default:
      return state;
  }
}

const initialState = {
  toggleSideBar: false,
  openModal: false,
};

export function UiContextProvider({ children }) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const contextValue = {
    toggleSideBar: state.toggleSideBar,
    openModal: state.openModal,
    notification: state.notification,
    showNotification,
    handleToggleModal: () => dispatch({ type: TOGGLE_MODAL }),
    handleToggleSideBar: () => dispatch({ type: TOGGLE_SIDEBAR }),
  };

  return <UIContext value={contextValue}>{children}</UIContext>;
}
