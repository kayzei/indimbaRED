import React from 'react';

export interface SubMenuItem {
  name: string;
  href: string;
}

export interface SubMenu {
  title:string;
  items: SubMenuItem[];
}

export interface MenuItem {
  name: string;
  href: string;
  subMenus?: SubMenu[];
  isIcon?: boolean;
  icon?: React.ReactNode;
}