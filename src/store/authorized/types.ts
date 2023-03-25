import { ReactNode } from "react";

export interface Menu {
    name?: string;
    icon?: string | ReactNode;
    link: string;
    children?: Menu[];
    active?: boolean;
    show?: boolean;
  }

export enum AUTHORIZED {
    UPDATE_AUTHORIZED_ALL,
    UPDATE_AUTHORIZED_MENU,
    UPDATE_AUTHORIZED_ACTION,
    UPDATE_AUTHORIZED_MENU_MAPPER
}

export interface AuthorizedModel {
    authorizedMenu: Menu[],
    authorizedAction: string[],
    authorizedMenuMapper: Record<string, number>
}