import { ContainerModule } from './container/container.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfModule } from './pdf/pdf.module';
import { SharedModule } from './shared';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { FirebaseModule } from './firebase/firebase.module';

import { MaterialModule } from './material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ContainerModule,
    PdfModule,
    FirebaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
