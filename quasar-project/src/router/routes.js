const routes = [
  // index page
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

    // test tutorial page -- with exported layout
    {
      path: '/me',
      component: () => import('layouts/ExportLayout.vue'),
      children: [
        { path: '', component: () => import('pages/MePage.vue') }
      ]
    },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
