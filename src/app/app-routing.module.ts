import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddImageComponent } from './components/add-image/add-image.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { VisualiserComponent } from './components/visualiser/visualiser.component';

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
  {
    path:'visual',
    component: VisualiserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
