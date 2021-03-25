import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddImageComponent } from './components/add-image/add-image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MetricsComponent } from './components/metrics/metrics.component';
import { VisualiserComponent } from './components/visualiser/visualiser.component';
import { MisclassifiedComponent } from './components/misclassified/misclassified.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReportComponent } from './components/report/report.component';
import { HomeComponent } from './components/home/home.component';
import { TrainComponent } from './components/train/train.component';

@NgModule({
  declarations: [
    AppComponent,
    AddImageComponent,
    MetricsComponent,
    VisualiserComponent,
    MisclassifiedComponent,
    ReportComponent,
    HomeComponent,
    TrainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    ImageCropperModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
