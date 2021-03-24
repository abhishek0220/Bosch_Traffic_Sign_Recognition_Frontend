import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddImageComponent } from './components/add-image/add-image.component';
import { MetricsComponent } from './components/metrics/metrics.component';

const routes: Routes = [
  {
    path:'',
    component: AddImageComponent
  },
  {
    path:'addImage',
    component: AddImageComponent
  },
  {
    path:'metrics',
    component: MetricsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
