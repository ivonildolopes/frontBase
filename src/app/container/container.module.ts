import { RouterModule } from '@angular/router';
import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    RouterModule,
    LayoutModule,
  ],
})
export class ContainerModule { }
