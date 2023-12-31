import { ReactNode } from "react";

export interface ComponentCommon {
  children?: ReactNode;
  className?: string;
}

export interface SubChild {
  icon: any;
  navlink: string;
  navhref: string;
  hasChilds: boolean;
  SuperSubChildsData?: SubChild[] | undefined;
}

export interface NavListItem {
  icon?: any;
  navlink: string;
  navhref: string;
  hasChilds: boolean;
  subChildsData?: SubChild[] | undefined;
}
