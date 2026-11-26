export default [
  {
    path: '/',
    component: '@/layouts/GlobalLayout',
    routes: [
      { path: '/', component: './Guide' },
      { path: '/cube', component: './Cube' },
    ],
  },
];
