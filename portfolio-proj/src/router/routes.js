import PortfolioLayout from "layouts/PortfolioLayout.vue";
import IndexPage from "pages/IndexPage.vue";
import ProjectsPage from "pages/ProjectsPage.vue";

const routes = [
  {
    path: "/",
    component: PortfolioLayout,
    children: [
      { path: "", component: IndexPage },
      { path: "projects", component: ProjectsPage },
    ],
  },
];

export default routes;

// const routes = [
//   {
//     path: '/',
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       { path: '', component: () => import('pages/IndexPage.vue') }
//     ]
//   },

//   // Always leave this as last one,
//   // but you can also remove it
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('pages/ErrorNotFound.vue')
//   }
// ]

// export default routes
