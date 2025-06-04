import { inject, NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { PrimengComponent } from './primeng/primeng.component';
import { User } from './userdetails/user/user';
import { map } from 'rxjs';
import { Userdetails } from './userdetails/userdetails';

const ROUTES: Routes = [
  {path: 'mat', component: MaterialComponent},
  {path: 'PrimengComponent', component: PrimengComponent},
  {path: 'Userdetails', component: Userdetails},
  // {
  //   path: '**',
  //   redirectTo: () => {
  //     const router = inject(Router);
  //     const authService = inject(AuthService);
  //     return authService.isAuthorized$.pipe(
  //       map((isAuthorized) =>
  //         router.createUrlTree([`/${isAuthorized ? 'home' : 'login'}`]),
  //       ),
  //     );
  //   },
  // },
];

// export const routeConfig: ServerRoute = [
//   { path: '/login', mode: RenderMode.Server },
//   { path: '/dashboard', mode: RenderMode.Client },
//   {
//     path: '/product/:id',
//     mode: RenderMode.Prerender,
//     async getPrerenderParams() {
//       const dataService = inject(ProductService);
//       const ids = await dataService.getIds(); // ["1", "2", "3"]
//       // `id` is used in place of `:id` in the route path.
//       return ids.map(id => ({ id }));
//     }
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
