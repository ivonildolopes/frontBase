import { NgModule, ErrorHandler } from '@angular/core';
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
import { ApplicationErrorHandler } from '../app.error-handler';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule,
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
