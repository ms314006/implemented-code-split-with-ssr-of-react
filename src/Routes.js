import loadable from '@loadable/component';
import App from './App';

export default [{
  ...App,
  routes: [
    {
      component: loadable(() => import('./pages/Content'), {
        resolveComponent: (module) => module.default.component
      }),
      loadData: import('./pages/Content'),
      path: '/',
      exact: true,
    }, {
      component: loadable(() => import('./pages/NotFound'), {
        resolveComponent: (module) => module.default.component
      }),
    },
  ],
}];
