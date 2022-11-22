
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ArticuloPrincipal.vue') },
      { path: 'movil/:idMovil', component: () => import('pages/verMovil.vue') },
      { path: 'crear/:idCrear', component: () => import('pages/crearAnuncio.vue') }
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
