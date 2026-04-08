import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'teacher',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'teacher',
        exposedModule: './Routes',
      }).then((m) => m.routes),
  },

  {
    path: 'student',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'student',
        exposedModule: './Routes',
      }).then((m) => m.routes),
  },

  {
    path: 'library',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'library',
        exposedModule: './Routes',
      }).then((m) => m.routes),
  },

  {
    path: '',
    redirectTo: 'student',
    pathMatch: 'full',
  },

  // loading component when there is no route in the remote app

  // {
  //   path: 'remote1',
  //   loadComponent: () =>
  //     loadRemoteModule({
  //       remoteName: 'remote1',
  //       exposedModule: './Component',
  //     }).then((m) => m.AppComponent),
  // },
];
