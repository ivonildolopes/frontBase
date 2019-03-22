import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './notification/notification.service';
import { ApplicationErrorHandler } from '../app.error-handler';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
   // CustomMaterialModule,
    // BrowserModule,
    //TextMaskModule
  ],
  declarations: [],
  providers: [NotificationService,  { provide: ErrorHandler, useClass: ApplicationErrorHandler }]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NotificationService]
    };
  }
}
