// assets
import {
  IconHome,
  IconDashboard,
  IconSitemap,
  IconArticle,
  IconCoin,
  IconAdjustments,
  IconKey,
  IconGardenCart,
  IconUser,
  IconUserScan,
  IconInfoCircle,
  IconBrandGoogleAnalytics
} from '@tabler/icons-react';

// constant
const icons = { IconHome, IconDashboard, IconSitemap, IconArticle, IconCoin, IconAdjustments, IconKey, IconGardenCart, IconUser, IconUserScan,IconInfoCircle,IconBrandGoogleAnalytics };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const panel = {
  id: '/',
  type: 'group',
  children: [
    {
      id: 'home',
      title: '首页',
      type: 'item',
      url: '/home',
      icon: icons.IconHome,
      breadcrumbs: false,
      isAdmin: false
    },
    {
      id: 'dashboard',
      title: '总览',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false,
      isAdmin: false
    },
    {
      id: 'token',
      title: '令牌',
      type: 'item',
      url: '/token',
      icon: icons.IconKey,
      breadcrumbs: false
    },
    //{
    //  id: 'mjlog',
    //  title: 'MJ绘画',s
    //  type: 'item',
    //  url: '/mjlog',
    //  icon: icons.IconArticle,
    //  breadcrumbs: false
    //},
    {
      id: 'topup',
      title: '钱包',
      type: 'item',
      url: '/topup',
      icon: icons.IconGardenCart,
      breadcrumbs: false
    },
    {
      id: 'model',
      title: '价格',
      type: 'item',
      url: '/model',
      icon: icons.IconSitemap,
      breadcrumbs: false
    },
    {
      id: 'log',
      title: '日志',
      type: 'item',
      url: '/log',
      icon: icons.IconBrandGoogleAnalytics,
      breadcrumbs: false
    },
    // {
    //   id: 'profile',
    //   title: '设置',
    //   type: 'item',
    //   url: '/profile',
    //   icon: icons.IconUserScan,
    //   breadcrumbs: false,
    // },
    {
      id: 'about',
      title: '关于',
      type: 'item',
      url: '/about',
      icon: icons.IconInfoCircle,
      breadcrumbs: false
    }
  ]
};

export default panel;
