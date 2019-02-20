import { ContainerModule } from './container/container.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfModule } from './pdf/pdf.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContainerModule,
    PdfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
