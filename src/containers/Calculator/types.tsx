import React from "react";
import { Action } from "./enums";

export type ButtonMeta = {
  text: string;
  type: 'double' | 'single';
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
