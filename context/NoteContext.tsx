"use client";

import React, { Dispatch, createContext, useReducer } from "react";
type StateType = {};

type ActionType = {
  type: string;
  payload?: any;
};

const initialState: StateType = {
  library: [],
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const NoteContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const NoteState = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};
