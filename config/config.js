import { defineConfig } from 'umi';

export default defineConfig({
  dva: {},
  antd: {},
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/login',
          component: 'Login',
        },
      ],
    },
    {
      path: '/register',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'register',
          path: '/register',
          component: 'Register',
        },
      ],
    },
    {
      path: '/system',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/system',
          redirect: '/system/tokenHolder',
        },
        {
          name: 'tokenHolder',
          path: '/system/tokenHolder',
          component: './tokenHolder/',
        },
        {
          name: 'tokenReceive',
          path: '/system/tokenReceive',
          component: './tokenReceive/',
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
});
