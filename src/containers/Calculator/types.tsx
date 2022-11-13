import React from "react";

export type ButtonMeta = {
  text: string;
  type: 'double' | 'single';
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type OperationItem = {
  text: string;
  type: 'action' | 'number';
};
