import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  { title: 'Dashboard', icon: 'nb-home', link: '/dashboard', home: true },
    {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Items',
    icon: 'fa fa-shopping-basket',
    link: '/dashboard/items'
  }
];
