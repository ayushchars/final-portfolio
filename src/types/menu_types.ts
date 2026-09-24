

export interface MenuItem {
  id: number;
  title: string;
  link?: string;
  has_dropdown?: boolean;
  mega_menu?: boolean;
  demo?: string;
  sub_menus?: MenuItem[];
}