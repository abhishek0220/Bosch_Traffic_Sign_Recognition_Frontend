import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddImageComponent } from './components/add-image/add-image.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { MisclassifiedComponent } from './components/misclassified/misclassified.component';
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
  {
    path:'misclassified',
    component: MisclassifiedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }