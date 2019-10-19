import { NgModule, ErrorHandler } from '@angular/core';
import { ApplicationErrorHandler } from './../app.errorHandler.component';
import { CommonModule } from '@angular/common';

import { FirebaseComponent } from './firebase.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { FirebaseService } from './firebase.service';
import { ContatoDataService } from './contato-data.service';
import { FirebaseRoutingModule } from './firebase-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeModule } from '../prime.module';


@NgModule({
  imports: [
    CommonModule,
    FirebaseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeModule

  ],
  providers: [FirebaseService, ContatoDataService,{ provide: ErrorHandler, useClass: ApplicationErrorHandler }],
  declarations: [
    FirebaseComponent,
    FormComponent,
    ListComponent
  ]
})
export class FirebaseModule { }
