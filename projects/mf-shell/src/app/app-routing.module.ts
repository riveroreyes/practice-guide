import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoremResolver } from './lorem.resolver';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    resolve: {dataRe: LoremResolver}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
