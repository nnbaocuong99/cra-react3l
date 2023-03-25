import { ReactNode } from "react";

export interface Menu {
  name?: string;
  icon?: string | ReactNode;
  link: string;
  children?: Menu[];
  active?: boolean;
  show?: boolean;
}
