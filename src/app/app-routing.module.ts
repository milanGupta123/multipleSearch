import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearappComponent } from './searapp/searapp.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/search',
      pathMatch: 'full',
    },

  {
    path: 'search',
    component: SearappComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
