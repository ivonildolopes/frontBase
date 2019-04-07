import { NgModule, ErrorHandler } from '@angular/core';
import { ApplicationErrorHandler } from './../app.errorHandler.component';
import { CommonModule } from '@angular/common';

import { PdfRoutingModule } from './pdf-routing.module';
import { PdfComponent } from './pdf/pdf.component';
import { PdfServiceService } from './pdf-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  HttpModule,
  Http,
  XHRBackend,
  RequestOptions as ro
} from '@angular/http';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    PdfRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [PdfComponent],
  providers: [PdfServiceService, { provide: ErrorHandler, useClass: ApplicationErrorHandler }]
})
export class PdfModule { }
