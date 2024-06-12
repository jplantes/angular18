import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./portal/modules/control-flujo/layout/control-de-flujo-layuot/control-de-flujo-layuot.component'),
    children: [
      {
        path: 'signals',
        loadComponent: () => import('./portal/modules/control-flujo/pages/signals/signals.component')
      },

      {
        path: '',
        redirectTo: 'signals',
        pathMatch: 'full',
      },

    ]
  },
];
