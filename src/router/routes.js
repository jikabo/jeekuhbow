
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', name: 'index', component: () => import('pages/index') },
      { path: 'christening', name: 'christening', component: () => import('pages/package') },
      { path: 'birthday', name: 'birthday', component: () => import('pages/package') },
      { path: 'party', name: 'party', component: () => import('pages/package') },
      { path: 'debut', name: 'debut', component: () => import('pages/package') },
      { path: 'wedding', name: 'wedding', component: () => import('pages/package') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
