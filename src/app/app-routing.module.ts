import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddImageComponent } from './components/add-image/add-image.component';
import { HomeComponent } from './components/home/home.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { MisclassifiedComponent } from './components/misclassified/misclassified.component';
import { ReportComponent } from './components/report/report.component';
import { VisualiserComponent } from './components/visualiser/visualiser.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
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
  {
    path:'report',
    component: ReportComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
