import Vue from 'vue';
import Router from 'vue-router';
import index from '@/views/index.vue';
import NotFound from '@/views/not_found.vue';
import detail from '@/views/detail.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    {
      path: '/',
        component: index,
        meta: {
          title: '活动',
            },
      }, {
        path: '/detail/:id?',
          component: detail,
          meta: {
              title: '商品详情',
            },
      }, {
        path: '/index.:jw?',
          component: index,
          meta: {
              title: '活动',
            },
      },
   {
      path: '*',
      component: NotFound,
  },
  ],
});
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
