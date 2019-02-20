import { NgModule } from '@angular/core';
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

@NgModule({
  imports: [
    CommonModule,
    PdfRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [PdfComponent],
  providers: [PdfServiceService]
})
export class PdfModule { }
