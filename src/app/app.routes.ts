import { Product } from './models/product';
import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [

{
  path: 'dashboard',
  title: 'Inicio',
  loadComponent: () => import('./dashboard/dashboard.component'),
  children:[
    {
      path: 'change-detection',
      title: 'Gestion de Inventario',
      loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
    },
    {
      path: 'control-flow',
      title: 'Gestion de Ventas',
      loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
    },
    {
      path: 'defer-options',
      title: 'Reportes',
      loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
    },
    {
      path: 'defer-views',
      title: 'Gestion de Clientes',
      loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
    },
    {
      path: 'users-list',
      title: 'Gestion de Usuarios',
      loadComponent: () => import('./dashboard/pages/users/users.component'),
    },
    {
      path: 'view-transition',
      title: 'Configuracion',
      loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component'),
    },
    {
      path:'', redirectTo: 'control-flow', pathMatch: 'full',
    }
  ]
},
{
  path:'',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}


];
