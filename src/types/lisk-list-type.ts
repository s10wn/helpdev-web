import type { ComponentType } from "react";

export type LiskListType = {
  id?: number;
  title: string;
  icon: ComponentType;
  link: string;
};
